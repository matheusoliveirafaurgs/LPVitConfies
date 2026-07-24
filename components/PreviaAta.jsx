import Image from "next/image";

/**
 * Prévia de uma ata gerada pela Vit, apresentada como documento em papel.
 *
 * O cabeçalho segue o padrão de sistemas de ata reais: marca + tipo de
 * documento à esquerda, timestamp de geração à direita.
 *
 * As três seções abaixo refletem a estrutura real da saída do agente:
 * participantes, assuntos tratados e encaminhamentos.
 *
 * Participantes listam só quem foi identificado falando na gravação — como
 * o Vit trabalha a partir de áudio, não de lista de convocados, não há como
 * saber quem faltou. Registrar ausência seria inventar um dado que o áudio
 * não contém, o mesmo princípio que já vale para o prazo: quando a reunião
 * não define algo, o Vit deixa de fora em vez de supor.
 *
 * O último encaminhamento aparece sem prazo de propósito, pelo mesmo motivo.
 */

const ATA = {
  titulo: "Comitê de Projetos — reunião ordinária",
  geradaEm: "24/07/2026 · 09:42",
  participantes: ["Ana Ribeiro", "Carlos Menezes", "Júlia Prado"],
  assuntos: [
    "Prestação de contas do projeto XPTO",
    "Cronograma de captação para 2027",
  ],
  encaminhamentos: [
    {
      acao: "Revisar o relatório parcial",
      responsavel: "Ana Ribeiro",
      prazo: "12/09",
    },
    {
      acao: "Enviar a minuta do termo aditivo",
      responsavel: "Carlos Menezes",
      prazo: null,
    },
  ],
};

function Secao({ titulo, children }) {
  return (
    <div className="border-t border-preto/10 pt-4">
      <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-escuro">
        {titulo}
      </h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function PreviaAta() {
  return (
    <div className="relative">
      {/* Folhas empilhadas ao fundo, sugerindo um documento impresso */}
      <div
        aria-hidden="true"
        className="absolute inset-x-2 -bottom-2 top-2 rounded-[2px] bg-branco/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-1 -bottom-1 top-1 rounded-[2px] bg-branco/40"
      />

      <figure className="relative rounded-[2px] bg-branco px-7 py-8 text-preto shadow-2xl shadow-preto/50 sm:px-9 sm:py-10">
        <figcaption className="sr-only">
          Exemplo de ata gerada pela Vit a partir do áudio de uma reunião
        </figcaption>

        {/* Cabeçalho — marca + tipo de documento à esquerda, timestamp à direita */}
        <div className="flex items-start justify-between gap-4 border-b border-preto/10 pb-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logotipo-vitora-selo.png"
              alt=""
              width={120}
              height={121}
              className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
            />
            <div>
              <p className="text-sm font-extrabold leading-tight text-preto">
                Vitora
              </p>
              <p className="text-[0.6875rem] font-light leading-tight text-preto/55">
                Ata de Reunião
              </p>
            </div>
          </div>
          <p className="shrink-0 text-right text-[0.6875rem] font-light leading-tight text-preto/45">
            Gerada automaticamente
            <br />
            {ATA.geradaEm}
          </p>
        </div>

        <p className="mt-6 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-medio">
          Exemplo de ata
        </p>

        <h2 className="mt-3 text-xl font-extrabold leading-snug sm:text-2xl">
          {ATA.titulo}
        </h2>

        <div className="mt-7 space-y-5">
          <Secao titulo="Participantes">
            <p className="text-sm leading-relaxed text-preto/80">
              {ATA.participantes.join(" · ")}
            </p>
          </Secao>

          <Secao titulo="Assuntos tratados">
            <ul className="space-y-1.5">
              {ATA.assuntos.map((assunto) => (
                <li
                  key={assunto}
                  className="text-sm leading-relaxed text-preto/80"
                >
                  {assunto}
                </li>
              ))}
            </ul>
          </Secao>

          <Secao titulo="Encaminhamentos">
            <ul className="space-y-3">
              {ATA.encaminhamentos.map((item) => (
                <li key={item.acao} className="text-sm leading-relaxed">
                  <span className="font-semibold text-preto">{item.acao}</span>
                  <span className="mt-0.5 block text-[0.8125rem] font-light text-preto/55">
                    {item.responsavel}
                    {item.prazo ? ` · até ${item.prazo}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </Secao>
        </div>
      </figure>
    </div>
  );
}