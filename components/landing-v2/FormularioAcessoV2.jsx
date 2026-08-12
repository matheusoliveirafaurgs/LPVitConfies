"use client";

import { useState, useRef } from "react";

function Campo({ id, rotulo, tipo = "text", valor, aoMudar, erro, autoComplete, placeholder }) {
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
          erro ? "border-azul-escuro" : "border-preto/15 hover:border-preto/30 focus:border-azul-escuro",
        ].join(" ")}
      />
      {erro && (
        <p role="alert" className="mt-1.5 text-xs font-light text-azul-escuro">
          {erro}
        </p>
      )}
    </div>
  );
}

const SEGMENTOS = ["Industria", "Servicos", "Saude", "Educacao", "Varejo", "Outro"];

const inicial = {
  nome: "",
  sobrenome: "",
  funcaoEmpresa: "",
  email: "",
  telefone: "",
  segmento: "",
};

export default function FormularioAcessoV2() {
  const [dados, setDados] = useState(inicial);
  const [erros, setErros] = useState({});
  const [estado, setEstado] = useState("inicial");
  const honeypot = useRef(null);

  function mudar(campo, valor) {
    setDados((d) => ({ ...d, [campo]: valor }));
    setErros((e) => {
      if (!e[campo]) return e;
      const novo = { ...e };
      delete novo[campo];
      return novo;
    });
  }

  function validar(d) {
    const e = {};
    if (d.nome.trim().length < 2) e.nome = "Informe seu nome.";
    if (d.sobrenome.trim().length < 2) e.sobrenome = "Informe seu sobrenome.";
    if (d.funcaoEmpresa.trim().length < 2) e.funcaoEmpresa = "Informe sua funcao e empresa.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim()))
      e.email = "Informe um e-mail corporativo valido.";
    if (d.telefone.replace(/\D/g, "").length < 10) e.telefone = "Informe o telefone com DDD.";
    if (!d.segmento) e.segmento = "Selecione um segmento.";
    return e;
  }

  function formatarTelefone(valor) {
    const t = valor.replace(/\D/g, "").slice(0, 11);
    if (t.length <= 2) return t;
    if (t.length <= 6) return `(${t.slice(0, 2)}) ${t.slice(2)}`;
    if (t.length <= 10) return `(${t.slice(0, 2)}) ${t.slice(2, 6)}-${t.slice(6)}`;
    return `(${t.slice(0, 2)}) ${t.slice(2, 7)}-${t.slice(7)}`;
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
      document.getElementById(Object.keys(validacao)[0])?.focus();
      return;
    }
    setEstado("enviando");
    try {
      const resp = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: `${dados.nome.trim()} ${dados.sobrenome.trim()}`,
          email: dados.email.trim().toLowerCase(),
          telefone: dados.telefone.replace(/\D/g, ""),
          instituicao: dados.funcaoEmpresa.trim(),
          segmento: dados.segmento,
          consentimentoLGPD: true,
          consentimentoVersao: "landing-v2-2026-08",
          eventoOrigem: "Landing V2 - Vitora",
        }),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      setEstado("concluido");
    } catch {
      setEstado("falha");
    }
  }

  if (estado === "concluido") {
    return (
      <div role="status" className="rounded-sm bg-preto p-7 sm:p-9">
        <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-claro">
          Cadastro confirmado
        </p>
        <h3 className="mt-3 text-2xl font-extrabold leading-tight text-branco">
          O acesso esta a caminho
        </h3>
        <p className="mt-4 text-base leading-relaxed text-branco/85">
          Enviamos o link da Vit para{" "}
          <span className="font-semibold">{dados.email.trim()}</span>.
        </p>
      </div>
    );
  }

  const enviando = estado === "enviando";

  return (
    <form onSubmit={enviar} noValidate className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Campo id="nome" rotulo="Nome" valor={dados.nome} aoMudar={(e) => mudar("nome", e.target.value)} erro={erros.nome} autoComplete="given-name" />
        <Campo id="sobrenome" rotulo="Sobrenome" valor={dados.sobrenome} aoMudar={(e) => mudar("sobrenome", e.target.value)} erro={erros.sobrenome} autoComplete="family-name" />
      </div>
      <Campo id="funcaoEmpresa" rotulo="Funcao / Empresa" valor={dados.funcaoEmpresa} aoMudar={(e) => mudar("funcaoEmpresa", e.target.value)} erro={erros.funcaoEmpresa} autoComplete="organization-title" />
      <Campo id="email" rotulo="E-mail corporativo" tipo="email" valor={dados.email} aoMudar={(e) => mudar("email", e.target.value)} erro={erros.email} autoComplete="email" />
      <div className="grid grid-cols-2 gap-4">
        <Campo id="telefone" rotulo="Telefone" tipo="tel" valor={dados.telefone} aoMudar={(e) => mudar("telefone", formatarTelefone(e.target.value))} erro={erros.telefone} autoComplete="tel" />
        <div>
          <select
            id="segmento"
            value={dados.segmento}
            onChange={(e) => mudar("segmento", e.target.value)}
            aria-invalid={erros.segmento ? "true" : undefined}
            className={[
              "w-full rounded-sm border bg-branco px-4 py-3.5 text-sm text-preto",
              "transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-azul-escuro/40",
              erros.segmento ? "border-azul-escuro" : "border-preto/15 hover:border-preto/30 focus:border-azul-escuro",
              dados.segmento === "" ? "text-preto/45" : "",
            ].join(" ")}
          >
            <option value="" disabled>Segmento</option>
            {SEGMENTOS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {erros.segmento && (
            <p role="alert" className="mt-1.5 text-xs font-light text-azul-escuro">{erros.segmento}</p>
          )}
        </div>
      </div>

      <div aria-hidden="true" className="absolute left-[-9999px] top-auto">
        <input ref={honeypot} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="mt-2 w-full rounded-sm bg-preto px-6 py-4 text-sm font-bold uppercase tracking-wide text-branco transition-colors duration-150 hover:bg-azul-escuro disabled:cursor-wait disabled:opacity-70"
      >
        {enviando ? "Enviando..." : "Quero conhecer a Vit"}
      </button>

      {estado === "falha" && (
        <p role="alert" className="text-sm font-light text-azul-escuro">
          O cadastro nao foi concluido. Verifique sua conexao e envie de novo.
        </p>
      )}
    </form>
  );
}
