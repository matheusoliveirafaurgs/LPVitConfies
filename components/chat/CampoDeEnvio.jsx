"use client";

import { useRef, useState } from "react";

export default function CampoDeEnvio({ desabilitado, aoEnviarTexto, aoEnviarAudio }) {
  const [texto, setTexto] = useState("");
  const [gravando, setGravando] = useState(false);
  const gravadorRef = useRef(null);
  const pedacosRef = useRef([]);
  const inputArquivoRef = useRef(null);
  const enviandoRef = useRef(false);

  function enviarTexto(evento) {
    evento.preventDefault();
    const valor = texto.trim();
    if (!valor || desabilitado || enviandoRef.current) return;

    enviandoRef.current = true;
    setTexto("");
    aoEnviarTexto(valor);

    // libera a trava local logo em seguida — quem controla o estado
    // "aguardando resposta do servidor" de verdade é o `desabilitado` do pai
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
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const gravador = new MediaRecorder(stream);
      pedacosRef.current = [];

      gravador.ondataavailable = (e) => pedacosRef.current.push(e.data);
      gravador.onstop = () => {
        const blob = new Blob(pedacosRef.current, { type: "audio/webm" });
        stream.getTracks().forEach((t) => t.stop());
        aoEnviarAudio(blob);
      };

      gravador.start();
      gravadorRef.current = gravador;
      setGravando(true);
    } catch {
      alert("Não consegui acessar o microfone. Confere a permissão do navegador.");
    }
  }

  function arquivoSelecionado(evento) {
    const arquivo = evento.target.files?.[0];
    if (arquivo) aoEnviarAudio(arquivo);
    evento.target.value = "";
  }

  return (
    <form onSubmit={enviarTexto} className="flex items-center gap-1.5 border-t border-preto/12 pt-4 sm:gap-2">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        disabled={desabilitado}
        placeholder="Escreva o que foi discutido…"
        className={[
          "min-w-0 flex-1 rounded-sm bg-branco px-3 py-3 text-sm sm:px-4 sm:py-3.5 sm:text-base",
          "text-preto placeholder:text-preto/35",
          "border border-preto/20 transition-colors duration-150",
          "hover:border-preto/35 focus:border-azul-escuro",
          "focus:outline-none focus:ring-2 focus:ring-azul-escuro/40 focus:ring-offset-0",
        ].join(" ")}
      />

      <input
        ref={inputArquivoRef}
        type="file"
        accept="audio/*"
        onChange={arquivoSelecionado}
        className="hidden"
      />
      <button
        type="button"
        disabled={desabilitado}
        onClick={() => inputArquivoRef.current?.click()}
        className={[
          "shrink-0 rounded-sm border border-preto/20 px-2.5 py-3 text-preto sm:px-3 sm:py-3.5",
          "transition-colors duration-150 hover:border-azul-escuro hover:text-azul-escuro",
          "disabled:cursor-not-allowed disabled:opacity-40",
        ].join(" ")}
        aria-label="Enviar arquivo de áudio"
      >
        📎
      </button>

      <button
        type="button"
        disabled={desabilitado}
        onClick={alternarGravacao}
        className={[
          "shrink-0 rounded-sm px-2.5 py-3 transition-colors duration-150 sm:px-3 sm:py-3.5",
          gravando
            ? "bg-azul-escuro text-branco"
            : "border border-preto/20 text-preto hover:border-azul-escuro hover:text-azul-escuro",
          "disabled:cursor-not-allowed disabled:opacity-40",
        ].join(" ")}
        aria-label={gravando ? "Parar gravação" : "Gravar áudio"}
      >
        {gravando ? "■" : "●"}
      </button>

      <button
        type="submit"
        disabled={desabilitado || !texto.trim()}
        aria-label="Enviar"
        className={[
          "shrink-0 rounded-sm px-3 py-3 text-sm font-semibold sm:px-5 sm:py-3.5",
          "bg-azul-escuro text-branco transition-colors duration-150",
          "hover:bg-preto focus:outline-none focus-visible:ring-2",
          "focus-visible:ring-azul-escuro focus-visible:ring-offset-2",
          "focus-visible:ring-offset-branco",
          "disabled:cursor-not-allowed disabled:bg-azul-medio disabled:text-branco/70",
        ].join(" ")}
      >
        <span className="hidden sm:inline">Enviar</span>
        <span className="sm:hidden" aria-hidden="true">→</span>
      </button>
    </form>
  );
}