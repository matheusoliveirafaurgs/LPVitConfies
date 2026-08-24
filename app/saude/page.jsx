import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import FormularioSaude from "@/components/saude/FormularioSaude";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Gestão da Qualidade para Saúde | Vitora",

  description:
    "Centralize documentos, auditorias, indicadores, fornecedores e ocorrências com o Vitora, software de gestão da qualidade para a área da saúde.",

  alternates: {
    canonical: "https://lp.vitora.com.br/saude",
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
    url: "https://lp.vitora.com.br/saude",
    siteName: "Vitora",
    title: "Gestão da Qualidade para Saúde | Vitora",
    description:
      "Mais controle, rastreabilidade e segurança para a gestão da qualidade na área da saúde.",
    images: [
      {
        url: "/saude/hero-saude.jpg",
        alt: "Vitora - Gestão da Qualidade para a Área da Saúde",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gestão da Qualidade para Saúde | Vitora",
    description:
      "Mais controle, rastreabilidade e segurança para a gestão da qualidade na área da saúde.",
    images: ["/saude/hero-saude.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon-preto.png?v=3",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-branco.png?v=3",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

const saudeStructuredData = {
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
      "@id": "https://lp.vitora.com.br/saude/#software",
      name: "Vitora para Saúde",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://lp.vitora.com.br/saude",
      description:
        "Software de gestão da qualidade para organizações da área da saúde, com recursos para documentos, auditorias, indicadores, incidentes, fornecedores e conformidade.",
      provider: {
        "@id": "https://www.vitora.com.br/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Hospitais, distribuidoras de medicamentos, indústrias farmacêuticas e empresas de produtos e equipamentos médicos",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://lp.vitora.com.br/saude/#webpage",
      url: "https://lp.vitora.com.br/saude",
      name: "Gestão da Qualidade para Saúde | Vitora",
      description:
        "Software de gestão da qualidade para organizações da área da saúde.",
      about: {
        "@id": "https://lp.vitora.com.br/saude/#software",
      },
    },
  ],
};

const SEGMENTOS = [
  {
    titulo: "Hospitais",
    texto:
      "Padronize protocolos, acompanhe não conformidades e fortaleça a segurança dos processos assistenciais e administrativos.",
  },
  {
    titulo: "Distribuidoras de Medicamentos",
    texto:
      "Controle a qualidade do recebimento ao despacho, fornecedores, registros e desvios.",
  },
  {
    titulo: "Indústria Farmacêutica",
    texto:
      "Apoie requisitos da ANVISA e normas internacionais com gestão estruturada de documentos, auditorias e eventos da qualidade.",
  },
  {
    titulo: "Produtos & Equipamentos Médicos",
    texto:
      "Fortaleça conformidade regulatória, rastreabilidade e excelência operacional.",
  },
];

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

export default function SaudePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(saudeStructuredData),
        }}
      />

      <main className={`${montserrat.className} bg-white text-[#161614]`}>
        {/* HERO */}
        <section
          id="contato"
          className="relative overflow-hidden bg-[#071A24] text-white"
        >
          <div className="absolute inset-0">
            <Image
              src="/saude/hero-saude.jpg"
              alt="Profissional da área da saúde em ambiente hospitalar"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[58%_center] sm:object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071A24]/95 via-[#071A24]/40 to-[#071A24]/78" />
          </div>

          <div
            className="
              relative
              mx-auto
              grid
              w-full
              max-w-[1440px]
              gap-8
              px-6
              pb-10
              pt-8

              sm:px-8
              sm:pb-12

              lg:min-h-[680px]
              lg:grid-cols-[1.05fr_0.78fr]
              lg:items-center
              lg:gap-24
              lg:px-10
              lg:py-14

              xl:px-6
            "
          >
            <div className="lg:-ml-8 lg:-mt-4 xl:-ml-16">
              <Image
                src="/landing-v2/logo-vitora-branco.png"
                alt="Vitora"
                width={209}
                height={40}
                priority
                className="h-auto w-[105px] sm:w-[120px] lg:w-[135px]"
              />

              <p className="mt-10 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
                Gestão da Qualidade para a Área da Saúde
              </p>

              <h1 className="mt-5 max-w-[560px] text-[31px] font-extrabold uppercase leading-[1.03] tracking-[-0.02em] sm:text-[40px] lg:text-[56px]">
                Na saúde,
                <br />
                não há margem
                <br />
                para erros.
              </h1>

              <p className="mt-5 max-w-[540px] text-[14px] leading-[1.65] text-white/85 sm:text-[16px]">
                Centralize documentos, auditorias, indicadores, fornecedores e
                ocorrências em uma única plataforma preparada para ambientes
                regulados e operações que exigem rastreabilidade.
              </p>
            </div>

            <div className="w-full max-w-[540px] rounded-[20px] bg-white p-5 text-[#161614] shadow-2xl sm:p-7 lg:-translate-y-4 lg:translate-x-10 lg:rounded-[24px] lg:p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#4EAED4]">
                Fale com um especialista
              </p>

              <h2 className="mt-3 text-[23px] font-extrabold leading-[1.08] sm:text-[27px] lg:text-[29px]">
                Descubra como o Vitora pode estruturar sua gestão da qualidade.
              </h2>

              <p className="mt-3 text-[13px] leading-[1.6] text-black/60">
                Preencha seus dados e nossa equipe entrará em contato.
              </p>

              <div className="mt-7">
                <FormularioSaude />
              </div>
            </div>
          </div>
        </section>

        {/* SEGMENTOS */}
        <section className="relative overflow-hidden bg-[#F5F7F8] py-14 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-[1100px] px-6 sm:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4EAED4]">
                Para quem é o Vitora
              </p>

              <h2 className="mt-4 text-[30px] font-extrabold uppercase leading-[1.08] sm:text-[38px]">
                Gestão de ponta para diferentes operações da saúde
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {SEGMENTOS.map((segmento) => (
                <article
                  key={segmento.titulo}
                  className="rounded-[18px] border border-black/5 bg-white/95 p-7 backdrop-blur-sm"
                >
                  <h3 className="text-[19px] font-bold text-[#278EB8]">
                    {segmento.titulo}
                  </h3>

                  <p className="mt-4 text-[13px] leading-[1.7] text-black/65">
                    {segmento.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-[#4EAED4] px-6 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[31px] font-extrabold uppercase leading-[1.08] sm:text-[39px]">
              A área da saúde não pode correr riscos.
            </h2>

            <p className="mx-auto mt-5 max-w-[640px] text-[14px] leading-[1.7] text-white/90 sm:text-[15px]">
              Estruture sua gestão da qualidade com mais controle,
              rastreabilidade e segurança.
            </p>

            <Link
              href="#contato"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#161614] px-6 text-[12px] font-bold uppercase tracking-[0.06em] text-white transition-transform hover:-translate-y-0.5 sm:px-8 sm:text-[13px]"
            >
              Quero conhecer o Vitora
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#161614] py-7 text-white/70">
          <div className="mx-auto flex max-w-[1040px] flex-col items-center justify-between gap-5 px-6 sm:flex-row sm:px-8">
            <p className="text-center text-[10px] sm:text-left">
              © 2026 Vitora Software. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-5 text-white">
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