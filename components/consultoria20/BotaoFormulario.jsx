"use client";

export default function BotaoFormulario() {
  function irParaFormulario() {
    document.getElementById("cadastro")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <button
      type="button"
      onClick={irParaFormulario}
      className="mt-6 inline-block rounded-full bg-[#49c7a9] px-8 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:brightness-95 sm:px-9 sm:text-[11px]"
    >
      Quero participar da seleção
    </button>
  );
}