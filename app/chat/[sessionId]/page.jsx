"use client";

import { useEffect, useState } from "react";
import Chat from "../../../components/chat/Chat";
import ResultadoAta from "../../../components/chat/ResultadoAta";

const VALIDA_ACESSO_URL = process.env.NEXT_PUBLIC_VIT_VALIDA_ACESSO_URL;

export default function PaginaChat({ params }) {
  const { sessionId: token } = params;
  const [estado, setEstado] = useState("verificando"); // verificando | valido | invalido

  useEffect(() => {
    let ativo = true;

    async function validar() {
      try {
        const resposta = await fetch(
          `${VALIDA_ACESSO_URL}?token=${encodeURIComponent(token)}`,
          { cache: "no-store" }
        );
        const dados = await resposta.json();
        if (!ativo) return;
        setEstado(dados.valido ? "valido" : "invalido");
      } catch {
        if (ativo) setEstado("invalido");
      }
    }

    validar();
    return () => {
      ativo = false;
    };
  }, [token]);

  if (estado === "verificando") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-branco">
        <p className="text-sm font-light text-preto/50">Verificando acesso…</p>
      </main>
    );
  }

  if (estado === "invalido") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-branco px-6">
        <div className="max-w-sm text-center">
          <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-escuro">
            Vit
          </p>
          <h1 className="mt-3 text-xl font-extrabold leading-tight text-preto">
            Não encontramos esse acesso
          </h1>
          <p className="mt-3 text-sm font-light leading-relaxed text-preto/70">
            O link pode ter expirado ou estar incorreto. Cadastre-se novamente
            para receber um novo acesso.
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-sm bg-azul-escuro px-5 py-3 text-sm font-semibold text-branco transition-colors hover:bg-preto"
          >
            Voltar para o cadastro
          </a>
        </div>
      </main>
    );
  }

  return <Chat sessionId={token} />;
}