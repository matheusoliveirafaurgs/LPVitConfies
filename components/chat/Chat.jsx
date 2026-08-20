"use client";

import Image from "next/image";
import { useState } from "react";

import { useSessaoChat } from "../../lib/chat/useSessaoChat";
import Mensagem from "./Mensagem";
import CampoDeEnvio from "./CampoDeEnvio";

const perguntasExemplo = [
  "Quais são as principais funcionalidades do Vitora?",
  'Crie uma ata a partir do seguinte conteúdo: "Texto da reunião"',
  "Como o Vitora pode ajudar na gestão da qualidade?",
];

export default function Chat({ sessionId }) {
  const { mensagens, enviando, enviarTexto, enviarAudio } =
    useSessaoChat(sessionId);

  const [painelAberto, setPainelAberto] = useState(false);

  function enviarPerguntaExemplo(pergunta) {
    if (enviando) return;

    setPainelAberto(false);
    enviarTexto(pergunta);
  }

  return (
    <div className="flex h-[100dvh] min-h-[620px] flex-col overflow-hidden bg-white text-[#161614]">
      {/* HEADER */}
      <header className="relative h-[108px] shrink-0 overflow-hidden bg-[#161614] text-white md:h-[152px]">
        <div className="relative z-20 flex h-full items-center px-[22px] sm:px-[40px] md:px-[64px]">
          <div className="flex items-center gap-[14px] sm:gap-[18px]">
            {/* Logo */}
            <div className="flex h-[42px] w-[124px] shrink-0 items-center sm:h-[48px] sm:w-[152px] md:h-[52px] md:w-[180px]">
              <img
                src="/vitora-logo-branco.png"
                alt="Vitora"
                className="h-auto w-[115px] object-contain sm:w-[142px] md:w-[165px]"
              />
            </div>

            {/* Separador */}
            <div className="h-[34px] w-px shrink-0 bg-white/25" />

            {/* Título */}
            <div className="min-w-0">
              <p className="text-[16px] font-semibold leading-[19px] md:text-[18px] md:leading-[21px]">
                Vit
              </p>

              <p className="mt-[2px] max-w-[140px] text-[11px] font-normal leading-[14px] text-white/65 sm:max-w-none md:text-[12px] md:leading-[16px]">
                Assistente Virtual · Vitora
              </p>
            </div>
          </div>
        </div>

        {/* Grafismo */}
        {/* Grafismo */}
        <div className="pointer-events-none absolute inset-y-0 left-[430px] right-0 z-10 hidden overflow-hidden md:block">
          <div
            className="absolute left-0 top-[-8px] h-[92px] w-full opacity-[0.40]"
            style={{
              backgroundImage: 'url("/vitora-grafismo-header.png")',
              backgroundRepeat: "repeat-x",
              backgroundSize: "491px 92px",
              backgroundPosition: "0 0",
            }}
          />

          <div
            className="absolute left-0 top-[70px] h-[92px] w-full opacity-[0.40]"
            style={{
              backgroundImage: 'url("/vitora-grafismo-header.png")',
              backgroundRepeat: "repeat-x",
              backgroundSize: "491px 92px",
              backgroundPosition: "90px 0",
            }}
          />
        </div>
      </header>

      {/* MOBILE — botão/painel informativo */}
      <div className="shrink-0 border-b border-[#E2E4E7] bg-[#F3F5F7] md:hidden">
        <button
          type="button"
          onClick={() => setPainelAberto((aberto) => !aberto)}
          className="flex h-[48px] w-full items-center justify-between px-[20px] text-left"
          aria-expanded={painelAberto}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1B456A]">
            Sobre a Vit
          </span>

          <span
            className={[
              "text-[20px] leading-none text-[#1B456A]",
              "transition-transform duration-200",
              painelAberto ? "rotate-180" : "",
            ].join(" ")}
          >
            ⌄
          </span>
        </button>

        {painelAberto && (
          <div className="max-h-[52dvh] overflow-y-auto border-t border-[#E2E4E7] px-[20px] pb-[22px] pt-[18px]">
            <div className="rounded-[6px] border border-[#DEE1E4] bg-white px-[16px] py-[16px]">
              <h2 className="text-[13px] font-semibold text-[#161614]">
                O que posso fazer?
              </h2>

              <ul className="mt-[14px] space-y-[12px] text-[13px] font-normal leading-[18px] text-[#5D5D5B]">
                <li className="flex gap-[8px]">
                  <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#1B456A]" />

                  <span>
                    Transformar áudios ou textos de reuniões em atas
                    organizadas.
                  </span>
                </li>

                <li className="flex gap-[8px]">
                  <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#1B456A]" />

                  <span>
                    Responder dúvidas sobre as funcionalidades do Vitora.
                  </span>
                </li>

                <li className="flex gap-[8px]">
                  <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#1B456A]" />

                  <span>
                    Apresentar informações sobre soluções e planos do Vitora.
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-[22px] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1B456A]">
              Perguntas de exemplo
            </p>

            <div className="mt-[14px] space-y-[8px]">
              {perguntasExemplo.map((pergunta) => (
                <button
                  key={pergunta}
                  type="button"
                  disabled={enviando}
                  onClick={() => enviarPerguntaExemplo(pergunta)}
                  className={[
                    "flex min-h-[48px] w-full items-center gap-[10px]",
                    "rounded-[6px] border border-[#DEE1E4] bg-white",
                    "px-[12px] py-[10px] text-left",
                    "text-[12px] font-normal leading-[15px] text-[#4D4D4B]",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                  ].join(" ")}
                >
                  <span className="shrink-0 text-[18px] leading-none text-[#1B456A]">
                    ›
                  </span>

                  <span>{pergunta}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="flex min-h-0 flex-1">
        {/* DESKTOP — SIDEBAR */}
        <aside className="hidden w-[300px] shrink-0 border-r border-[#E2E4E7] bg-[#F3F5F7] px-[24px] py-[28px] md:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1B456A]">
            Sobre o assistente
          </p>

          <div className="mt-[22px] rounded-[6px] border border-[#DEE1E4] bg-white px-[16px] py-[16px]">
            <h2 className="text-[13px] font-semibold text-[#161614]">
              O que posso fazer?
            </h2>

            <ul className="mt-[14px] space-y-[12px] text-[13px] font-normal leading-[18px] text-[#5D5D5B]">
              <li className="flex gap-[8px]">
                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#1B456A]" />

                <span>
                  Transformar áudios ou textos de reuniões em atas organizadas.
                </span>
              </li>

              <li className="flex gap-[8px]">
                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#1B456A]" />

                <span>
                  Responder dúvidas sobre as funcionalidades do Vitora.
                </span>
              </li>

              <li className="flex gap-[8px]">
                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#1B456A]" />

                <span>
                  Apresentar informações sobre soluções e planos do Vitora.
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-[26px] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1B456A]">
            Perguntas de exemplo
          </p>

          <div className="mt-[18px] space-y-[8px]">
            {perguntasExemplo.map((pergunta) => (
              <button
                key={pergunta}
                type="button"
                disabled={enviando}
                onClick={() => enviarPerguntaExemplo(pergunta)}
                className={[
                  "flex min-h-[48px] w-full items-center gap-[10px]",
                  "rounded-[6px] border border-[#DEE1E4] bg-white",
                  "px-[12px] py-[10px] text-left",
                  "text-[12px] font-normal leading-[15px] text-[#4D4D4B]",
                  "transition-colors duration-150",
                  "hover:border-[#B9C5CF] hover:bg-[#FAFBFC]",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                ].join(" ")}
              >
                <span className="shrink-0 text-[18px] leading-none text-[#1B456A]">
                  ›
                </span>

                <span>{pergunta}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* CHAT */}
        <main className="flex min-h-0 min-w-0 flex-1 flex-col bg-white">
          {/* Mensagens */}
          <div className="min-h-0 flex-1 overflow-y-auto px-[20px] py-[24px] sm:px-[32px] sm:py-[30px] md:px-[52px] md:py-[36px]">
            {mensagens.length === 0 && (
              <div>
                {/* Perfil Vit */}
                <div className="flex items-center gap-[14px]">
                  <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full bg-[#161614]">
                    <Image
                      src="/vit-chat-avatar.png"
                      alt="Vit"
                      width={180}
                      height={360}
                      priority
                      className="absolute left-1/2 top-[-10px] h-auto w-[94px] max-w-none -translate-x-1/2"
                    />
                  </div>

                  <div>
                    <p className="text-[16px] font-semibold leading-[19px] text-[#161614]">
                      Vit
                    </p>

                    <p className="mt-[2px] flex items-center gap-[6px] text-[12px] leading-[15px] text-[#777775]">
                      <span className="h-[6px] w-[6px] rounded-full bg-[#22C55E]" />
                      Online
                    </p>
                  </div>
                </div>

                {/* Mensagem inicial */}
                <div
                  className={[
                    "mt-[18px] w-full max-w-[420px]",
                    "rounded-[6px] bg-[#161614]",
                    "px-[16px] py-[12px]",
                    "text-[13px] font-normal leading-[17px] text-white",
                    "sm:ml-[66px]",
                  ].join(" ")}
                >
                  Olá! Eu sou a Vit. Posso te ajudar com reuniões ou tirar
                  dúvidas sobre o Vitora. Se quiser criar uma ata, é só me
                  enviar o conteúdo da reunião e me dizer o que você precisa.
                </div>
              </div>
            )}

            {mensagens.length > 0 && (
              <div className="space-y-[16px]">
                {mensagens.map((mensagem, index) => (
                  <Mensagem key={index} mensagem={mensagem} />
                ))}
              </div>
            )}

            {enviando && (
              <div className="mt-[16px] flex items-center gap-[10px]">
                <div className="relative h-[32px] w-[32px] shrink-0 overflow-hidden rounded-full bg-[#161614]">
                  <Image
                    src="/vit-chat-avatar.png"
                    alt=""
                    width={180}
                    height={360}
                    className="absolute left-1/2 top-[-6px] h-auto w-[54px] max-w-none -translate-x-1/2"
                  />
                </div>

                <p className="text-[12px] text-[#777775]">
                  A Vit está processando…
                </p>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="shrink-0 border-t border-[#E2E4E7] bg-white px-[10px] py-[12px] sm:px-[20px] md:px-[32px] md:py-[18px]">
            <CampoDeEnvio
              desabilitado={enviando}
              aoEnviarTexto={enviarTexto}
              aoEnviarAudio={enviarAudio}
            />
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="hidden h-[42px] shrink-0 items-center justify-center bg-[#161614] text-[10px] font-normal tracking-[0.12em] text-white/45 sm:flex">
        VITORA · O futuro da qualidade
      </footer>
    </div>
  );
}
