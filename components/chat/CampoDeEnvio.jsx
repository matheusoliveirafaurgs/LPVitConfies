"use client";

import { useRef, useState } from "react";

export default function CampoDeEnvio({ desabilitado, aoEnviarTexto, aoEnviarAudio }) {
  const [texto, setTexto] = useState("");
  const [gravando, setGravando] = useState(false);
  const gravadorRef = useRef(null);
  const pedacosRef = useRef([]);
  const inputArquivoRef = useRef(null);

  function enviarTexto(evento) {
    evento.preventDefault();
    if (!texto.trim() || desabilitado) return;
    aoEnviarTexto(texto.trim());
    setTexto("");
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
    <form onSubmit={enviarTexto} className="flex items-center gap-2 border-t border-branco/10 py-4">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        disabled={desabilitado}
        placeholder="Escreva o que foi discutido na reunião…"
        className="flex-1 rounded-sm border border-branco/20 bg-preto px-4 py-3 text-sm text-branco placeholder:text-branco/35 focus:border-azul-claro focus:outline-none"
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
        className="shrink-0 rounded-sm border border-branco/20 px-3 py-3 text-branco hover:border-azul-claro"
        aria-label="Enviar arquivo de áudio"
      >
        📎
      </button>

      <button
        type="button"
        disabled={desabilitado}
        onClick={alternarGravacao}
        className={[
          "shrink-0 rounded-sm px-3 py-3",
          gravando ? "bg-azul-claro text-preto" : "border border-branco/20 text-branco hover:border-azul-claro",
        ].join(" ")}
        aria-label={gravando ? "Parar gravação" : "Gravar áudio"}
      >
        {gravando ? "■" : "●"}
      </button>

      <button
        type="submit"
        disabled={desabilitado || !texto.trim()}
        className="shrink-0 rounded-sm bg-azul-claro px-5 py-3 text-sm font-semibold text-preto disabled:opacity-40"
      >
        Enviar
      </button>
    </form>
  );
}