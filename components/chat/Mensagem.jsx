import ResultadoAta from "./ResultadoAta";

export default function Mensagem({ mensagem }) {
  const doUsuario = mensagem.autor === "usuario";
  const ehErro = mensagem.tipo === "erro";

  if (mensagem.tipo === "resultado") {
    return (
      <ResultadoAta
        ata={mensagem.conteudo}
        lacunas={mensagem.lacunas}
      />
    );
  }

  if (mensagem.tipo === "audio") {
    return (
      <div className={doUsuario ? "flex justify-end" : "flex justify-start"}>
        <div
          className={[
            "max-w-[440px] rounded-[6px] px-[16px] py-[14px]",
            doUsuario
              ? "bg-[#F3F5F7]"
              : "bg-[#161614]",
          ].join(" ")}
        >
          <audio
            controls
            src={mensagem.conteudo}
            className="w-[280px]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={doUsuario ? "flex justify-end" : "flex justify-start"}>
      <div
        className={[
          "max-w-[440px] rounded-[6px] px-[16px] py-[14px]",
          "text-[13px] font-normal leading-[18px]",
          ehErro
            ? "border border-[#1B456A] bg-white text-[#1B456A]"
            : doUsuario
              ? "bg-[#F3F5F7] text-[#161614]"
              : "bg-[#161614] text-white",
        ].join(" ")}
      >
        {mensagem.conteudo}
      </div>
    </div>
  );
}