"use client";

import { useEffect, useState } from "react";

const WEBHOOK_URL = "https://n8n.vitora.com.br/webhook/vit/lead-saude";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
];

const SEGMENTOS_VALIDOS = new Set([
  "hospital",
  "distribuidora-medicamentos",
  "industria-farmaceutica",
  "produtos-equipamentos-medicos",
  "outros",
]);

export default function FormularioSaude() {
  const [segmento, setSegmento] = useState("");
  const [tracking, setTracking] = useState({});
  const [status, setStatus] = useState("idle");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dadosTracking = {};

    TRACKING_KEYS.forEach((key) => {
      const valorUrl = params.get(key);

      if (valorUrl) {
        const valorTratado = valorUrl.slice(0, 250);

        sessionStorage.setItem(key, valorTratado);
        dadosTracking[key] = valorTratado;
        return;
      }

      const valorSalvo = sessionStorage.getItem(key);

      if (valorSalvo) {
        dadosTracking[key] = valorSalvo.slice(0, 250);
      }
    });

    setTracking(dadosTracking);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    /*
     * Honeypot.
     * Usuários reais nunca preenchem este campo.
     */
    const website = String(formData.get("website") || "").trim();

    if (website) {
      return;
    }

    if (!SEGMENTOS_VALIDOS.has(segmento)) {
      setStatus("error");
      setMensagem("Selecione um segmento válido.");
      return;
    }

    const outroSegmento =
      segmento === "outros"
        ? String(formData.get("outroSegmento") || "")
            .trim()
            .slice(0, 120)
        : "";

    if (segmento === "outros" && !outroSegmento) {
      setStatus("error");
      setMensagem("Informe seu segmento.");
      return;
    }

    const payload = {
      nome: String(formData.get("nome") || "")
        .trim()
        .slice(0, 120),

      email: String(formData.get("email") || "")
        .trim()
        .toLowerCase()
        .slice(0, 180),

      telefone: String(formData.get("telefone") || "")
        .trim()
        .slice(0, 40),

      instituicao: String(formData.get("empresa") || "")
        .trim()
        .slice(0, 160),

      segmento,

      outroSegmento,

      consentimentoLGPD: formData.get("consentimentoLGPD") === "on",

      consentimentoVersao: "saude-2026-08",

      

      ...tracking,
    };

    if (!payload.consentimentoLGPD) {
      setStatus("error");
      setMensagem(
        "É necessário concordar com o uso dos dados para prosseguir.",
      );
      return;
    }

    setStatus("loading");
    setMensagem("");

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
        "Solicitação enviada com sucesso. Em breve, a equipe do Vitora entrará em contato.",
      );

      form.reset();
      setSegmento("");
    } catch (error) {
      console.error("Erro ao enviar formulário da LP Saúde:", error);

      setStatus("error");

      setMensagem(
        "Não foi possível enviar sua solicitação agora. Tente novamente em alguns instantes.",
      );
    }
  }

  return (
    <form
      className="mt-5 space-y-2.5"
      onSubmit={handleSubmit}
      noValidate={false}
      aria-busy={status === "loading"}
    >
      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>

        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <input
        type="text"
        name="nome"
        placeholder="Nome e sobrenome"
        autoComplete="name"
        required
        minLength={2}
        maxLength={120}
        className="h-[42px] w-full rounded-[5px] border border-black/15 px-3 text-[12px] outline-none transition focus:border-[#1B456A]"
      />

      <input
        type="email"
        name="email"
        placeholder="E-mail corporativo"
        autoComplete="email"
        required
        maxLength={180}
        className="h-[42px] w-full rounded-[5px] border border-black/15 px-3 text-[12px] outline-none transition focus:border-[#1B456A]"
      />

      <input
        type="text"
        name="empresa"
        placeholder="Empresa"
        autoComplete="organization"
        required
        minLength={2}
        maxLength={160}
        className="h-[42px] w-full rounded-[5px] border border-black/15 px-3 text-[12px] outline-none transition focus:border-[#1B456A]"
      />

      <div className="grid gap-2.5 sm:grid-cols-2">
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          autoComplete="tel"
          required
          minLength={8}
          maxLength={40}
          className="h-[42px] w-full rounded-[5px] border border-black/15 px-3 text-[12px] outline-none transition focus:border-[#1B456A]"
        />

        <label htmlFor="segmento" className="sr-only">
          Segmento
        </label>

        <select
          id="segmento"
          name="segmento"
          value={segmento}
          onChange={(event) => setSegmento(event.target.value)}
          required
          className="h-[42px] w-full rounded-[5px] border border-black/15 bg-white px-3 text-[12px] text-black/70 outline-none transition focus:border-[#1B456A]"
        >
          <option value="" disabled>
            Segmento
          </option>

          <option value="hospital">Hospital</option>

          <option value="distribuidora-medicamentos">
            Distribuidora de medicamentos
          </option>

          <option value="industria-farmaceutica">Indústria farmacêutica</option>

          <option value="produtos-equipamentos-medicos">
            Produtos e equipamentos médicos
          </option>

          <option value="outros">Outros</option>
        </select>
      </div>

      {segmento === "outros" && (
        <input
          type="text"
          name="outroSegmento"
          placeholder="Informe seu segmento"
          required
          minLength={2}
          maxLength={120}
          className="h-[42px] w-full rounded-[5px] border border-black/15 px-3 text-[12px] outline-none transition focus:border-[#1B456A]"
        />
      )}

      <label className="flex cursor-pointer items-start gap-2 pt-2 text-[10px] leading-[1.45] text-black/75 sm:text-[11px]">
        <input
          type="checkbox"
          name="consentimentoLGPD"
          required
          className="mt-[2px] h-3.5 w-3.5 shrink-0 accent-[#4EAED4]"
        />

        <span>
          Concordo com o uso dos meus dados para contato comercial, conforme a
          Política de Privacidade.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-3 h-[44px] w-full rounded-full bg-[#1B456A] px-6 text-[11px] font-bold uppercase tracking-[0.05em] text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Solicitar proposta"}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {mensagem && (
          <p
            className={`pt-2 text-center text-[11px] leading-relaxed ${
              status === "success" ? "text-[#258f75]" : "text-red-600"
            }`}
          >
            {mensagem}
          </p>
        )}
      </div>
    </form>
  );
}
