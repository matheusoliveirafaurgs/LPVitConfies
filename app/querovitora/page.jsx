import Image from "next/image";
import { Montserrat } from "next/font/google";

import FormularioQueroVitora from "@/components/querovitora/FormularioQueroVitora";
import ModulosQueroVitora from "@/components/querovitora/ModulosQueroVitora";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title:
    "Software de Gestão QSMS | Qualidade, Segurança, Saúde e Meio Ambiente | Vitora",

  description:
    "Centralize qualidade, segurança, saúde e meio ambiente em uma plataforma completa para documentos, auditorias, indicadores, fornecedores e planos de ação.",

  alternates: {
    canonical: "https://lp.vitora.com.br/querovitora",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lp.vitora.com.br/querovitora",
    siteName: "Vitora",
    title:
      "Software de Gestão QSMS | Qualidade, Segurança, Saúde e Meio Ambiente | Vitora",
    description:
      "Uma plataforma completa para integrar qualidade, segurança, saúde e meio ambiente e tornar sua gestão mais rastreável e eficiente.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Software de Gestão QSMS | Vitora",
    description:
      "Centralize os principais processos de QSMS em uma única plataforma.",
  },

  icons: [
    {
      url: "/favicon-preto.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/favicon-branco.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.vitora.com.br/#organization",
      name: "Vitora",
      url: "https://www.vitora.com.br",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://lp.vitora.com.br/querovitora/#software",
      name: "Vitora",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://lp.vitora.com.br/querovitora",
      description:
        "Software de gestão QSMS para gestão da qualidade, segurança, saúde e meio ambiente.",
      provider: {
        "@id": "https://www.vitora.com.br/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://lp.vitora.com.br/querovitora/#webpage",
      url: "https://lp.vitora.com.br/querovitora",
      name: "Software de Gestão QSMS | Vitora",
      about: {
        "@id": "https://lp.vitora.com.br/querovitora/#software",
      },
    },
  ],
};

const BENEFICIOS = [
  {
    numero: "01",
    titulo: "Rastreabilidade",
    texto:
      "Acompanhe históricos, responsáveis, alterações e evidências ao longo dos processos.",
  },
  {
    numero: "02",
    titulo: "Padronização",
    texto:
      "Estruture fluxos e rotinas para reduzir variações e fortalecer a conformidade.",
  },
  {
    numero: "03",
    titulo: "Integração",
    texto:
      "Conecte diferentes áreas e informações em um ambiente centralizado de gestão.",
  },
  {
    numero: "04",
    titulo: "Visibilidade",
    texto:
      "Transforme registros operacionais em informações mais claras para acompanhamento e decisão.",
  },
];

const SEGMENTOS = [
  {
    numero: "01",
    titulo: "Indústria",
    texto:
      "Gestão da qualidade, processos, fornecedores e indicadores para operações que buscam excelência e controle.",
  },
  {
    numero: "02",
    titulo: "Construção Civil",
    texto:
      "Mais organização para documentos, auditorias, checklists, equipes e processos de campo.",
  },
  {
    numero: "03",
    titulo: "Petróleo & Gás",
    texto:
      "Rastreabilidade e controle para operações que convivem com altos requisitos de segurança e conformidade.",
  },
  {
    numero: "04",
    titulo: "Prestação de Serviços",
    texto:
      "Padronize processos, acompanhe resultados e fortaleça a qualidade das entregas.",
  },
  {
    numero: "05",
    titulo: "Saúde",
    texto:
      "Controle documentos, auditorias, indicadores, fornecedores e ocorrências em ambientes altamente regulados.",
    href: "/saude",
  },
];

const DIFERENCIAIS = [
  {
    titulo: "Mais de 20 anos de mercado",
    texto:
      "Experiência aplicada à transformação e evolução dos processos de gestão.",
  },
  {
    titulo: "Plataforma integrada",
    texto:
      "Diferentes processos e informações conectados em um mesmo ambiente.",
  },
  {
    titulo: "Especialização em QSMS",
    texto:
      "Tecnologia desenvolvida para qualidade, segurança, saúde e meio ambiente.",
  },
  {
    titulo: "Evolução contínua",
    texto:
      "Uma plataforma preparada para acompanhar novos desafios e necessidades da gestão.",
  },
];

// Quando tivermos os logos reais, basta preencher.
// Exemplo:
// { nome: "Cliente", src: "/querovitora/clientes/cliente.svg" }
const CLIENTES = [];

function HeroTechVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(94, 188, 229, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94, 188, 229, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: "54px 54px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      <div className="absolute right-[-140px] top-[80px] h-[560px] w-[560px] rounded-full bg-[#168CC1]/10 blur-[100px]" />

      <div className="absolute right-[4%] top-[120px] hidden h-[460px] w-[520px] lg:block">
        <div className="absolute right-[20px] top-[30px] h-[330px] w-[330px] rotate-[12deg] border border-[#57BCE7]/20 bg-[#0B2431]/20" />

        <div className="absolute right-[80px] top-[90px] h-[300px] w-[300px] -rotate-[8deg] border border-[#57BCE7]/20 bg-[#071A24]/40 backdrop-blur-[2px]" />

        <div className="absolute right-[145px] top-[145px] h-[215px] w-[215px] rotate-[4deg] border border-[#70D8EB]/35 bg-[#0D2E3B]/35 shadow-[0_0_60px_rgba(70,190,225,0.12)]" />

        <div className="absolute right-[190px] top-[190px] h-[125px] w-[125px] border border-[#7BE6EC]/60 bg-[#103B49]/30 shadow-[0_0_50px_rgba(92,220,229,0.15)]" />

        <div className="absolute left-[30px] top-[260px] h-px w-[380px] rotate-[-18deg] bg-gradient-to-r from-transparent via-[#60C9E7]/70 to-transparent" />

        <div className="absolute left-[100px] top-[320px] h-px w-[330px] rotate-[-18deg] bg-gradient-to-r from-transparent via-[#5AB7DD]/40 to-transparent" />

        <div className="absolute right-[88px] top-[90px] h-2 w-2 rounded-full bg-[#75DDEB] shadow-[0_0_18px_rgba(117,221,235,0.8)]" />

        <div className="absolute bottom-[70px] left-[82px] h-2 w-2 rounded-full bg-[#5DAFDB] shadow-[0_0_18px_rgba(93,175,219,0.7)]" />
      </div>
    </div>
  );
}

export default function QueroVitoraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className={`${montserrat.className} overflow-hidden bg-white`}>
        {/* HERO */}
        <section className="relative bg-[#071116] text-white">
          <HeroTechVisual />

          <header className="relative z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 sm:px-8 lg:px-10 xl:px-12">
            <a href="#inicio" aria-label="Vitora - início">
              <Image
                src="/consultoria20/logo-vitora.png"
                alt="Vitora"
                width={160}
                height={46}
                priority
                className="h-auto w-[128px] sm:w-[145px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-8 text-[12px] font-medium text-white/70 lg:flex"
            >
              <a
                href="#plataforma"
                className="transition-colors hover:text-white"
              >
                Plataforma
              </a>

              <a href="#modulos" className="transition-colors hover:text-white">
                Módulos
              </a>

              <a
                href="#segmentos"
                className="transition-colors hover:text-white"
              >
                Segmentos
              </a>
            </nav>

            <a
              href="#contato"
              className="rounded-full border border-white/25 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] transition hover:border-[#63C5E8] hover:bg-white/5"
            >
              Solicitar proposta
            </a>
          </header>

          <div
            id="inicio"
            className="relative z-20 mx-auto grid min-h-[720px] w-full max-w-[1440px] items-center gap-14 px-6 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-14 xl:px-12"
          >
            <div className="max-w-[760px]">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#74C7E7] sm:text-[12px]">
                Software de Gestão QSMS
              </p>

              <h1 className="max-w-[780px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[48px] lg:text-[58px] xl:text-[64px]">
                Gestão da qualidade, segurança, saúde e meio ambiente em{" "}
                <span className="text-[#79C5E4]">
                  uma única plataforma.
                </span>
              </h1>

              <p className="mt-7 max-w-[680px] text-[15px] font-normal leading-[1.75] text-white/68 sm:text-[16px]">
                Centralize processos, documentos, auditorias, indicadores,
                fornecedores e planos de ação em um sistema completo para
                tornar sua gestão mais integrada, rastreável e eficiente.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contato"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#78C7E5] px-7 text-[12px] font-extrabold uppercase tracking-[0.05em] text-[#071116] transition hover:-translate-y-0.5 hover:bg-[#95D7EF]"
                >
                  Solicitar proposta
                </a>

                <a
                  href="#plataforma"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 px-7 text-[12px] font-bold uppercase tracking-[0.05em] text-white transition hover:border-white/45 hover:bg-white/[0.04]"
                >
                  Conhecer a plataforma
                </a>
              </div>

              <p className="mt-7 max-w-[620px] text-[12px] leading-[1.6] text-white/40">
                Tecnologia para organizações que precisam de mais controle,
                conformidade e visibilidade sobre seus processos.
              </p>
            </div>

            <div id="contato" className="relative flex justify-end">
              <FormularioQueroVitora />
            </div>
          </div>
        </section>

        {/* VISÃO GERAL */}
        <section
          id="plataforma"
          className="relative bg-[#F5F7F8] px-6 py-20 sm:px-8 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#327EA4]">
                  Plataforma integrada
                </p>

                <h2 className="mt-4 max-w-[540px] text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-[#161614] sm:text-[42px] lg:text-[50px]">
                  Uma gestão conectada do início ao fim.
                </h2>
              </div>

              <p className="max-w-[650px] text-[15px] leading-[1.75] text-black/60 lg:justify-self-end lg:text-[16px]">
                O Vitora reúne processos de qualidade, segurança, saúde e meio
                ambiente em um ambiente integrado, ajudando equipes a reduzir
                controles dispersos e acompanhar informações relevantes para a
                gestão.
              </p>
            </div>

            {/* Espaço preparado para screenshot real */}
            <div className="relative mt-14 overflow-hidden rounded-[28px] border border-black/[0.07] bg-[#09171E] p-6 sm:p-10 lg:min-h-[460px]">
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(92, 186, 226, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(92, 186, 226, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "44px 44px",
                }}
              />

              <div className="absolute left-[10%] top-[15%] h-[70%] w-[80%] rounded-[26px] border border-[#65BFE4]/15 bg-gradient-to-br from-[#173546]/65 via-[#0C202A]/70 to-[#081218]/80 shadow-2xl" />

              <div className="relative z-10 flex min-h-[350px] items-end">
                <div className="max-w-[500px]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#79C5E4]">
                    Estrutura preparada para o produto
                  </p>

                  <p className="mt-3 text-[21px] font-semibold leading-[1.35] text-white sm:text-[24px]">
                    Os screenshots reais do Vitora entrarão aqui sem exigir uma
                    reconstrução da seção.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                [
                  "Centralize informações",
                  "Concentre documentos, indicadores, ocorrências e responsabilidades em um ambiente organizado.",
                ],
                [
                  "Automatize processos",
                  "Estruture fluxos para reduzir tarefas manuais e tornar a operação mais previsível.",
                ],
                [
                  "Tome decisões com dados",
                  "Acompanhe informações importantes da operação e transforme registros em gestão.",
                ],
              ].map(([titulo, texto]) => (
                <div
                  key={titulo}
                  className="border-t border-black/15 pt-6 text-[#161614]"
                >
                  <h3 className="text-[17px] font-bold">{titulo}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-black/55">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÓDULOS */}
        <ModulosQueroVitora />

        {/* BENEFÍCIOS */}
        <section className="bg-white px-6 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-[760px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#327EA4]">
                Gestão com mais clareza
              </p>

              <h2 className="mt-4 text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-[#161614] sm:text-[42px] lg:text-[50px]">
                Mais controle para sua operação.
                <br />
                Mais clareza para sua gestão.
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">
              {BENEFICIOS.map((item) => (
                <article
                  key={item.titulo}
                  className="min-h-[260px] bg-[#F8F9FA] p-7 sm:p-8"
                >
                  <span className="text-[11px] font-bold text-[#327EA4]">
                    {item.numero}
                  </span>

                  <h3 className="mt-16 text-[20px] font-bold text-[#161614]">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.7] text-black/55">
                    {item.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEGMENTOS */}
        <section
          id="segmentos"
          className="bg-[#071116] px-6 py-20 text-white sm:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#79C5E4]">
                  Feito para diferentes operações
                </p>

                <h2 className="mt-4 max-w-[620px] text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[42px] lg:text-[50px]">
                  Uma plataforma que acompanha a realidade do seu negócio.
                </h2>
              </div>

              <p className="max-w-[570px] text-[14px] leading-[1.75] text-white/55 lg:justify-self-end">
                Diferentes segmentos compartilham um mesmo desafio: estruturar
                processos, manter conformidade e transformar informação em
                gestão.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {SEGMENTOS.map((segmento, index) => {
                const Component = segmento.href ? "a" : "article";

                return (
                  <Component
                    key={segmento.titulo}
                    {...(segmento.href ? { href: segmento.href } : {})}
                    className={`
                      group
                      relative
                      min-h-[280px]
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-white/10
                      bg-[#0A1820]
                      p-7
                      transition
                      hover:border-[#74C7E7]/40
                      sm:p-9
                      ${
                        index === 4
                          ? "md:col-span-2 lg:min-h-[240px]"
                          : ""
                      }
                    `}
                  >
                    <div className="absolute right-[-60px] top-[-60px] h-[200px] w-[200px] rounded-full bg-[#327EA4]/10 blur-[60px] transition group-hover:bg-[#327EA4]/20" />

                    <div className="relative flex h-full flex-col justify-between">
                      <span className="text-[11px] font-bold text-[#74C7E7]">
                        {segmento.numero}
                      </span>

                      <div className="mt-20 max-w-[520px]">
                        <h3 className="text-[22px] font-bold">
                          {segmento.titulo}
                        </h3>

                        <p className="mt-3 text-[13px] leading-[1.7] text-white/55">
                          {segmento.texto}
                        </p>

                        {segmento.href && (
                          <span className="mt-5 inline-flex text-[11px] font-bold uppercase tracking-[0.08em] text-[#79C5E4]">
                            Conhecer solução →
                          </span>
                        )}
                      </div>
                    </div>
                  </Component>
                );
              })}
            </div>
          </div>
        </section>

        {/* POR QUE VITORA */}
        <section className="bg-[#0B2029] px-6 py-20 text-white sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1240px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#79C5E4]">
              Por que Vitora
            </p>

            <h2 className="mt-4 max-w-[760px] text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[42px] lg:text-[50px]">
              Tecnologia com experiência de quem entende de gestão.
            </h2>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {DIFERENCIAIS.map((item) => (
                <div
                  key={item.titulo}
                  className="border-t border-white/15 pt-6"
                >
                  <h3 className="text-[18px] font-bold">{item.titulo}</h3>

                  <p className="mt-3 max-w-[500px] text-[13px] leading-[1.7] text-white/50">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTES - só aparece quando houver logos */}
        {CLIENTES.length > 0 && (
          <section className="bg-white px-6 py-20 sm:px-8 lg:py-24">
            <div className="mx-auto max-w-[1240px]">
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#327EA4]">
                  Confiança
                </p>

                <h2 className="mt-4 text-[32px] font-extrabold text-[#161614] sm:text-[40px]">
                  Empresas que confiam no Vitora
                </h2>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {CLIENTES.map((cliente) => (
                  <div
                    key={cliente.nome}
                    className="flex min-h-[120px] items-center justify-center rounded-[18px] border border-black/10 bg-[#F8F9FA] p-6"
                  >
                    <Image
                      src={cliente.src}
                      alt={cliente.nome}
                      width={160}
                      height={70}
                      className="max-h-[48px] w-auto grayscale transition hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA FINAL */}
        <section className="relative overflow-hidden bg-[#67BFE2] px-6 py-20 text-[#071116] sm:px-8 lg:py-24">
          <div className="absolute right-[-100px] top-[-120px] h-[400px] w-[400px] rounded-full border border-[#071116]/10" />
          <div className="absolute right-[20px] top-[-30px] h-[240px] w-[240px] rounded-full border border-[#071116]/10" />

          <div className="relative mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-[800px] text-[35px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[44px] lg:text-[54px]">
                Sua gestão pode ser mais simples, integrada e rastreável.
              </h2>

              <p className="mt-5 max-w-[680px] text-[14px] leading-[1.7] text-[#071116]/70">
                Conheça o Vitora e descubra como conectar os principais
                processos da sua organização em uma única plataforma.
              </p>
            </div>

            <a
              href="#contato"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#071116] px-8 text-[12px] font-extrabold uppercase tracking-[0.06em] text-white transition hover:-translate-y-0.5"
            >
              Falar com um especialista
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#161614] px-6 py-10 text-white sm:px-8">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-8">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
              <Image
                src="/consultoria20/logo-vitora.png"
                alt="Vitora"
                width={145}
                height={42}
                className="h-auto w-[125px]"
              />

              <div className="flex flex-wrap gap-x-7 gap-y-3 text-[11px] text-white/55">
                <a href="#plataforma" className="hover:text-white">
                  Plataforma
                </a>

                <a href="#modulos" className="hover:text-white">
                  Módulos
                </a>

                <a href="#segmentos" className="hover:text-white">
                  Segmentos
                </a>

                <a href="/saude" className="hover:text-white">
                  Saúde
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-[10px] text-white/35">
                © 2026 Vitora Software. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}