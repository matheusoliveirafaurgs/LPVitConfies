"use client";

import { useRef, useState } from "react";

/* ────────────────────────────────────────────────────────────────
   TEXTO DE CONSENTIMENTO — PLACEHOLDER

   O texto definitivo está em avaliação jurídica. Substituir a
   constante abaixo quando aprovado e atualizar CONSENTIMENTO_VERSAO.

   O texto final precisa cobrir dois propósitos distintos:
   (a) uso dos dados de cadastro para contato comercial;
   (b) processamento do conteúdo das reuniões enviadas ao Vit, que
       pode conter dados pessoais de terceiros.
   ──────────────────────────────────────────────────────────────── */
const TEXTO_CONSENTIMENTO =
  "[PLACEHOLDER] — texto de consentimento. ";

const CONSENTIMENTO_VERSAO = "provisorio-2026-07";
const EVENTO_ORIGEM = "9º Congresso Nacional do CONFIES";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;

/* ── Utilitários ─────────────────────────────────────────────── */

function mascararTelefone(valor) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length <= 2) return digitos;
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  if (digitos.length <= 10) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
  }
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

function validar(dados) {
  const erros = {};

  if (dados.nome.trim().length < 3) {
    erros.nome = "Informe seu nome completo.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(dados.email.trim())) {
    erros.email = "Informe um e-mail válido, como nome@instituicao.org.br.";
  }

  const digitos = dados.telefone.replace(/\D/g, "");
  if (digitos.length < 10) {
    erros.telefone = "Informe o telefone com DDD.";
  }

  if (dados.instituicao.trim().length < 2) {
    erros.instituicao = "Informe o nome da sua instituição.";
  }

  if (!dados.consentimento) {
    erros.consentimento = "É preciso aceitar para receber o acesso.";
  }

  return erros;
}

/* ── Campo ───────────────────────────────────────────────────── */

function Campo({
  id,
  rotulo,
  tipo = "text",
  valor,
  aoMudar,
  erro,
  autoComplete,
  inputMode,
  placeholder,
}) {
  const idErro = `${id}-erro`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-claro"
      >
        {rotulo}
      </label>
      <input
        id={id}
        name={id}
        type={tipo}
        value={valor}
        onChange={aoMudar}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-invalid={erro ? "true" : undefined}
        aria-describedby={erro ? idErro : undefined}
        className={[
          "mt-2 block w-full rounded-sm bg-preto px-4 py-3.5 text-base",
          "text-branco placeholder:text-branco/35",
          "border transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-azul-claro focus:ring-offset-0",
          erro
            ? "border-azul-claro"
            : "border-branco/20 hover:border-branco/35 focus:border-azul-claro",
        ].join(" ")}
      />
      {erro && (
        <p
          id={idErro}
          role="alert"
          className="mt-2 border-l-2 border-azul-claro pl-3 text-sm font-light text-azul-claro"
        >
          {erro}
        </p>
      )}
    </div>
  );
}

/* ── Formulário ──────────────────────────────────────────────── */

const INICIAL = {
  nome: "",
  email: "",
  telefone: "",
  instituicao: "",
  consentimento: false,
};

export default function FormularioCadastro() {
  const [dados, setDados] = useState(INICIAL);
  const [erros, setErros] = useState({});
  const [status, setStatus] = useState("inicial"); // inicial | enviando | concluido | falha
  const armadilha = useRef(null);

  function atualizar(campo, valor) {
    setDados((atual) => ({ ...atual, [campo]: valor }));
    setErros((atual) => {
      if (!atual[campo]) return atual;
      const proximo = { ...atual };
      delete proximo[campo];
      return proximo;
    });
  }

  async function enviar(evento) {
    evento.preventDefault();

    // Armadilha para robôs: preenchida significa envio automatizado.
    // Confirma sem enviar nada.
    if (armadilha.current?.value) {
      setStatus("concluido");
      return;
    }

    const encontrados = validar(dados);
    if (Object.keys(encontrados).length > 0) {
      setErros(encontrados);
      const primeiro = document.getElementById(Object.keys(encontrados)[0]);
      primeiro?.focus();
      return;
    }

    setStatus("enviando");

    try {
      const resposta = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: dados.nome.trim(),
          email: dados.email.trim().toLowerCase(),
          telefone: dados.telefone.replace(/\D/g, ""),
          instituicao: dados.instituicao.trim(),
          consentimentoLGPD: true,
          consentimentoVersao: CONSENTIMENTO_VERSAO,
          eventoOrigem: EVENTO_ORIGEM,
        }),
      });

      if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
      setStatus("concluido");
    } catch {
      setStatus("falha");
    }
  }

  /* ── Confirmação ───────────────────────────────────────────── */

  if (status === "concluido") {
    return (
      <div
        role="status"
        className="rounded-sm bg-azul-escuro p-7 sm:p-9 vt-surge"
      >
        <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-claro">
          Cadastro confirmado
        </p>
        <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
          O acesso está a caminho
        </h2>
        <p className="mt-4 text-base leading-relaxed text-branco/90">
          Enviamos o link do Vit para{" "}
          <span className="font-semibold">{dados.email.trim()}</span>. A partir
          dele você envia o áudio de uma reunião e recebe a ata pronta.
        </p>
        <p className="mt-3 text-sm font-light leading-relaxed text-branco/70">
          Se não encontrar a mensagem, procure na caixa de spam ou em promoções.
        </p>
      </div>
    );
  }

  /* ── Formulário ────────────────────────────────────────────── */

  const enviando = status === "enviando";

  return (
    <form
      onSubmit={enviar}
      noValidate
      className="rounded-sm bg-azul-escuro p-6 sm:p-8"
    >
      <h2 className="text-xl font-extrabold leading-tight sm:text-2xl">
        Receba seu acesso
      </h2>
      <p className="mt-2 text-sm font-light leading-relaxed text-branco/75">
        O link chega por e-mail em alguns instantes.
      </p>

      <div className="mt-7 space-y-5">
        <Campo
          id="nome"
          rotulo="Nome completo"
          valor={dados.nome}
          aoMudar={(e) => atualizar("nome", e.target.value)}
          erro={erros.nome}
          autoComplete="name"
        />

        <Campo
          id="email"
          rotulo="E-mail"
          tipo="email"
          valor={dados.email}
          aoMudar={(e) => atualizar("email", e.target.value)}
          erro={erros.email}
          autoComplete="email"
          inputMode="email"
          placeholder="nome@instituicao.org.br"
        />

        <Campo
          id="telefone"
          rotulo="Telefone"
          tipo="tel"
          valor={dados.telefone}
          aoMudar={(e) => atualizar("telefone", mascararTelefone(e.target.value))}
          erro={erros.telefone}
          autoComplete="tel"
          inputMode="tel"
          placeholder="(51) 99999-9999"
        />

        <Campo
          id="instituicao"
          rotulo="Instituição"
          valor={dados.instituicao}
          aoMudar={(e) => atualizar("instituicao", e.target.value)}
          erro={erros.instituicao}
          autoComplete="organization"
        />

        {/* Armadilha para robôs. Invisível e fora da ordem de tabulação. */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-auto">
          <label htmlFor="site-secundario">Não preencha este campo</label>
          <input
            ref={armadilha}
            id="site-secundario"
            name="site-secundario"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="border-t border-branco/15 pt-5">
          <div className="flex gap-3">
            <input
              id="consentimento"
              name="consentimento"
              type="checkbox"
              checked={dados.consentimento}
              onChange={(e) => atualizar("consentimento", e.target.checked)}
              aria-invalid={erros.consentimento ? "true" : undefined}
              aria-describedby={
                erros.consentimento ? "consentimento-erro" : undefined
              }
              className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-azul-claro"
            />
            <label
              htmlFor="consentimento"
              className="cursor-pointer text-sm font-light leading-relaxed text-branco/80"
            >
              {TEXTO_CONSENTIMENTO}
            </label>
          </div>
          {erros.consentimento && (
            <p
              id="consentimento-erro"
              role="alert"
              className="mt-2 border-l-2 border-azul-claro pl-3 text-sm font-light text-azul-claro"
            >
              {erros.consentimento}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={enviando}
        className={[
          "mt-7 w-full rounded-sm px-6 py-4 text-base font-semibold",
          "bg-azul-claro text-preto",
          "transition-colors duration-150",
          "hover:bg-branco focus:outline-none focus-visible:ring-2",
          "focus-visible:ring-branco focus-visible:ring-offset-2",
          "focus-visible:ring-offset-azul-escuro",
          "disabled:cursor-wait disabled:bg-azul-medio disabled:text-branco",
        ].join(" ")}
      >
        {enviando ? "Enviando…" : "Quero meu acesso"}
      </button>

      {status === "falha" && (
        <p
          role="alert"
          className="mt-4 border-l-2 border-azul-claro pl-3 text-sm font-light leading-relaxed text-azul-claro"
        >
          O cadastro não foi concluído. Verifique sua conexão e envie de novo —
          seus dados continuam preenchidos.
        </p>
      )}
    </form>
  );
}
