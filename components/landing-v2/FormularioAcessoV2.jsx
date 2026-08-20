"use client";

import { useState, useRef } from "react";

function Campo({
  id,
  rotulo,
  tipo = "text",
  valor,
  aoMudar,
  erro,
  autoComplete,
  placeholder,
}) {
  return (
    <div>
      <input
        id={id}
        name={id}
        type={tipo}
        value={valor}
        onChange={aoMudar}
        autoComplete={autoComplete}
        placeholder={placeholder || rotulo}
        aria-invalid={erro ? "true" : undefined}
        className={[
          "w-full rounded-sm border px-4 py-3.5 text-sm text-preto placeholder:text-preto/45",
          "transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-azul-escuro/40",
          erro
            ? "border-azul-escuro"
            : "border-preto/15 hover:border-preto/30 focus:border-azul-escuro",
        ].join(" ")}
      />

      {erro && (
        <p
          role="alert"
          className="mt-1.5 text-xs font-light text-azul-escuro"
        >
          {erro}
        </p>
      )}
    </div>
  );
}

const inicial = {
  nome: "",
  email: "",
  instituicao: "",
  telefone: "",
  consentimentoLGPD: false,
};

export default function FormularioAcessoV2() {
  const [dados, setDados] = useState(inicial);
  const [erros, setErros] = useState({});
  const [estado, setEstado] = useState("inicial");

  const honeypot = useRef(null);

  function mudar(campo, valor) {
    setDados((d) => ({
      ...d,
      [campo]: valor,
    }));

    setErros((e) => {
      if (!e[campo]) return e;

      const novo = { ...e };
      delete novo[campo];

      return novo;
    });
  }

  function validar(d) {
    const e = {};

    if (d.nome.trim().length < 3) {
      e.nome = "Informe seu nome completo.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
        d.email.trim()
      )
    ) {
      e.email = "Informe um e-mail corporativo válido.";
    }

    if (d.instituicao.trim().length < 2) {
      e.instituicao = "Informe sua instituição.";
    }

    if (
      d.telefone.replace(/\D/g, "").length < 10
    ) {
      e.telefone = "Informe o telefone com DDD.";
    }

    if (!d.consentimentoLGPD) {
      e.consentimentoLGPD =
        "Você precisa autorizar o tratamento dos dados para continuar.";
    }

    return e;
  }

  function formatarTelefone(valor) {
    const t = valor
      .replace(/\D/g, "")
      .slice(0, 11);

    if (t.length <= 2) {
      return t;
    }

    if (t.length <= 6) {
      return `(${t.slice(0, 2)}) ${t.slice(2)}`;
    }

    if (t.length <= 10) {
      return `(${t.slice(0, 2)}) ${t.slice(
        2,
        6
      )}-${t.slice(6)}`;
    }

    return `(${t.slice(0, 2)}) ${t.slice(
      2,
      7
    )}-${t.slice(7)}`;
  }

  async function enviar(e) {
    e.preventDefault();

    if (honeypot.current?.value) {
      setEstado("concluido");
      return;
    }

    const validacao = validar(dados);

    if (Object.keys(validacao).length > 0) {
      setErros(validacao);

      const primeiroErro =
        Object.keys(validacao)[0];

      document
        .getElementById(primeiroErro)
        ?.focus();

      return;
    }

    setEstado("enviando");

    try {
      const resp = await fetch(
        process.env.NEXT_PUBLIC_WEBHOOK_URL,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            nome: dados.nome.trim(),

            email: dados.email
              .trim()
              .toLowerCase(),

            telefone: dados.telefone.replace(
              /\D/g,
              ""
            ),

            instituicao:
              dados.instituicao.trim(),

            consentimentoLGPD:
              dados.consentimentoLGPD,

            consentimentoVersao:
              "landing-v2-2026-08",

            eventoOrigem: "LP Vit Reunião"
          }),
        }
      );

      if (!resp.ok) {
        throw new Error(
          `HTTP ${resp.status}`
        );
      }

      setEstado("concluido");
    } catch {
      setEstado("falha");
    }
  }

  if (estado === "concluido") {
    return (
      <div
        role="status"
        className="rounded-sm bg-preto p-7 sm:p-9"
      >
        <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-claro">
          Cadastro confirmado
        </p>

        <h3 className="mt-3 text-2xl font-extrabold leading-tight text-branco">
          O acesso está a caminho
        </h3>

        <p className="mt-4 text-base leading-relaxed text-branco/85">
          Enviamos o link da Vit para{" "}
          <span className="font-semibold">
            {dados.email.trim()}
          </span>
          .
        </p>
      </div>
    );
  }

  const enviando =
    estado === "enviando";

  return (
    <form
      onSubmit={enviar}
      noValidate
      className="space-y-4"
    >
      <Campo
        id="nome"
        rotulo="Nome completo"
        valor={dados.nome}
        aoMudar={(e) =>
          mudar(
            "nome",
            e.target.value
          )
        }
        erro={erros.nome}
        autoComplete="name"
      />

      <Campo
        id="email"
        rotulo="E-mail corporativo"
        tipo="email"
        valor={dados.email}
        aoMudar={(e) =>
          mudar(
            "email",
            e.target.value
          )
        }
        erro={erros.email}
        autoComplete="email"
      />

      <Campo
        id="instituicao"
        rotulo="Instituição"
        valor={dados.instituicao}
        aoMudar={(e) =>
          mudar(
            "instituicao",
            e.target.value
          )
        }
        erro={erros.instituicao}
        autoComplete="organization"
      />

      <Campo
        id="telefone"
        rotulo="Telefone"
        tipo="tel"
        valor={dados.telefone}
        aoMudar={(e) =>
          mudar(
            "telefone",
            formatarTelefone(
              e.target.value
            )
          )
        }
        erro={erros.telefone}
        autoComplete="tel"
      />

      {/* LGPD */}
      <div>
        <label
          htmlFor="consentimentoLGPD"
          className="flex cursor-pointer items-start gap-3"
        >
          <input
            id="consentimentoLGPD"
            name="consentimentoLGPD"
            type="checkbox"
            checked={
              dados.consentimentoLGPD
            }
            onChange={(e) =>
              mudar(
                "consentimentoLGPD",
                e.target.checked
              )
            }
            aria-invalid={
              erros.consentimentoLGPD
                ? "true"
                : undefined
            }
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-azul-escuro"
          />

          <span className="text-xs font-normal leading-relaxed text-preto/65">
            Li e concordo com o tratamento dos
            meus dados pessoais para receber o
            acesso à Vit e comunicações
            relacionadas a esta experiência.
          </span>
        </label>

        {erros.consentimentoLGPD && (
          <p
            role="alert"
            className="mt-1.5 text-xs font-light text-azul-escuro"
          >
            {
              erros.consentimentoLGPD
            }
          </p>
        )}
      </div>

      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto"
      >
        <input
          ref={honeypot}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="mt-2 w-full rounded-sm bg-preto px-6 py-4 text-sm font-bold uppercase tracking-wide text-branco transition-colors duration-150 hover:bg-azul-escuro disabled:cursor-wait disabled:opacity-70"
      >
        {enviando
          ? "Enviando..."
          : "Quero conhecer a Vit"}
      </button>

      {estado === "falha" && (
        <p
          role="alert"
          className="text-sm font-light text-azul-escuro"
        >
          O cadastro não foi concluído.
          Verifique sua conexão e envie de novo.
        </p>
      )}
    </form>
  );
}