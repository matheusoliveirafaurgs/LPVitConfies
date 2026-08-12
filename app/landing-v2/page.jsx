import Image from "next/image";
import FormularioAcessoV2 from "../../components/landing-v2/FormularioAcessoV2";
import { ClipboardCheck, Workflow, Clock, FolderOpen, ChevronDown } from "lucide-react";

const FUNCIONALIDADES = [
  { icone: ClipboardCheck, texto: "Organiza automaticamente os principais pontos da reuniao." },
  { icone: Workflow, texto: "Estrutura decisoes, responsaveis e proximos passos." },
  { icone: Clock, texto: "Economiza tempo na elaboracao de atas." },
  { icone: FolderOpen, texto: "Deixa seus registros muito mais organizados." },
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
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function IconeYoutube(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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

function PlaceholderImagem({ label, className = "" }) {
  return (
    <div className={`flex items-center justify-center border-2 border-dashed border-preto/25 bg-preto/5 text-center ${className}`}>
      <p className="px-6 text-xs font-semibold uppercase tracking-wide text-preto/40">{label}</p>
    </div>
  );
}

export default function LandingV2() {
  return (
    <div className="bg-branco text-preto">
      <section className="relative isolate min-h-[85vh] overflow-hidden bg-preto">
        <PlaceholderImagem label="Aguardando imagem do hero (marketing)" className="absolute inset-0 text-branco/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-preto via-preto/60 to-preto/20" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-conteudo flex-col justify-between px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <Image
            src="/logotipo-vitora.svg"
            alt="Vitora"
            width={491}
            height={153}
            priority
            className="h-9 w-auto sm:h-10"
          />

          <div className="max-w-2xl">
            <p className="inline-block rounded-full bg-branco px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-preto">
              Seu novo agente de IA para criar atas de reuniao em segundos.
            </p>
            <h1 className="mt-6 text-[2rem] font-extrabold uppercase leading-[1.08] tracking-tight text-branco sm:text-5xl lg:text-6xl">
              Enquanto voce conduz a reuniao...
              <br />
              A Vit organiza tudo para voce.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-branco/85 sm:text-base">
              <span className="font-semibold">Preencha seus dados e receba acesso gratuito a Vit</span>, uma
              assistente desenvolvida para transformar conversas em atas organizadas, economizando tempo da
              sua equipe e aumentando a produtividade. <span className="font-semibold">E gratuito.</span>
            </p>
          </div>

          <ChevronDown className="mx-auto h-6 w-6 text-branco/70" aria-hidden="true" />
        </div>
      </section>

      <section className="mx-auto max-w-conteudo px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <PlaceholderImagem label="Aguardando ilustracao da mascote Vit (marketing)" className="aspect-[3/4] rounded-2xl text-preto/40" />

          <div>
            <h2 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">Receba acesso gratuito</h2>
            <p className="mt-3 text-sm leading-relaxed text-preto/70 sm:text-base">
              Descubra como a Vit pode te auxiliar a sua gestao da qualidade.
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
            O que a Vit faz para voce?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {FUNCIONALIDADES.map(({ icone: Icone, texto }, i) => (
              <div key={i} className="flex flex-col items-start gap-4">
                <Icone className="h-9 w-9 text-branco" strokeWidth={1.5} aria-hidden="true" />
                <p className="text-sm leading-relaxed text-branco/85 sm:text-base">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-16 text-center sm:py-24">
        <h2 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">Conheca a Vit</h2>
        <p className="mt-4 text-sm leading-relaxed text-preto/70 sm:text-base">
          Conheca gratuitamente e veja como a Inteligencia Artificial pode tornar sua rotina muito mais simples.
        </p>
        <a href="#topo" className="mt-8 inline-block rounded-full bg-preto px-8 py-4 text-sm font-bold uppercase tracking-wide text-branco transition-colors hover:bg-azul-escuro">
          Receber acesso gratuito a Vit
        </a>
      </section>

      <footer className="bg-preto py-8 text-branco/70">
        <div className="mx-auto flex max-w-conteudo flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
          <p className="text-xs">(c) 2026 Vitora Software. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/softwarevitora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconeInstagram className="h-5 w-5 transition-colors hover:text-branco" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconeFacebook className="h-5 w-5 transition-colors hover:text-branco" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <IconeYoutube className="h-5 w-5 transition-colors hover:text-branco" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconeLinkedin className="h-5 w-5 transition-colors hover:text-branco" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
