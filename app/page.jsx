import Image from "next/image";
import Grafismo from "@/components/Grafismo";
import PreviaAta from "@/components/PreviaAta";
import FormularioCadastro from "@/components/FormularioCadastro";

export default function Pagina() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Grafismo institucional como fundo, em baixa opacidade */}
      <Grafismo
        className="pointer-events-none absolute -right-32 -top-24 w-[42rem] text-branco opacity-[0.06] sm:-right-40 sm:w-[56rem] lg:-right-56 lg:w-[72rem]"
      />

      <div className="relative mx-auto max-w-conteudo px-5 sm:px-8 lg:px-12">
        {/* ── Cabeçalho ────────────────────────────────────────── */}
        <header className="py-10 sm:py-12">
          <Image
            src="/logotipo-vitora.svg"
            alt="Vitora — o futuro da qualidade"
            width={491}
            height={153}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </header>

        {/* ── Conteúdo ─────────────────────────────────────────── */}
        <main className="flex flex-col gap-10 pb-16 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-x-16 lg:gap-y-12 lg:pb-24">
          {/* Proposta */}
          <section className="order-1 vt-surge lg:col-start-1 lg:row-start-1">
            <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-claro">
              9º Congresso Nacional do CONFIES
            </p>

            <h1 className="mt-5 text-[2.125rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Grave a reunião.
              <br />
              Receba a ata.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-branco/85 sm:text-lg">
              A Vit ouve o áudio e devolve participantes, assuntos tratados e
              encaminhamentos com responsáveis e prazos.
            </p>

            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-branco/65">
              É uma pequena amostra de como o Vitora pode mudar a gestão da qualidade em sua instituição.
            </p>
          </section>

          {/* Cadastro */}
          <section
            className="order-2 vt-surge lg:col-start-2 lg:row-start-1 lg:row-span-2"
            style={{ animationDelay: "80ms" }}
          >
            <FormularioCadastro />
          </section>

          {/* Prévia da ata */}
          <section
            className="order-3 vt-surge lg:col-start-1 lg:row-start-2"
            style={{ animationDelay: "160ms" }}
          >
            <PreviaAta />
          </section>
        </main>

        {/* ── Rodapé ───────────────────────────────────────────── */}
        <footer className="border-t border-branco/12 py-8 text-sm font-light text-branco/60">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <a
                href="mailto:contato@vitora.com.br"
                className="transition-colors hover:text-azul-claro"
              >
                contato@vitora.com.br
              </a>
              <a
                href="tel:+555133086918"
                className="transition-colors hover:text-azul-claro"
              >
                +55 (51) 3308-6918
              </a>
            </div>

            <a
              href="https://www.faurgs.com.br/politicas/seguranca-da-informacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-azul-claro"
            >
              Política de privacidade
            </a>
          </div>

          <p className="mt-6 text-xs text-branco/40">
            FAURGS · CNPJ 74.704.008/0001-75
          </p>
        </footer>
      </div>
    </div>
  );
}
