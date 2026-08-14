import ResultadoAta from "./ResultadoAta";

export default function Mensagem({ mensagem }) {
  const doUsuario = mensagem.autor === "usuario";
  const ehErro = mensagem.tipo === "erro";

  if (mensagem.tipo === "resultado") {
    return <ResultadoAta ata={mensagem.conteudo} lacunas={mensagem.lacunas} />;
  }

  const classeBolha = ehErro
    ? "bg-branco border border-azul-escuro text-azul-escuro"
    : doUsuario
    ? "bg-azul-claro text-preto"
    : "bg-azul-escuro text-branco";

  return (
    <div className={doUsuario ? "flex justify-end" : "flex justify-start"}>
      <div
        className={`max-w-[80%] rounded-sm px-4 py-3 text-sm font-light leading-relaxed ${classeBolha}`}
      >
        {mensagem.tipo === "audio" ? (
          <audio controls src={mensagem.conteudo} className="w-56" />
        ) : (
          mensagem.conteudo
        )}
      </div>
    </div>
  );
}