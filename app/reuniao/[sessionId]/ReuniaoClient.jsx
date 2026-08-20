"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

import Chat from "../../../components/chat/Chat";

const inter = Inter({
  subsets: ["latin"],
});

const VALIDA_ACESSO_URL =
  process.env.NEXT_PUBLIC_VIT_VALIDA_ACESSO_URL;

export default function ReuniaoClient({ sessionId }) {
  const token = sessionId;

  const [estado, setEstado] = useState("verificando");
  // verificando | valido | invalido | erro

  useEffect(() => {
    let ativo = true;

    async function validar() {
      try {
        if (!VALIDA_ACESSO_URL) {
          throw new Error(
            "URL de validação de acesso não configurada."
          );
        }

        if (!token) {
          throw new Error(
            "Token de acesso não informado."
          );
        }

        const resposta = await fetch(
          `${VALIDA_ACESSO_URL}?token=${encodeURIComponent(token)}`,
          {
            cache: "no-store",
          }
        );

        if (!resposta.ok) {
          throw new Error(
            `Falha ao validar acesso. HTTP ${resposta.status}`
          );
        }

        const dados = await resposta.json();

        if (!ativo) return;

        setEstado(
          dados?.valido === true
            ? "valido"
            : "invalido"
        );
      } catch (erro) {
        console.error(
          "Erro ao validar acesso da Vit:",
          erro
        );

        if (ativo) {
          setEstado("erro");
        }
      }
    }

    validar();

    return () => {
      ativo = false;
    };
  }, [token]);

  if (estado === "verificando") {
    return (
      <main
        className={`${inter.className} flex min-h-screen items-center justify-center bg-branco`}
      >
        <p className="text-sm font-light text-preto/50">
          Verificando acesso…
        </p>
      </main>
    );
  }

  if (estado === "invalido") {
    return (
      <main
        className={`${inter.className} flex min-h-screen items-center justify-center bg-branco px-6`}
      >
        <div className="max-w-sm text-center">
          <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-escuro">
            Vit
          </p>

          <h1 className="mt-3 text-xl font-extrabold leading-tight text-preto">
            Não encontramos esse acesso
          </h1>

          <p className="mt-3 text-sm font-light leading-relaxed text-preto/70">
            O link pode ter expirado ou estar incorreto.
            Cadastre-se novamente para receber um novo acesso.
          </p>

          <a
            href="https://lp.vitora.com.br/vitreuniao/"
            className="mt-6 inline-block rounded-sm bg-azul-escuro px-5 py-3 text-sm font-semibold text-branco transition-colors hover:bg-preto"
          >
            Voltar para o cadastro
          </a>
        </div>
      </main>
    );
  }

  if (estado === "erro") {
    return (
      <main
        className={`${inter.className} flex min-h-screen items-center justify-center bg-branco px-6`}
      >
        <div className="max-w-sm text-center">
          <p className="text-[0.6875rem] font-light uppercase tracking-[0.18em] text-azul-escuro">
            Vit
          </p>

          <h1 className="mt-3 text-xl font-extrabold leading-tight text-preto">
            Não foi possível validar seu acesso
          </h1>

          <p className="mt-3 text-sm font-light leading-relaxed text-preto/70">
            Tivemos um problema ao consultar seu acesso.
            Atualize a página e tente novamente em alguns instantes.
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-sm bg-azul-escuro px-5 py-3 text-sm font-semibold text-branco transition-colors hover:bg-preto"
          >
            Tentar novamente
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className={inter.className}>
      <Chat sessionId={token} />
    </div>
  );
}