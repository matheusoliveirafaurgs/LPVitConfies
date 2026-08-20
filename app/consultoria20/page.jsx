import Image from "next/image";
import { Montserrat } from "next/font/google";
import FormularioConsultoria from "@/components/consultoria20/FormularioConsultoria";
import BotaoFormulario from "@/components/consultoria20/BotaoFormulario";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Consultoria em Conformidade para Empresas | Vitora",

  description:
    "Participe da seleção para receber até 20 horas de consultoria especializada em gestão da qualidade, conformidade e melhoria de processos.",

  alternates: {
    canonical: "https://lp.vitora.com.br/consultoria20",
  },

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lp.vitora.com.br/consultoria20",
    siteName: "Vitora",
    title: "Consultoria em Conformidade para Empresas | Vitora",
    description:
      "Seleção de empresas para receber até 20 horas de consultoria especializada em gestão da qualidade, conformidade e melhoria de processos.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Consultoria em Conformidade para Empresas | Vitora",
    description:
      "Participe da seleção para receber até 20 horas de consultoria especializada em gestão da qualidade e conformidade.",
  },
};

const consultoriaStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoria em Conformidade",
  serviceType: "Consultoria em gestão da qualidade e conformidade",
  description:
    "Consultoria especializada para avaliação da gestão da qualidade, identificação de oportunidades de melhoria e fortalecimento da conformidade dos processos.",
  provider: {
    "@type": "Organization",
    name: "Vitora",
    url: "https://www.vitora.com.br",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  url: "https://lp.vitora.com.br/consultoria20",
};

const BENEFICIOS = [
  "Avaliação inicial da gestão da qualidade.",
  "Identificação de oportunidades de melhoria.",
  "Orientações para fortalecer a conformidade dos processos.",
  "Apoio especializado para tornar a gestão mais eficiente.",
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

export default function Consultoria20Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(consultoriaStructuredData),
        }}
      />

      <main className={`${montserrat.className} w-full bg-white text-black`}>
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-[#00141d] text-white">
          <div className="relative h-[430px] sm:h-[500px] lg:h-[560px] xl:h-[590px]">
            <Image
              src="/consultoria20/hero-photo.png"
              alt="Profissionais em reunião de consultoria empresarial"
              width={1920}
              height={1280}
              priority
              sizes="100vw"
              className="
                absolute
                left-1/2
                h-auto
                max-w-none
                -translate-x-1/2

                top-[-20px]
                w-[150%]

                sm:top-[-80px]
                sm:w-[125%]

                lg:top-[-210px]
                lg:w-full

                xl:top-[-225px]
              "
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#00141d]/40" />

            <div className="absolute inset-0 z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8">
              <Image
                src="/consultoria20/logo-vitora.png"
                alt="Vitora"
                width={160}
                height={46}
                priority
                className="
                  absolute
                  left-5
                  top-5
                  h-auto
                  w-[100px]

                  sm:left-8
                  sm:top-7
                  sm:w-[115px]

                  lg:top-8
                  lg:w-[125px]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-[30%]
                  w-full
                  max-w-[760px]
                  -translate-x-1/2
                  px-5
                  text-center

                  sm:top-[31%]
                  sm:px-8

                  lg:top-[31%]
                "
              >
                <h1
                  className="
                    text-[23px]
                    font-extrabold
                    uppercase
                    leading-[1.08]
                    tracking-[0.01em]

                    sm:text-[28px]
                    lg:text-[34px]
                  "
                >
                  Ganhe uma consultoria em
                  <br className="hidden sm:block" />
                  conformidade para sua empresa.
                </h1>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-[680px]
                    text-[12px]
                    font-medium
                    leading-[1.55]
                    text-white/90

                    sm:text-[13px]

                    lg:text-[14px]
                  "
                >
                  O Vitora vai selecionar empresas participantes do evento para
                  receberem até 20 horas de consultoria especializada em gestão
                  da qualidade e conformidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEXTO + FORMULÁRIO */}
        <section className="w-full bg-[#00141d] text-white">
          <div className="mx-auto grid w-full max-w-[1180px] lg:grid-cols-[44%_56%]">
            <div
              className="
                flex
                items-center
                px-6
                py-10

                sm:px-8
                sm:py-12

                lg:min-h-[320px]
                lg:px-12
              "
            >
              <p
                className="
                  mx-auto
                  max-w-[420px]
                  text-[20px]
                  font-normal
                  leading-[1.35]

                  sm:text-[22px]

                  lg:mx-0
                  lg:max-w-[330px]
                  lg:text-[21px]
                "
              >
                Uma oportunidade para{" "}
                <strong className="font-bold">identificar</strong> melhorias,{" "}
                <strong className="font-bold">fortalecer</strong> processos e{" "}
                <strong className="font-bold">preparar</strong> sua empresa para{" "}
                <strong className="font-bold">crescer</strong> com mais
                segurança.
              </p>
            </div>

            <div
              id="cadastro"
              className="
                scroll-mt-6
                bg-white
                px-6
                py-8
                text-black

                sm:px-8
                sm:py-9

                lg:min-h-[320px]
                lg:rounded-t-[36px]
                lg:px-[48px]
              "
            >
              <h2 className="text-[28px] font-extrabold uppercase leading-[1.02] sm:text-[30px]">
                Cadastre-se
                <br />
                para
                <br />
                participar
              </h2>

              <FormularioConsultoria />
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1040px]
              gap-8
              px-6

              sm:px-8

              lg:grid-cols-[42%_58%]
              lg:gap-10
            "
          >
            <div className="flex items-center">
              <h2 className="text-[30px] font-extrabold uppercase leading-[1.05] sm:text-[32px] lg:text-[36px]">
                O que sua
                <br />
                empresa
                <br />
                recebe?
              </h2>
            </div>

            <div className="space-y-4">
              {BENEFICIOS.map((beneficio) => (
                <div key={beneficio} className="flex items-start gap-4">
                  <Image
                    src="/consultoria20/benefit-icon.png"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                    className="mt-0.5 h-6 w-6 shrink-0"
                  />

                  <p className="text-[13px] leading-[1.5] text-black/75 lg:text-[14px]">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIS DO QUE UMA CONSULTORIA */}
        <section
          className="
            relative
            min-h-[240px]
            w-full
            overflow-hidden
            bg-black
            py-12
            text-white

            sm:min-h-[280px]
            lg:h-[320px]
            lg:min-h-0
            lg:py-0
          "
        >
          <Image
            src="/consultoria20/consultoria-bg.png"
            alt="Profissionais analisando informações durante uma consultoria"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="relative z-10 mx-auto flex h-full min-h-[216px] max-w-[700px] flex-col items-center justify-center px-6 text-center lg:min-h-0">
            <h2 className="text-[27px] font-extrabold uppercase leading-[1.08] sm:text-[29px] lg:text-[32px]">
              Mais do que uma
              <br />
              consultoria
            </h2>

            <p className="mt-5 max-w-[640px] text-[13px] leading-[1.6] text-white/90 sm:text-[14px]">
              Uma oportunidade para enxergar sua operação com um novo olhar e
              identificar ações práticas que podem reduzir riscos, fortalecer
              processos e aumentar a eficiência da gestão.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="w-full bg-white px-6 py-10 text-center sm:py-12 lg:py-14">
          <h2 className="text-[27px] font-extrabold uppercase sm:text-[29px] lg:text-[32px]">
            Inscreva sua empresa
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[13px] leading-[1.6] text-black/70 sm:text-[14px]">
            As vagas para a consultoria são limitadas e serão destinadas às
            empresas participantes do evento.
          </p>

          <BotaoFormulario />
        </section>

        {/* RODAPÉ */}
        <footer className="w-full bg-[#161614] py-6 text-white">
          <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center justify-between gap-5 px-6 sm:flex-row sm:px-8">
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
