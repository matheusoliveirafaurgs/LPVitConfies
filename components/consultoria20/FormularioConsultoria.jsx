"use client";

import { useState } from "react";

const WEBHOOK_URL =
  "https://n8n.vitora.com.br/webhook/vit/lead-consultoria";

export default function FormularioConsultoria() {
  const [segmento, setSegmento] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");
    setMensagem("");

    const formData = new FormData(event.currentTarget);

    const outroSegmento =
      segmento === "outros"
        ? String(formData.get("outroSegmento") || "").trim()
        : "";

    const payload = {
      nome: String(formData.get("nome") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      telefone: String(formData.get("telefone") || "").trim(),

      instituicao: String(formData.get("empresa") || "").trim(),
      funcao: String(formData.get("funcao") || "").trim(),

      segmento,
      outroSegmento,

      consentimentoLGPD: formData.get("consentimentoLGPD") === "on",
      consentimentoVersao: "consultoria20-2026-08",
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }

      setStatus("success");
      setMensagem(
        "Cadastro enviado com sucesso. Em breve, a equipe do Vitora poderá entrar em contato."
      );

      event.currentTarget.reset();
      setSegmento("");
    } catch (error) {
      console.error("Erro ao enviar formulário de consultoria:", error);

      setStatus("error");
      setMensagem(
        "Não foi possível enviar seu cadastro agora. Tente novamente em alguns instantes."
      );
    }
  }

  return (
    <form
      className="mt-5 space-y-2.5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        autoComplete="name"
        required
        className="h-[38px] w-full rounded-[3px] border border-black/15 px-3 text-[11px] outline-none transition focus:border-[#49c7a9]"
      />

      <div className="grid gap-2.5 sm:grid-cols-2">
        <input
          type="text"
          name="funcao"
          placeholder="Função"
          required
          className="h-[38px] w-full rounded-[3px] border border-black/15 px-3 text-[11px] outline-none transition focus:border-[#49c7a9]"
        />

        <input
          type="text"
          name="empresa"
          placeholder="Empresa"
          required
          className="h-[38px] w-full rounded-[3px] border border-black/15 px-3 text-[11px] outline-none transition focus:border-[#49c7a9]"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="E-mail corporativo"
        autoComplete="email"
        required
        className="h-[38px] w-full rounded-[3px] border border-black/15 px-3 text-[11px] outline-none transition focus:border-[#49c7a9]"
      />

      <div className="grid gap-2.5 sm:grid-cols-2">
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          autoComplete="tel"
          required
          className="h-[38px] w-full rounded-[3px] border border-black/15 px-3 text-[11px] outline-none transition focus:border-[#49c7a9]"
        />

        <select
          name="segmento"
          value={segmento}
          onChange={(event) => setSegmento(event.target.value)}
          required
          className="h-[38px] w-full rounded-[3px] border border-black/15 bg-white px-3 text-[11px] text-black/60 outline-none transition focus:border-[#49c7a9]"
        >
          <option value="" disabled>
            Segmento
          </option>

          <option value="industria">Indústria</option>
          <option value="servicos">Serviços</option>
          <option value="educacao">Educação</option>
          <option value="saude">Saúde</option>
          <option value="outros">Outros</option>
        </select>
      </div>

      {segmento === "outros" && (
        <input
          type="text"
          name="outroSegmento"
          placeholder="Informe seu segmento"
          required
          className="h-[38px] w-full rounded-[3px] border border-black/15 px-3 text-[11px] outline-none transition focus:border-[#49c7a9]"
        />
      )}

      <label className="flex cursor-pointer items-start gap-2 pt-2 text-[10px] leading-[1.45] text-black/60 sm:text-[11px]">
        <input
          type="checkbox"
          name="consentimentoLGPD"
          required
          className="mt-[2px] h-3.5 w-3.5 shrink-0 accent-[#49c7a9]"
        />

        <span>
          Li e concordo com o tratamento dos meus dados para contato sobre
          esta ação do Vitora.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-3 h-[40px] w-full rounded-full bg-[#49c7a9] px-6 text-[11px] font-bold uppercase tracking-[0.04em] text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Quero participar"}
      </button>

      {mensagem && (
        <p
          className={`pt-2 text-center text-[11px] leading-relaxed ${
            status === "success"
              ? "text-[#258f75]"
              : "text-red-600"
          }`}
        >
          {mensagem}
        </p>
      )}
    </form>
  );
}