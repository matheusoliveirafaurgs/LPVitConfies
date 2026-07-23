/**
 * Prévia de uma ata gerada pelo Vit, apresentada como documento em papel.
 *
 * As três seções refletem a estrutura real da saída do agente:
 * participantes, assuntos tratados e encaminhamentos.
 *
 * O último encaminhamento aparece sem prazo de propósito: quando a reunião
 * não define uma data, o Vit deixa o campo de fora em vez de inventar.
 */

const ATA = {
  titulo: "Comitê de Projetos — reunião ordinária",
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
          Exemplo de ata gerada pelo Vit a partir do áudio de uma reunião
        </figcaption>

        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-medio">
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
