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
    recursos: [
      "Registro de ocorrências",
      "Análise de causa",
      "Planos de ação",
    ],
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

export default function ModulosQueroVitora() {
  const [ativo, setAtivo] = useState(0);

  const modulo = MODULOS[ativo];

  return (
    <section
      id="modulos"
      className="relative overflow-hidden bg-[#071116] px-6 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="absolute left-[-160px] top-[180px] h-[420px] w-[420px] rounded-full bg-[#1F7196]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#79C5E4]">
            Tudo que sua gestão precisa
          </p>

          <h2 className="mt-4 text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[42px] lg:text-[50px]">
            Uma plataforma.
            <br />
            Múltiplas possibilidades.
          </h2>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-4">
          {MODULOS.map((item, index) => (
            <button
              key={item.nome}
              type="button"
              onClick={() => setAtivo(index)}
              className={`
                shrink-0
                rounded-full
                border
                px-5
                py-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.06em]
                transition

                ${
                  ativo === index
                    ? "border-[#79C5E4] bg-[#79C5E4] text-[#071116]"
                    : "border-white/10 bg-white/[0.025] text-white/45 hover:border-white/25 hover:text-white"
                }
              `}
            >
              {item.nome}
            </button>
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0A1820] lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#79C5E4]">
              {String(ativo + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-4 text-[28px] font-extrabold leading-[1.08] sm:text-[32px]">
              {modulo.titulo}
            </h3>

            <p className="mt-5 max-w-[520px] text-[13px] leading-[1.75] text-white/50 sm:text-[14px]">
              {modulo.texto}
            </p>

            <div className="mt-8 space-y-3">
              {modulo.recursos.map((recurso) => (
                <div key={recurso} className="flex items-center gap-3">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#79C5E4]" />

                  <span className="text-[12px] font-medium text-white/70">
                    {recurso}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Estrutura pronta para receber screenshot */}
          <div className="relative min-h-[380px] overflow-hidden border-t border-white/10 bg-[#08151C] lg:min-h-[520px] lg:border-l lg:border-t-0">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(95, 190, 226, 0.045) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(95, 190, 226, 0.045) 1px, transparent 1px)
                `,
                backgroundSize: "38px 38px",
              }}
            />

            <div className="absolute left-[12%] top-[13%] h-[74%] w-[76%] rotate-[2deg] rounded-[20px] border border-[#6DC4E5]/15 bg-[#0D2632]/60 shadow-[0_30px_80px_rgba(0,0,0,0.3)]" />

            <div className="absolute left-[18%] top-[20%] h-[62%] w-[67%] -rotate-[1deg] rounded-[18px] border border-[#6DC4E5]/20 bg-gradient-to-br from-[#153B4D]/65 to-[#08141B]/85" />

            <div className="absolute bottom-[13%] left-[10%] h-px w-[70%] rotate-[-10deg] bg-gradient-to-r from-transparent via-[#6DC4E5]/45 to-transparent" />

            <div className="absolute right-[16%] top-[24%] h-2 w-2 rounded-full bg-[#75DCEB] shadow-[0_0_20px_rgba(117,220,235,0.8)]" />

            <div className="absolute bottom-[20%] left-[22%] h-2 w-2 rounded-full bg-[#5DAFDB] shadow-[0_0_18px_rgba(93,175,219,0.7)]" />
          </div>
        </div>
      </div>
    </section>
  );
}