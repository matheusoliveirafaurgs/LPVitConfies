"use client";

import { useRef, useState } from "react";

export default function CampoDeEnvio({
  desabilitado,
  aoEnviarTexto,
  aoEnviarAudio,
}) {
  const [texto, setTexto] = useState("");
  const [gravando, setGravando] = useState(false);

  const gravadorRef = useRef(null);
  const pedacosRef = useRef([]);
  const inputArquivoRef = useRef(null);
  const enviandoRef = useRef(false);

  function enviarTexto(evento) {
    evento.preventDefault();

    const valor = texto.trim();

    if (!valor || desabilitado || enviandoRef.current) {
      return;
    }

    enviandoRef.current = true;
    setTexto("");

    aoEnviarTexto(valor);

    setTimeout(() => {
      enviandoRef.current = false;
    }, 400);
  }

  async function alternarGravacao() {
    if (gravando) {
      gravadorRef.current?.stop();
      setGravando(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const gravador = new MediaRecorder(stream);

      pedacosRef.current = [];

      gravador.ondataavailable = (evento) => {
        pedacosRef.current.push(evento.data);
      };

      gravador.onstop = () => {
        const blob = new Blob(pedacosRef.current, {
          type: "audio/webm",
        });

        stream.getTracks().forEach((track) => {
          track.stop();
        });

        aoEnviarAudio(blob);
      };

      gravador.start();

      gravadorRef.current = gravador;
      setGravando(true);
    } catch {
      alert(
        "Não consegui acessar o microfone. Confere a permissão do navegador.",
      );
    }
  }

  function arquivoSelecionado(evento) {
    const arquivo = evento.target.files?.[0];

    if (arquivo) {
      aoEnviarAudio(arquivo);
    }

    evento.target.value = "";
  }

  return (
    <form
      onSubmit={enviarTexto}
      className="flex min-w-0 items-center gap-[8px] sm:gap-[12px]"
    >
      {/* Upload oculto */}
      <input
        ref={inputArquivoRef}
        type="file"
        accept="audio/*"
        onChange={arquivoSelecionado}
        className="hidden"
      />

      {/* Anexar */}
      <button
        type="button"
        disabled={desabilitado}
        onClick={() => inputArquivoRef.current?.click()}
        aria-label="Enviar arquivo de áudio"
        title="Anexar arquivo de áudio"
        className={[
          "flex h-[40px] w-[40px] shrink-0 items-center justify-center",
          "rounded-[6px] bg-[#F3F5F7] text-[#1B456A]",
          "transition-colors duration-150",
          "hover:bg-[#E8EDF2]",
          "disabled:cursor-not-allowed disabled:opacity-40",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M13.234 20.252 21 12.3" />
          <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829L18.828 9" />
          <path d="M18.828 9a4 4 0 0 0-5.657-5.657L4.757 11.757a6 6 0 0 0 8.486 8.486L21.657 11.83" />
        </svg>
      </button>

      {/* Microfone */}
      <button
        type="button"
        disabled={desabilitado}
        onClick={alternarGravacao}
        aria-label={gravando ? "Parar gravação" : "Gravar áudio"}
        title={gravando ? "Parar gravação" : "Gravar áudio"}
        className={[
          "flex h-[40px] w-[40px] shrink-0 items-center justify-center",
          "rounded-[6px] transition-colors duration-150",
          gravando
            ? "bg-[#1B456A] text-white"
            : "bg-[#F3F5F7] text-[#1B456A] hover:bg-[#E8EDF2]",
          "disabled:cursor-not-allowed disabled:opacity-40",
        ].join(" ")}
      >
        {gravando ? (
          <span
            className="h-[14px] w-[14px] rounded-[2px] bg-white"
            aria-hidden="true"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        )}
      </button>

      {/* Campo */}
      <input
        type="text"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        disabled={desabilitado}
        placeholder="Escreva o que foi discutido..."
        className={[
          "h-[40px] min-w-0 flex-1 rounded-[6px]",
          "border border-transparent bg-[#F3F5F7]",
          "px-[12px] sm:px-[16px]",
          "text-[13px] font-normal text-[#161614]",
          "placeholder:text-[#A3A3A1]",
          "focus:border-[#1B456A]/30 focus:bg-white",
          "focus:outline-none focus:ring-1 focus:ring-[#1B456A]/15",
          "disabled:cursor-not-allowed disabled:opacity-60",
        ].join(" ")}
      />

      {/* Enviar — texto no desktop, seta no mobile */}
      <button
        type="submit"
        disabled={desabilitado || !texto.trim()}
        aria-label="Enviar"
        className={[
          "flex h-[40px] shrink-0 items-center justify-center rounded-[6px]",
          "bg-[#161614] font-semibold text-white",
          "transition-colors duration-150",
          "hover:bg-[#1B456A]",
          "disabled:cursor-not-allowed disabled:bg-[#AEB4B8]",
          "w-[40px] px-0 sm:w-auto sm:px-[20px]",
        ].join(" ")}
      >
        <span className="text-[18px] sm:hidden">→</span>
        <span className="hidden text-[13px] sm:inline">
          Enviar
        </span>
      </button>
    </form>
  );
}