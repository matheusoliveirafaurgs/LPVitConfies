/**
 * Prévia de uma ata gerada pelo Vit.
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
    <div className="border-t border-azul-escuro/60 pt-4">
      <h3 className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-claro">
        {titulo}
      </h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function PreviaAta() {
  return (
    <figure className="rounded-sm border border-azul-escuro bg-azul-escuro/25 p-6 sm:p-7">
      <figcaption className="sr-only">
        Exemplo de ata gerada pelo Vit a partir do áudio de uma reunião
      </figcaption>

      <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-medio">
        Exemplo de saída
      </p>
      <p className="mt-2 text-lg font-semibold leading-snug sm:text-xl">
        {ATA.titulo}
      </p>

      <div className="mt-6 space-y-5">
        <Secao titulo="Participantes">
          <p className="text-sm leading-relaxed text-branco/90">
            {ATA.participantes.join(" · ")}
          </p>
        </Secao>

        <Secao titulo="Assuntos tratados">
          <ul className="space-y-1.5">
            {ATA.assuntos.map((assunto) => (
              <li
                key={assunto}
                className="text-sm leading-relaxed text-branco/90"
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
                <span className="text-branco/90">{item.acao}</span>
                <span className="mt-0.5 block text-[0.8125rem] font-light text-azul-claro">
                  {item.responsavel}
                  {item.prazo ? ` · até ${item.prazo}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </Secao>
      </div>
    </figure>
  );
}
