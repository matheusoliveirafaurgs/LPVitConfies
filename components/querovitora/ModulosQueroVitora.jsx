"use client";

import { useState } from "react";

const MODULOS = [
  {
    nome: "Documentos",
    titulo: "Gestão de Documentos",
    texto:
      "Estruture revisões, aprovações, vigências e responsabilidades para manter informações atualizadas e rastreáveis.",
    recursos: [
      "Controle de versões",
      "Fluxos de aprovação",
      "Histórico e rastreabilidade",
    ],
  },
  {
    nome: "Auditorias",
    titulo: "Gestão de Auditorias",
    texto:
      "Organize auditorias, evidências, registros e não conformidades com mais clareza ao longo de todo o processo.",
    recursos: [
      "Planejamento de auditorias",
      "Registro de evidências",
      "Acompanhamento de não conformidades",
    ],
  },
  {
    nome: "Indicadores",
    titulo: "Indicadores & Dashboards",
    texto:
      "Acompanhe KPIs, medições e informações relevantes para transformar dados operacionais em visão de gestão.",
    recursos: [
      "Gestão de KPIs",
      "Medições periódicas",
      "Dashboards gerenciais",
    ],
  },
  {
    nome: "Incidentes",
    titulo: "Gestão de Incidentes",
    texto:
      "Registre ocorrências, investigue causas e acompanhe ações para fortalecer prevenção e aprendizado organizacional.",
    recursos: ["Registro de ocorrências", "Análise de causa", "Planos de ação"],
  },
  {
    nome: "Fornecedores",
    titulo: "Gestão de Fornecedores",
    texto:
      "Centralize cadastros, avaliações e informações para fortalecer a gestão da cadeia de fornecimento.",
    recursos: [
      "Cadastro de fornecedores",
      "Avaliação periódica",
      "Histórico de desempenho",
    ],
  },
  {
    nome: "Checklists",
    titulo: "Gestão de Checklists",
    texto:
      "Estruture verificações recorrentes com modelos padronizados e acompanhamento dos registros realizados.",
    recursos: [
      "Modelos personalizados",
      "Registros estruturados",
      "Acompanhamento das verificações",
    ],
  },
  {
    nome: "Planejamento",
    titulo: "Planejamento Estratégico",
    texto:
      "Conecte objetivos, estratégias e indicadores para acompanhar a execução do planejamento organizacional.",
    recursos: [
      "Objetivos estratégicos",
      "Acompanhamento de resultados",
      "Visão integrada da estratégia",
    ],
  },
  {
    nome: "Atas",
    titulo: "Ata de Reunião",
    texto:
      "Organize registros de reuniões, participantes e encaminhamentos para dar continuidade às decisões tomadas.",
    recursos: [
      "Registro de participantes",
      "Encaminhamentos",
      "Histórico das reuniões",
    ],
  },
];

function GrafismoModulos() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* textura bem sutil */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(146,178,200,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(146,178,200,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* profundidade central */}
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1B456A]/[0.045] blur-[130px]" />

      {/* grafismo esquerdo - menor e mais afastado */}
      <div className="absolute bottom-[44px] left-[-82px] hidden h-[250px] w-[190px] lg:block">
        <svg
          viewBox="0 0 190 250"
          fill="none"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 210
              H42
              C74 210 92 192 92 160
              V118
              C92 88 108 72 136 72
              H190
            "
            stroke="#4D82A3"
            strokeWidth="1.6"
            opacity="0.23"
          />

          <path
            d="
              M0 248
              H28
              C58 248 74 232 74 202
              V154
              C74 118 94 98 128 98
              H170
            "
            stroke="#92B2C8"
            strokeWidth="1.4"
            opacity="0.15"
          />

          <circle cx="92" cy="160" r="2.5" fill="#92B2C8" opacity="0.45" />

          <circle cx="74" cy="202" r="2.5" fill="#4D82A3" opacity="0.35" />
        </svg>
      </div>

      {/* grafismo direito - mais alto */}
      <div className="absolute right-[-22px] top-[38px] hidden h-[300px] w-[175px] lg:block">
        <svg
          viewBox="0 0 175 300"
          fill="none"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M175 0
              H132
              C98 0 80 18 80 52
              V96
              C80 126 64 144 36 144
              H0
            "
            stroke="#92B2C8"
            strokeWidth="1.6"
            opacity="0.24"
          />

          <path
            d="
              M175 28
              H146
              C114 28 98 44 98 76
              V125
              C98 159 80 177 48 177
              H0
            "
            stroke="#4D82A3"
            strokeWidth="1.4"
            opacity="0.17"
          />

          <path
            d="
              M175 152
              H130
              C98 152 82 168 82 200
              V244
              C82 274 64 292 32 292
              H0
            "
            stroke="#1B456A"
            strokeWidth="1.4"
            opacity="0.22"
          />

          <circle cx="80" cy="52" r="2.5" fill="#92B2C8" opacity="0.48" />

          <circle cx="98" cy="125" r="2.5" fill="#4D82A3" opacity="0.38" />
        </svg>
      </div>
    </div>
  );
}

export default function ModulosQueroVitora() {
  const [ativo, setAtivo] = useState(0);

  const modulo = MODULOS[ativo];

  return (
    <section
      id="modulos"
      className="relative overflow-hidden bg-[#161614] px-6 py-20 text-white sm:px-8 lg:py-24"
    >
      <GrafismoModulos />

      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        {/* CABEÇALHO */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#92B2C8]">
              Tudo que sua gestão precisa
            </p>

            <h2 className="mt-4 max-w-[620px] text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[42px] lg:text-[48px]">
              Uma plataforma.
              <br />
              Múltiplas possibilidades.
            </h2>
          </div>

          <p className="max-w-[590px] text-[14px] leading-[1.75] text-white/52 lg:justify-self-end">
            Diferentes processos da gestão conectados em um mesmo ambiente para
            reduzir controles dispersos e ampliar a rastreabilidade da operação.
          </p>
        </div>

        {/* ABAS */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-3">
          {MODULOS.map((item, index) => (
            <button
              key={item.nome}
              type="button"
              onClick={() => setAtivo(index)}
              className={`
                shrink-0
                rounded-full
                border
                px-4
                py-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.06em]
                transition

                ${
                  ativo === index
                    ? "border-white bg-white text-[#161614]"
                    : "border-white/15 bg-transparent text-white/48 hover:border-[#92B2C8]/50 hover:text-white"
                }
              `}
            >
              {item.nome}
            </button>
          ))}
        </div>

        {/* MÓDULO ATIVO */}
        <div className="relative mt-8 border-y border-white/10">
          <div className="pointer-events-none absolute left-[48%] top-1/2 hidden h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-[#1B456A]/[0.06] blur-[100px] lg:block" />

          <div className="relative z-10 grid gap-10 py-11 lg:grid-cols-[0.68fr_1.32fr] lg:items-center lg:py-12">
            <div>
              <span className="text-[16px] font-extrabold leading-none text-[#92B2C8]">
                {String(ativo + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-3 max-w-[380px] text-[30px] font-extrabold leading-[1.05] sm:text-[34px]">
                {modulo.titulo}
              </h3>
            </div>

            <div>
              <p className="max-w-[760px] text-[14px] leading-[1.8] text-white/60">
                {modulo.texto}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {modulo.recursos.map((recurso) => (
                  <div key={recurso} className="border-t border-white/12 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#92B2C8]" />

                      <span className="text-[12px] font-medium leading-[1.55] text-white/70">
                        {recurso}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
