"use client";

import Image from "next/image";
import Grafismo from "../Grafismo";
import { useSessaoChat } from "../../lib/chat/useSessaoChat";
import Mensagem from "./Mensagem";
import CampoDeEnvio from "./CampoDeEnvio";

export default function Chat({ sessionId }) {
  const { mensagens, enviando, enviarTexto, enviarAudio } =
    useSessaoChat(sessionId);

  return (
    <div className="relative min-h-screen overflow-hidden bg-fundo-chat text-preto">
      {/* Grafismo institucional como fundo, em baixa opacidade */}
      <Grafismo
        className="pointer-events-none absolute -right-32 -top-24 w-[42rem] text-preto opacity-[0.04] sm:-right-40 sm:w-[56rem] lg:-right-56 lg:w-[72rem]"
      />

      <div className="relative mx-auto flex h-screen max-w-2xl flex-col px-4 sm:px-6 lg:px-8">
        <header className="flex items-center gap-3 border-b border-preto/12 bg-branco py-6 sm:py-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="h-12 w-12 shrink-0 rounded-full bg-branco p-0.5 ring-2 ring-azul-escuro/30">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/vit-avatar.png"
                alt="Vit"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
          <div>
            <p className="text-base font-extrabold leading-tight text-preto">
              Vit
            </p>
            <p className="flex items-center gap-1.5 text-xs font-light text-preto/60">
              <span className="h-1.5 w-1.5 rounded-full bg-azul-escuro" />
              Online
            </p>
          </div>
        </header>

        <div className="pt-6 sm:pt-8">
          <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-escuro">
            Vit
          </p>
          <h1 className="mt-2 text-xl font-extrabold leading-tight tracking-tight text-preto sm:text-2xl">
            Envie o áudio ou o resumo da sua reunião
          </h1>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto py-6">
          {mensagens.length === 0 && (
            <div className="rounded-sm border border-preto/10 bg-azul-claro/10 p-5 sm:p-6">
              <p className="text-sm font-light leading-relaxed text-preto/80">
                Grave, envie um áudio, ou escreva o que foi discutido — a Vit
                monta a ata com participantes, assuntos e encaminhamentos.
              </p>
            </div>
          )}
          {mensagens.map((msg, i) => (
            <Mensagem key={i} mensagem={msg} />
          ))}
          {enviando && (
            <p className="text-sm font-light text-preto/50">
              Vit está processando…
            </p>
          )}
        </div>

        <div className="border-t border-preto/12 bg-fundo-rodape py-6 sm:py-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <CampoDeEnvio
            desabilitado={enviando}
            aoEnviarTexto={enviarTexto}
            aoEnviarAudio={enviarAudio}
          />
        </div>
      </div>
    </div>
  );
}