"use client";

import { useEffect, useState } from "react";

const WEBHOOK_URL =
  "https://n8n.vitora.com.br/webhook/vit/lead-padrao";

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
  "industria",
  "construcao-civil",
  "petroleo-gas",
  "prestacao-servicos",
  "saude",
  "outros",
]);

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
        const valorTratado = valorUrl.slice(0, 250);

        sessionStorage.setItem(`vitora_${key}`, valorTratado);
        dados[key] = valorTratado;
        return;
      }

      const valorSalvo =
        sessionStorage.getItem(`vitora_${key}`) || "";

      dados[key] = valorSalvo.slice(0, 250);
    });

    setTracking(dados);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (enviando) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const website =
      String(formData.get("website") || "").trim();

    if (website) {
      setEnviado(true);
      return;
    }

    if (!SEGMENTOS_VALIDOS.has(segmento)) {
      setErro("Selecione um segmento válido.");
      return;
    }

    const outroSegmento =
      segmento === "outros"
        ? String(formData.get("outroSegmento") || "")
            .trim()
            .slice(0, 120)
        : "";

    if (segmento === "outros" && !outroSegmento) {
      setErro("Informe seu segmento.");
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

      consentimentoLGPD:
        formData.get("consentimento") === "on",

      consentimentoVersao: "lp-padrao-2026-08",

      ...tracking,
    };

    if (!payload.consentimentoLGPD) {
      setErro(
        "É necessário concordar com o uso dos dados para prosseguir.",
      );
      return;
    }

    setEnviando(true);
    setErro("");
    setEnviado(false);

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

      form.reset();
      setSegmento("");
      setEnviado(true);
    } catch (error) {
      console.error(
        "Erro ao enviar formulário Quero Vitora:",
        error,
      );

      setErro(
        "Não foi possível enviar seus dados agora. Tente novamente em alguns instantes.",
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
        max-w-[490px]
        overflow-hidden
        rounded-[26px]
        border
        border-[#92B2C8]/25
        bg-[#0D151A]
        p-6
        shadow-[0_28px_80px_rgba(0,0,0,0.48)]
        ring-1
        ring-white/[0.035]

        sm:p-8
        lg:p-9
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1B456A]/[0.10] via-transparent to-transparent" />

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#92B2C8]/60" />

      <div className="relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#92B2C8]">
          Fale com um especialista
        </p>

        <h2 className="mt-3 text-[27px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-[30px]">
          Descubra como o Vitora pode apoiar a sua gestão.
        </h2>

        <p className="mt-3 text-[12px] leading-[1.65] text-white/55">
          Preencha seus dados e nossa equipe entrará em contato para entender
          sua operação e apresentar a solução mais adequada.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-3"
          aria-busy={enviando}
        >
          <div
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="website">
              Website
            </label>

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
              minLength={2}
              maxLength={120}
              autoComplete="name"
              placeholder="Nome e sobrenome"
              className="
                h-[50px]
                w-full
                rounded-[10px]
                border
                border-white/10
                bg-white/[0.045]
                px-4
                text-[12px]
                text-white
                outline-none
                transition
                placeholder:text-white/35
                focus:border-[#92B2C8]/60
              "
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
              maxLength={180}
              autoComplete="email"
              placeholder="E-mail corporativo"
              className="
                h-[50px]
                w-full
                rounded-[10px]
                border
                border-white/10
                bg-white/[0.045]
                px-4
                text-[12px]
                text-white
                outline-none
                transition
                placeholder:text-white/35
                focus:border-[#92B2C8]/60
              "
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
                minLength={2}
                maxLength={160}
                autoComplete="organization"
                placeholder="Empresa"
                className="
                  h-[50px]
                  w-full
                  rounded-[10px]
                  border
                  border-white/10
                  bg-white/[0.045]
                  px-4
                  text-[12px]
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/35
                  focus:border-[#92B2C8]/60
                "
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
                minLength={8}
                maxLength={40}
                autoComplete="tel"
                placeholder="Telefone"
                className="
                  h-[50px]
                  w-full
                  rounded-[10px]
                  border
                  border-white/10
                  bg-white/[0.045]
                  px-4
                  text-[12px]
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/35
                  focus:border-[#92B2C8]/60
                "
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
              onChange={(event) =>
                setSegmento(event.target.value)
              }
              className="
                h-[50px]
                w-full
                rounded-[10px]
                border
                border-white/10
                bg-[#141D22]
                px-4
                text-[12px]
                text-white/80
                outline-none
                transition
                focus:border-[#92B2C8]/60
              "
            >
              <option value="">
                Selecione o segmento
              </option>

              <option value="industria">
                Indústria
              </option>

              <option value="construcao-civil">
                Construção Civil
              </option>

              <option value="petroleo-gas">
                Petróleo & Gás
              </option>

              <option value="prestacao-servicos">
                Prestação de Serviços
              </option>

              <option value="saude">
                Saúde
              </option>

              <option value="outros">
                Outros
              </option>
            </select>
          </div>

          {segmento === "outros" && (
            <div>
              <label
                htmlFor="outroSegmento"
                className="sr-only"
              >
                Informe seu segmento
              </label>

              <input
                id="outroSegmento"
                name="outroSegmento"
                type="text"
                required
                minLength={2}
                maxLength={120}
                placeholder="Informe seu segmento"
                className="
                  h-[50px]
                  w-full
                  rounded-[10px]
                  border
                  border-white/10
                  bg-white/[0.045]
                  px-4
                  text-[12px]
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/35
                  focus:border-[#92B2C8]/60
                "
              />
            </div>
          )}

          <label className="flex cursor-pointer items-start gap-3 pt-2">
            <input
              type="checkbox"
              name="consentimento"
              required
              className="mt-[3px] h-4 w-4 shrink-0 accent-[#92B2C8]"
            />

            <span className="text-[10px] leading-[1.55] text-white/50">
              Concordo com o uso dos meus dados para contato comercial,
              conforme a Política de Privacidade.
            </span>
          </label>

          <button
            type="submit"
            disabled={enviando}
            className="
              mt-3
              flex
              min-h-[52px]
              w-full
              items-center
              justify-center
              rounded-full
              bg-white
              px-6
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.06em]
              text-[#161614]
              transition
              hover:bg-[#F0F0ED]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {enviando
              ? "Enviando..."
              : "Solicitar proposta"}
          </button>

          <div
            aria-live="polite"
            aria-atomic="true"
          >
            {enviado && (
              <p className="pt-2 text-center text-[11px] font-medium text-[#92B2C8]">
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
          </div>
        </form>
      </div>
    </div>
  );
}