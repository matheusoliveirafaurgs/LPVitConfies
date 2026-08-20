import Image from "next/image";
import { Montserrat } from "next/font/google";
import FormularioAcessoV2 from "../../components/landing-v2/FormularioAcessoV2";

export const metadata = {
  title: "Vit — Assistente de IA para atas de reunião | Vitora",

  description:
    "Transforme reuniões em atas organizadas com a Vit, assistente de IA do Vitora. Envie o áudio e receba os principais registros.",

  alternates: {
    canonical: "https://lp.vitora.com.br/vitreuniao",
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
    url: "https://lp.vitora.com.br/vitreuniao",
    siteName: "Vitora",
    title: "Vit — sua reunião vira ata | Vitora",
    description:
      "Transforme reuniões em atas organizadas com a Vit, assistente de IA do Vitora. Envie o áudio e receba os principais registros.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vit — sua reunião vira ata | Vitora",
    description:
      "Transforme reuniões em atas organizadas com a Vit, assistente de IA do Vitora. Envie o áudio e receba os principais registros.",
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

const vitStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vit",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "O Vit é um agente de IA da Vitora que transforma o áudio de reuniões em atas estruturadas, organizando participantes, assuntos, decisões e encaminhamentos.",
  provider: {
    "@type": "Organization",
    name: "Vitora",
    url: "https://www.vitora.com.br",
  },
  url: "https://lp.vitora.com.br/vitreuniao",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const FUNCIONALIDADES = [
  {
    icone: "/landing-v2/icone-organiza.png",
    texto: "Organiza automaticamente os principais pontos da reunião.",
  },
  {
    icone: "/landing-v2/icone-fluxo.png",
    texto: "Estrutura decisões, responsáveis e próximos passos.",
  },
  {
    icone: "/landing-v2/icone-tempo.png",
    texto: "Economiza tempo na elaboração de atas.",
  },
  {
    icone: "/landing-v2/icone-pasta.png",
    texto: "Deixa seus registros muito mais organizados.",
  },
];

function IconeInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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

function IconeFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.956.93-1.956 1.887v2.265h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
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

export default function LandingV2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vitStructuredData),
        }}
      />

      <div className={`${montserrat.className} bg-branco text-preto`}>
        <section
          id="topo"
          className="relative isolate overflow-hidden bg-preto"
        >
          <Image
            src="/landing-v2/hero-reuniao.jpg"
            alt="Pessoa em reunião por videochamada"
            fill
            priority
            className="object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-preto via-preto/70 to-preto/30" />

          <div className="relative mx-auto flex max-w-conteudo flex-col px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
            <Image
              src="/landing-v2/logo-vitora-branco.png"
              alt="Vitora"
              width={209}
              height={40}
              priority
              className="block h-6 w-auto self-start sm:h-7"
            />

            <div className="mt-10 max-w-2xl sm:mt-14 lg:mt-16">
              <p className="inline-block rounded-full bg-branco px-4 py-1.5 text-[0.6875rem] font-bold uppercase leading-snug tracking-wide text-preto">
                Sua nova agente de IA para criar atas de reunião em segundos.
              </p>

              <h1 className="mt-5 text-[1.65rem] font-extrabold uppercase leading-[1.15] tracking-tight text-branco sm:mt-6 sm:text-4xl sm:leading-[1.1] lg:text-5xl">
                Enquanto você conduz a reunião...
                <br />A{" "}
                <Image
                  src="/landing-v2/vit-branco.png"
                  alt="Vit"
                  width={83}
                  height={38}
                  className="inline h-[0.74em] w-auto align-baseline"
                />{" "}
                organiza tudo para você.
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-branco/85 sm:mt-6 sm:text-base">
                <span className="font-bold">
                  Preencha seus dados e receba acesso gratuito à Vit
                </span>
                , uma assistente desenvolvida para transformar conversas em atas
                organizadas, economizando tempo da sua equipe e aumentando a
                produtividade. <span className="font-bold">É gratuito.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-conteudo px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <Image
              src="/landing-v2/mascote-vit.png"
              alt="Vit - assistente de IA da Vitora"
              width={842}
              height={769}
              className="h-auto w-full"
            />

            <div>
              <h2 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
                Receba acesso gratuito
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-preto/70 sm:text-base">
                Descubra como a Vit pode auxiliar a sua gestão da qualidade.
              </p>

              <div className="mt-8">
                <FormularioAcessoV2 />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-preto py-16 text-branco sm:py-20">
          <div className="mx-auto max-w-conteudo px-5 sm:px-8 lg:px-12">
            <h2 className="text-center text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
              O que a{" "}
              <Image
                src="/landing-v2/vit-branco.png"
                alt="Vit"
                width={83}
                height={38}
                className="inline h-[0.72em] w-auto align-baseline"
              />{" "}
              faz para você?
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {FUNCIONALIDADES.map(({ icone, texto }, i) => (
                <div key={i} className="flex flex-col items-start gap-4">
                  <Image
                    src={icone}
                    alt=""
                    width={40}
                    height={40}
                    className="h-9 w-9"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-relaxed text-branco/85 sm:text-base">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-5 py-16 text-center sm:py-24">
          <h2 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
            Conheça a{" "}
            <Image
              src="/landing-v2/vit-preto.png"
              alt="Vit"
              width={83}
              height={38}
              className="inline h-[0.72em] w-auto align-baseline"
            />
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-preto/70 sm:text-base">
            Conheça gratuitamente e veja como a Inteligência Artificial pode
            tornar sua rotina muito mais simples.
          </p>

          <a
            href="#topo"
            className="mt-8 inline-block rounded-full bg-preto px-8 py-4 text-sm font-bold uppercase tracking-wide text-branco transition-colors hover:bg-azul-escuro"
          >
            Receber acesso gratuito à Vit
          </a>
        </section>

        <footer className="bg-preto py-8 text-branco/70">
          <div className="mx-auto flex max-w-conteudo flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
            <p className="text-xs">
              © 2026 Vitora Software. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/softwarevitora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconeInstagram className="h-5 w-5 transition-colors hover:text-branco" />
              </a>

              <a
                href="https://www.facebook.com/software.vitora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconeFacebook className="h-5 w-5 transition-colors hover:text-branco" />
              </a>

              <a
                href="https://www.linkedin.com/company/softwarevitora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconeLinkedin className="h-5 w-5 transition-colors hover:text-branco" />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=555133086918&text=Ol%C3%A1%21+Vim+pelo+estande+do+Vitora+no+Congresso+do+CONFIES+e+quero+saber+mais.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <IconeWhatsapp className="h-5 w-5 transition-colors hover:text-branco" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
