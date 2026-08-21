"use client";

import { useEffect, useState } from "react";

const WEBHOOK_URL =
  "https://n8n.vitora.com.br/webhook/vit/lead-confies";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
];

export default function FormularioQueroVitora() {
  const [segmento, setSegmento] = useState("");
  const [tracking, setTracking] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dados = {};

    TRACKING_KEYS.forEach((key) => {
      const valorUrl = params.get(key);

      if (valorUrl) {
        sessionStorage.setItem(`vitora_${key}`, valorUrl);
        dados[key] = valorUrl;
        return;
      }

      dados[key] = sessionStorage.getItem(`vitora_${key}`) || "";
    });

    setTracking(dados);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    setEnviando(true);
    setErro("");
    setEnviado(false);

    try {
      const formData = new FormData(form);

      // Honeypot
      if (formData.get("website")) {
        setEnviado(true);
        return;
      }

      const payload = {
        nome: formData.get("nome")?.trim(),
        email: formData.get("email")?.trim(),
        telefone: formData.get("telefone")?.trim(),
        instituicao: formData.get("empresa")?.trim(),

        segmento: formData.get("segmento"),
        outroSegmento: formData.get("outroSegmento")?.trim() || "",

        consentimentoLGPD: formData.get("consentimento") === "on",
        consentimentoVersao: "lp-padrao-2026-08",

        eventoOrigem: "LP Padrão",

        ...tracking,
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar formulário.");
      }

      form.reset();
      setSegmento("");
      setEnviado(true);
    } catch (error) {
      console.error(error);

      setErro(
        "Não foi possível enviar seus dados agora. Tente novamente em alguns instantes."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div
      className="
        relative
        w-full
        max-w-[520px]
        overflow-hidden
        rounded-[26px]
        border
        border-white/10
        bg-[#081319]/90
        p-6
        shadow-[0_30px_100px_rgba(0,0,0,0.35)]
        backdrop-blur-xl

        sm:p-8
        lg:p-9
      "
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#78C7E5] to-transparent" />

      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#78C7E5]">
        Fale com um especialista
      </p>

      <h2 className="mt-3 text-[27px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-[30px]">
        Descubra como o Vitora pode apoiar a sua gestão.
      </h2>

      <p className="mt-3 text-[12px] leading-[1.65] text-white/45">
        Preencha seus dados e nossa equipe entrará em contato para entender sua
        operação e apresentar a solução mais adequada.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-3">
        {/* Honeypot */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="nome" className="sr-only">
            Nome e sobrenome
          </label>

          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Nome e sobrenome"
            className="h-[50px] w-full rounded-[10px] border border-white/10 bg-white/[0.035] px-4 text-[12px] text-white outline-none placeholder:text-white/35 transition focus:border-[#78C7E5]/70"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            E-mail corporativo
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="E-mail corporativo"
            className="h-[50px] w-full rounded-[10px] border border-white/10 bg-white/[0.035] px-4 text-[12px] text-white outline-none placeholder:text-white/35 transition focus:border-[#78C7E5]/70"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="empresa" className="sr-only">
              Empresa
            </label>

            <input
              id="empresa"
              name="empresa"
              type="text"
              required
              autoComplete="organization"
              placeholder="Empresa"
              className="h-[50px] w-full rounded-[10px] border border-white/10 bg-white/[0.035] px-4 text-[12px] text-white outline-none placeholder:text-white/35 transition focus:border-[#78C7E5]/70"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="sr-only">
              Telefone
            </label>

            <input
              id="telefone"
              name="telefone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="Telefone"
              className="h-[50px] w-full rounded-[10px] border border-white/10 bg-white/[0.035] px-4 text-[12px] text-white outline-none placeholder:text-white/35 transition focus:border-[#78C7E5]/70"
            />
          </div>
        </div>

        <div>
          <label htmlFor="segmento" className="sr-only">
            Segmento
          </label>

          <select
            id="segmento"
            name="segmento"
            required
            value={segmento}
            onChange={(event) => setSegmento(event.target.value)}
            className="h-[50px] w-full rounded-[10px] border border-white/10 bg-[#0C171D] px-4 text-[12px] text-white/80 outline-none transition focus:border-[#78C7E5]/70"
          >
            <option value="">Selecione o segmento</option>
            <option value="industria">Indústria</option>
            <option value="construcao-civil">Construção Civil</option>
            <option value="petroleo-gas">Petróleo & Gás</option>
            <option value="prestacao-servicos">
              Prestação de Serviços
            </option>
            <option value="saude">Saúde</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        {segmento === "outros" && (
          <div>
            <label htmlFor="outroSegmento" className="sr-only">
              Informe seu segmento
            </label>

            <input
              id="outroSegmento"
              name="outroSegmento"
              type="text"
              required
              placeholder="Informe seu segmento"
              className="h-[50px] w-full rounded-[10px] border border-white/10 bg-white/[0.035] px-4 text-[12px] text-white outline-none placeholder:text-white/35 transition focus:border-[#78C7E5]/70"
            />
          </div>
        )}

        <label className="flex cursor-pointer items-start gap-3 pt-2">
          <input
            type="checkbox"
            name="consentimento"
            required
            className="mt-[3px] h-4 w-4 shrink-0 accent-[#78C7E5]"
          />

          <span className="text-[10px] leading-[1.55] text-white/45">
            Concordo com o uso dos meus dados para contato comercial, conforme a
            Política de Privacidade.
          </span>
        </label>

        <button
          type="submit"
          disabled={enviando}
          className="mt-3 flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#78C7E5] px-6 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#071116] transition hover:bg-[#96DAF0] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {enviando ? "Enviando..." : "Solicitar proposta"}
        </button>

        {enviado && (
          <p
            role="status"
            className="pt-2 text-center text-[11px] font-medium text-[#83D7C5]"
          >
            Dados enviados com sucesso. Em breve entraremos em contato.
          </p>
        )}

        {erro && (
          <p
            role="alert"
            className="pt-2 text-center text-[11px] font-medium text-red-300"
          >
            {erro}
          </p>
        )}
      </form>
    </div>
  );
}