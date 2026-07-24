"use client";

import { useSessaoChat } from "../../lib/chat/useSessaoChat";
import Mensagem from "./Mensagem";
import CampoDeEnvio from "./CampoDeEnvio";

export default function Chat({ sessionId }) {
  const { mensagens, enviando, enviarTexto, enviarAudio } =
    useSessaoChat(sessionId);

  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col px-4">
      <header className="border-b border-branco/10 py-5">
        <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-claro">
          Vit
        </p>
        <h1 className="mt-1 text-lg font-extrabold text-branco">
          Envie o áudio ou o resumo da sua reunião
        </h1>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto py-6">
        {mensagens.length === 0 && (
          <p className="text-sm font-light text-branco/50">
            Grave, envie um áudio, ou escreva o que foi discutido — o Vit
            monta a ata.
          </p>
        )}
        {mensagens.map((msg, i) => (
          <Mensagem key={i} mensagem={msg} />
        ))}
        {enviando && (
          <p className="text-sm font-light text-branco/50">
            Vit está processando…
          </p>
        )}
      </div>

      <CampoDeEnvio
        desabilitado={enviando}
        aoEnviarTexto={enviarTexto}
        aoEnviarAudio={enviarAudio}
      />
    </div>
  );
}