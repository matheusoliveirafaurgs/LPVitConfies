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
  title: "Software de Gestão QSMS | Qualidade, Segurança e Saúde | Vitora",

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
    title: "Software de Gestão QSMS | Vitora",
    description:
      "Integre qualidade, segurança, saúde e meio ambiente em uma plataforma completa para tornar sua gestão mais rastreável e eficiente.",
  },

  twitter: {
    card: "summary",
    title: "Software de Gestão QSMS | Vitora",
    description:
      "Centralize os principais processos de QSMS em uma única plataforma.",
  },

  icons: {
    icon: [
      {
        url: "/favicon-preto.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-branco.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
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
        "Software de gestão QSMS para qualidade, segurança, saúde e meio ambiente, com recursos para documentos, auditorias, indicadores, incidentes, fornecedores, checklists e planejamento.",
      provider: {
        "@id": "https://www.vitora.com.br/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Indústrias, construção civil, petróleo e gás, prestadores de serviços e organizações da área da saúde",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://lp.vitora.com.br/querovitora/#webpage",
      url: "https://lp.vitora.com.br/querovitora",
      name: "Software de Gestão QSMS | Vitora",
      description:
        "Plataforma integrada para gestão da qualidade, segurança, saúde e meio ambiente.",
      about: {
        "@id": "https://lp.vitora.com.br/querovitora/#software",
      },
      publisher: {
        "@id": "https://www.vitora.com.br/#organization",
      },
    },
  ],
};

const SEGMENTOS = [
  {
    numero: "01",
    titulo: "Indústria",
    texto:
      "Qualidade, processos, fornecedores e indicadores para operações que buscam mais controle.",
  },
  {
    numero: "02",
    titulo: "Construção Civil",
    texto:
      "Documentos, auditorias, checklists e processos de campo mais organizados.",
  },
  {
    numero: "03",
    titulo: "Petróleo & Gás",
    texto:
      "Mais rastreabilidade e controle para operações com altos requisitos de segurança.",
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
      "Controle documentos, auditorias, indicadores e ocorrências em ambientes regulados.",
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

function HeroTechVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Grafismo auxiliar esquerdo */}
      <div className="absolute bottom-[-30px] left-[-120px] hidden h-[340px] w-[420px] lg:block">
        <svg
          viewBox="0 0 420 340"
          fill="none"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 250
              H110
              C145 250 163 232 163 197
              V170
              C163 140 177 123 205 108
              L270 73
              C297 59 311 41 311 10
            "
            stroke="#92B2C8"
            strokeWidth="2"
            opacity="0.09"
          />

          <path
            d="
              M0 300
              H150
              C182 300 198 284 198 252
              V226
              C198 198 212 182 238 168
              L315 126
              C340 113 352 96 352 67
            "
            stroke="#4D82A3"
            strokeWidth="2"
            opacity="0.07"
          />

          <circle cx="163" cy="170" r="2.5" fill="#92B2C8" opacity="0.35" />
        </svg>
      </div>

      {/* Grade técnica */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(146,178,200,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(146,178,200,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 58%, transparent 100%)",
        }}
      />

      {/* Grafismo direito */}
      <div className="absolute right-[-40px] top-[72px] hidden h-[650px] w-[760px] lg:block">
        <svg
          viewBox="0 0 760 650"
          fill="none"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M760 105
              H585
              C545 105 525 125 525 165
              V220
              C525 255 510 275 478 292
              L355 357
              C325 373 310 396 310 430
              V490
              C310 530 290 550 250 550
              H80
            "
            stroke="#92B2C8"
            strokeWidth="2"
            opacity="0.22"
          />

          <path
            d="
              M760 190
              H635
              C600 190 582 208 582 243
              V275
              C582 310 565 330 535 346
              L430 402
              C400 418 385 438 385 470
              V505
              C385 535 370 550 340 550
              H180
            "
            stroke="#4D82A3"
            strokeWidth="2"
            opacity="0.20"
          />

          <path
            d="
              M705 28
              V145
              C705 182 685 200 648 200
              H615
            "
            stroke="#1B456A"
            strokeWidth="2"
            opacity="0.35"
          />

          <path
            d="
              M610 650
              V540
              C610 505 592 487 557 487
              H520
            "
            stroke="#1B456A"
            strokeWidth="2"
            opacity="0.28"
          />

          <circle cx="525" cy="220" r="3" fill="#92B2C8" opacity="0.65" />
          <circle cx="310" cy="430" r="3" fill="#4D82A3" opacity="0.65" />
          <circle cx="582" cy="275" r="2.5" fill="#92B2C8" opacity="0.55" />
        </svg>
      </div>

      <div className="absolute right-[10%] top-[18%] h-[360px] w-[360px] bg-[#1B456A]/[0.05] blur-[120px]" />
    </div>
  );
}

function IconeInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconeFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.956.93-1.956 1.887v2.265h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function IconeLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconeWhatsapp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.895a9.825 9.825 0 012.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.69 1.448h.005c6.557 0 11.892-5.335 11.895-11.893a11.821 11.821 0 00-3.488-8.413z" />
    </svg>
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
        <section className="relative bg-[#161614] text-white">
          <HeroTechVisual />

          <header className="relative z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 sm:px-8 lg:px-10 xl:px-12">
            <a href="#inicio" aria-label="Vitora - início">
              <Image
                src="/consultoria20/logo-vitora.png"
                alt="Vitora"
                width={160}
                height={46}
                priority
                className="h-auto w-[132px] sm:w-[148px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-8 text-[12px] font-medium text-white/60 lg:flex"
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
              className="
                rounded-full
                border
                border-white/20
                px-5
                py-2.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                transition
                hover:border-[#92B2C8]
                hover:bg-white/[0.03]
              "
            >
              Solicitar proposta
            </a>
          </header>

          <div
            id="inicio"
            className="
              relative
              z-20
              mx-auto
              grid
              min-h-[720px]
              w-full
              max-w-[1440px]
              items-center
              gap-14
              px-6
              pb-20
              pt-10

              sm:px-8

              lg:grid-cols-[1.06fr_0.94fr]
              lg:gap-16
              lg:px-10
              lg:pb-24
              lg:pt-14

              xl:px-12
            "
          >
            <div className="relative max-w-[790px]">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#92B2C8] sm:text-[12px]">
                Software de Gestão QSMS
              </p>

              <h1 className="max-w-[860px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-[48px] lg:text-[56px] xl:text-[60px]">
                Gestão da qualidade, segurança, saúde e meio ambiente em{" "}
                <span className="text-[#92B2C8]">uma única plataforma.</span>
              </h1>

              <p className="mt-8 max-w-[700px] text-[15px] font-normal leading-[1.8] text-white/72 sm:text-[16px]">
                Centralize processos, documentos, auditorias, indicadores,
                fornecedores e planos de ação em um sistema completo para tornar
                sua gestão mais integrada, rastreável e eficiente.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contato"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    px-7
                    text-[12px]
                    font-extrabold
                    uppercase
                    tracking-[0.05em]
                    text-[#161614]
                    transition
                    hover:-translate-y-0.5
                    hover:bg-[#F1F1EE]
                  "
                >
                  Solicitar proposta
                </a>

                <a
                  href="#plataforma"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    px-7
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.05em]
                    text-white
                    transition
                    hover:border-[#92B2C8]
                    hover:bg-white/[0.03]
                  "
                >
                  Conhecer a plataforma
                </a>
              </div>

              <div className="mt-7 flex max-w-[620px] items-center gap-4">
                <div className="h-px w-10 shrink-0 bg-[#4D82A3]" />

                <p className="max-w-[570px] text-[12px] leading-[1.6] text-white/50">
                  Tecnologia para organizações que precisam de mais controle,
                  conformidade e visibilidade sobre seus processos.
                </p>
              </div>
            </div>

            <div
              id="contato"
              className="relative flex justify-end lg:-translate-y-3"
            >
              <div className="pointer-events-none absolute right-[8%] top-[12%] h-[360px] w-[360px] rounded-full bg-[#1B456A]/10 blur-[100px]" />

              <div className="relative z-10">
                <FormularioQueroVitora />
              </div>
            </div>
          </div>
        </section>

        {/* PLATAFORMA + BENEFÍCIOS */}
        <section
          id="plataforma"
          className="relative bg-white px-6 py-20 text-[#161614] sm:px-8 lg:py-20"
        >
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1B456A]">
                  Plataforma integrada
                </p>

                <h2 className="mt-4 max-w-[700px] text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[42px] lg:text-[46px]">
                  Uma gestão conectada
                  <br />
                  do início ao fim.
                </h2>
              </div>

              <div className="max-w-[590px] lg:justify-self-end">
                <p className="text-[15px] leading-[1.8] text-black/60">
                  O Vitora reúne qualidade, segurança, saúde e meio ambiente em
                  uma plataforma integrada para centralizar informações,
                  estruturar processos e acompanhar a gestão com mais clareza.
                </p>

                <p className="mt-4 text-[13px] leading-[1.75] text-black/65">
                  Menos controles dispersos. Mais rastreabilidade, padronização
                  e visibilidade para sua operação.
                </p>
              </div>
            </div>

            <div className="mt-14 grid border-y border-black/10 md:grid-cols-3">
              {[
                {
                  numero: "01",
                  titulo: "Centralize informações",
                  texto:
                    "Documentos, indicadores, ocorrências e responsabilidades organizados em um único ambiente.",
                },
                {
                  numero: "02",
                  titulo: "Automatize processos",
                  texto:
                    "Estruture fluxos e reduza controles manuais para tornar a gestão mais simples e previsível.",
                },
                {
                  numero: "03",
                  titulo: "Tome decisões com dados",
                  texto:
                    "Transforme registros operacionais em informações úteis para acompanhamento e decisão.",
                },
              ].map((item, index) => (
                <article
                  key={item.titulo}
                  className={`
                    py-8
                    md:min-h-[165px]
                    md:px-8
                    md:py-7

                    ${
                      index !== 0
                        ? "border-t border-black/10 md:border-l md:border-t-0"
                        : ""
                    }
                  `}
                >
                  <span className="text-[16px] font-extrabold leading-none text-[#1B456A]">
                    {item.numero}
                  </span>

                  <h3 className="mt-7 text-[20px] font-bold leading-[1.15]">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 max-w-[310px] text-[13px] leading-[1.7] text-black/65">
                    {item.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MÓDULOS */}
        <ModulosQueroVitora />

        {/* SEGMENTOS */}
        <section
          id="segmentos"
          className="relative overflow-hidden bg-white px-6 py-20 text-[#161614] sm:px-8 lg:py-24"
        >
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1B456A]">
                  Segmentos de atuação
                </p>

                <h2 className="mt-4 max-w-[720px] text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[42px] lg:text-[46px]">
                  Uma plataforma que acompanha
                  <br />a realidade do seu negócio.
                </h2>
              </div>

              <p className="max-w-[570px] text-[14px] leading-[1.75] text-black/55 lg:justify-self-end">
                Diferentes operações compartilham desafios de controle,
                conformidade, rastreabilidade e padronização. O Vitora se adapta
                a diferentes contextos de gestão.
              </p>
            </div>

            <div className="mt-14 grid overflow-hidden border-y border-black/10 sm:grid-cols-2 lg:grid-cols-5">
              {SEGMENTOS.map((segmento, index) => (
                <article
                  key={segmento.titulo}
                  className={`
                    group
                    relative
                    min-h-[185px]
                    px-6
                    py-7
                    transition
                    hover:bg-[#F6F7F7]

                    ${
                      index !== 0
                        ? "border-t border-black/10 sm:border-l sm:border-t-0"
                        : ""
                    }

                    ${index === 2 ? "sm:border-t lg:border-t-0" : ""}

                    ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
                  `}
                >
                  <span className="text-[16px] font-extrabold leading-none text-[#1B456A]">
                    {segmento.numero}
                  </span>

                  <div className="mt-7">
                    <h3 className="text-[18px] font-bold leading-[1.15]">
                      {segmento.titulo}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.65] text-black/48">
                      {segmento.texto}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#4D82A3] transition-all duration-300 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUE VITORA */}
        <section className="relative overflow-hidden bg-[#161614] px-6 py-20 text-white sm:px-8 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute right-[-90px] top-[40px] hidden h-[360px] w-[300px] lg:block">
              <svg
                viewBox="0 0 300 360"
                fill="none"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="
                    M300 20
                    H220
                    C186 20 168 38 168 72
                    V112
                    C168 142 152 160 124 175
                    L68 205
                    C42 219 28 238 28 268
                    V340
                  "
                  stroke="#92B2C8"
                  strokeWidth="1.5"
                  opacity="0.20"
                />

                <path
                  d="
                    M300 86
                    H252
                    C220 86 204 102 204 134
                    V165
                    C204 194 190 210 164 224
                    L112 252
                    C88 265 76 282 76 310
                    V360
                  "
                  stroke="#4D82A3"
                  strokeWidth="1.4"
                  opacity="0.14"
                />
              </svg>
            </div>

            <div className="absolute bottom-[-120px] left-[12%] h-[320px] w-[320px] rounded-full bg-[#1B456A]/[0.06] blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1240px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#92B2C8]">
                  Por que Vitora
                </p>

                <h2 className="mt-4 max-w-[700px] text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[42px] lg:text-[48px]">
                  Tecnologia com experiência
                  <br />
                  de quem entende de gestão.
                </h2>
              </div>

              <p className="max-w-[560px] text-[14px] leading-[1.75] text-white/52 lg:justify-self-end">
                Uma plataforma construída para acompanhar processos críticos,
                fortalecer a conformidade e evoluir junto com a realidade das
                organizações.
              </p>
            </div>

            <div className="mt-14 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {DIFERENCIAIS.map((item, index) => (
                <article
                  key={item.titulo}
                  className={`
                    py-8
                    sm:px-7

                    ${
                      index !== 0
                        ? "border-t border-white/10 sm:border-l sm:border-t-0"
                        : ""
                    }

                    ${index === 2 ? "sm:border-t lg:border-t-0" : ""}
                  `}
                >
                  <span className="text-[16px] font-extrabold leading-none text-[#92B2C8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-7 text-[18px] font-bold leading-[1.2]">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 text-[12px] leading-[1.65] text-white/48">
                    {item.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden bg-[#92B2C8] px-6 py-14 text-[#161614] sm:px-8 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute right-[-80px] top-[-100px] h-[320px] w-[320px] rounded-full border border-[#161614]/10" />

            <div className="absolute right-[70px] top-[-20px] h-[190px] w-[190px] rounded-full border border-[#161614]/10" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1B456A]">
                Pronto para evoluir sua gestão?
              </p>

              <h2 className="mt-4 max-w-[790px] text-[32px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[40px] lg:text-[46px]">
                Sua gestão pode ser mais simples, integrada e rastreável.
              </h2>

              <p className="mt-4 max-w-[650px] text-[13px] leading-[1.7] text-[#161614]/65">
                Conheça o Vitora e descubra como conectar os principais
                processos da sua organização em uma única plataforma.
              </p>
            </div>

            <a
              href="#contato"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                bg-[#161614]
                px-8
                text-[12px]
                font-extrabold
                uppercase
                tracking-[0.06em]
                text-white
                transition
                hover:-translate-y-0.5
                hover:bg-[#1B456A]
              "
            >
              Falar com um especialista
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full bg-[#161614] py-6 text-white">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-5 px-6 sm:flex-row sm:px-8">
            <p className="text-center text-[10px] text-white/70 sm:text-left">
              © 2026 Vitora Software. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-4 text-white">
              <a
                href="https://www.instagram.com/softwarevitora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconeInstagram className="h-[18px] w-[18px] transition-opacity hover:opacity-70" />
              </a>

              <a
                href="https://www.facebook.com/software.vitora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconeFacebook className="h-[18px] w-[18px] transition-opacity hover:opacity-70" />
              </a>

              <a
                href="https://www.linkedin.com/company/softwarevitora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconeLinkedin className="h-[18px] w-[18px] transition-opacity hover:opacity-70" />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=555133086918"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <IconeWhatsapp className="h-[18px] w-[18px] transition-opacity hover:opacity-70" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
