import ResultadoAta from "./ResultadoAta";

export default function Mensagem({ mensagem }) {
  const doUsuario = mensagem.autor === "usuario";

  if (mensagem.tipo === "resultado") {
    return <ResultadoAta ata={mensagem.conteudo} lacunas={mensagem.lacunas} />;
  }

  return (
    <div className={doUsuario ? "flex justify-end" : "flex justify-start"}>
      <div
        className={[
          "max-w-[80%] rounded-sm px-4 py-3 text-sm leading-relaxed",
          doUsuario
            ? "bg-azul-claro text-preto"
            : "bg-azul-escuro text-branco",
          mensagem.tipo === "erro" ? "bg-transparent border border-azul-claro text-azul-claro" : "",
        ].join(" ")}
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