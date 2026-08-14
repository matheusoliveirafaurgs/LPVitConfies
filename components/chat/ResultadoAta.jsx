function normalizarPrazo(prazo) {
  if (!prazo) return "";

  return String(prazo)
    .trim()
    .replace(/^at[eé]\s+/i, "")
    .trim();
}

function ItemAcao({ item }) {
  if (typeof item === "string") {
    return <li className="text-sm text-preto/80">{item}</li>;
  }

  if (item && typeof item === "object") {
    if (item.acao) {
      return (
        <li className="text-sm">
          <span className="font-semibold">{item.acao}</span>

          {(item.responsavel || item.prazo) && (
            <span className="mt-0.5 block text-[0.8125rem] font-light text-preto/55">
              {item.responsavel}
              {item.prazo
                ? ` · até ${normalizarPrazo(item.prazo)}`
                : ""}
            </span>
          )}
        </li>
      );
    }

    if (item.descricao) {
      return <li className="text-sm text-preto/80">{item.descricao}</li>;
    }
  }

  return (
    <li className="font-mono text-xs text-preto/50">
      {JSON.stringify(item)}
    </li>
  );
}

export default function ResultadoAta({ ata, lacunas }) {
  if (!ata || typeof ata !== "object") {
    return (
      <div className="rounded-[2px] bg-branco px-6 py-7 text-preto shadow-xl shadow-preto/40">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-medio">
          Ata gerada pela Vit
        </p>

        <p className="mt-3 text-sm text-preto/70">
          O resultado chegou num formato inesperado.
        </p>
      </div>
    );
  }

  const participantesNomeados =
    ata.participantes?.filter((p) => p.nome) ?? [];

  return (
    <div className="rounded-[2px] bg-branco px-6 py-7 text-preto shadow-xl shadow-preto/40">
      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-medio">
        Ata gerada pela Vit
      </p>

      {ata.titulo && (
        <h2 className="mt-2 text-lg font-extrabold leading-snug">
          {ata.titulo}
        </h2>
      )}

      {lacunas?.length > 0 && (
        <div className="mt-4 rounded-sm border border-azul-claro/40 bg-azul-claro/10 px-4 py-3">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-medio">
            Ainda não confirmado
          </p>

          <ul className="mt-1.5 space-y-1">
            {lacunas.map((l) => (
              <li key={l.campo} className="text-sm text-preto/80">
                {l.pergunta}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 space-y-4">
        {ata.contexto && (
          <div>
            <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-escuro">
              Contexto
            </h3>

            <p className="mt-1 text-sm text-preto/80">
              {ata.contexto}
            </p>
          </div>
        )}

        {participantesNomeados.length > 0 && (
          <div>
            <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-escuro">
              Participantes
            </h3>

            <p className="mt-1 text-sm text-preto/80">
              {participantesNomeados
                .map((p) => p.nome)
                .join(" · ")}
            </p>
          </div>
        )}

        {ata.assuntos?.length > 0 && (
          <div>
            <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-escuro">
              Assuntos tratados
            </h3>

            <div className="mt-2 space-y-3">
              {ata.assuntos.map((assunto) => (
                <div key={assunto.id}>
                  <p className="text-sm font-semibold text-preto">
                    {assunto.topico}
                  </p>

                  <p className="mt-0.5 text-sm text-preto/80">
                    {assunto.resumo}
                  </p>

                  {assunto.decisoes?.length > 0 && (
                    <ul className="mt-1.5 space-y-1 pl-4">
                      {assunto.decisoes.map((d, i) => (
                        <ItemAcao key={i} item={d} />
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {ata.encaminhamentos?.length > 0 && (
          <div>
            <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-escuro">
              Encaminhamentos
            </h3>

            <ul className="mt-2 space-y-2">
              {ata.encaminhamentos.map((item, i) => (
                <ItemAcao key={i} item={item} />
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Debug: descomenta esse bloco se precisar inspecionar o markdown bruto de novo
      {ata.ata_markdown && (
        <details className="mt-6 border-t border-preto/10 pt-3">
          <summary className="cursor-pointer text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-azul-medio">
            Ver ata completa (markdown bruto)
          </summary>

          <pre className="mt-2 whitespace-pre-wrap text-xs text-preto/70">
            {ata.ata_markdown}
          </pre>
        </details>
      )}
      */}
    </div>
  );
}