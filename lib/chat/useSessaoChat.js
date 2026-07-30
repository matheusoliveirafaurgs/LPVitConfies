"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const RECEBE_URL = process.env.NEXT_PUBLIC_VIT_RECEBE_URL;
const CONSULTA_URL = process.env.NEXT_PUBLIC_VIT_CONSULTA_URL;
const INTERVALO_POLLING_MS = 2500;
const MAX_TENTATIVAS_POLLING = 120;

export function useSessaoChat(sessionId) {
  const [mensagens, setMensagens] = useState([]);
  const [enviando, setEnviando] = useState(false);
  const pollRef = useRef(null);
  const tentativasRef = useRef(0);

  const pararPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  const consultarStatus = useCallback(async () => {
    tentativasRef.current += 1;
    if (tentativasRef.current > MAX_TENTATIVAS_POLLING) {
      pararPolling();
      setEnviando(false);
      setMensagens((atual) => [
        ...atual,
        {
          autor: "agente",
          tipo: "erro",
          conteudo: "Demorou demais pra processar. Tenta de novo em instantes.",
        },
      ]);
      return;
    }

    try {
      const resposta = await fetch(
        `${CONSULTA_URL}?session_id=${encodeURIComponent(sessionId)}`,
        { cache: "no-store" }
      );
      if (!resposta.ok) return;
      const dados = await resposta.json();

      if (dados.estado === "concluido") {
        pararPolling();
        setEnviando(false);
        setMensagens((atual) => [
          ...atual,
          {
            autor: "agente",
            tipo: "resultado",
            conteudo: dados.resultado,
            lacunas: dados.lacunas,
          },
        ]);
      } else if (dados.estado === "aguardando_resposta") {
        pararPolling();
        setEnviando(false);
        const perguntas = (dados.lacunas || [])
          .map((l) => l.pergunta)
          .join(" ");
        setMensagens((atual) => [
          ...atual,
          {
            autor: "agente",
            tipo: "pergunta",
            conteudo: perguntas,
          },
        ]);
      } else if (dados.estado === "erro") {
        pararPolling();
        setEnviando(false);
        setMensagens((atual) => [
          ...atual,
          {
            autor: "agente",
            tipo: "erro",
            conteudo: dados.erro || "Não consegui processar essa reunião.",
          },
        ]);
      }
    } catch {
      // falha pontual de rede: deixa o proximo ciclo do intervalo tentar de novo
    }
  }, [sessionId, pararPolling]);

  const iniciarPolling = useCallback(() => {
    pararPolling();
    tentativasRef.current = 0;
    pollRef.current = setInterval(consultarStatus, INTERVALO_POLLING_MS);
  }, [consultarStatus, pararPolling]);

  useEffect(() => pararPolling, [pararPolling]);

  const enviarTexto = useCallback(
    async (texto) => {
      setMensagens((atual) => [
        ...atual,
        { autor: "usuario", tipo: "texto", conteudo: texto },
      ]);
      setEnviando(true);

      await fetch(RECEBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          tipo: "texto",
          conteudo: texto,
        }),
      });

      iniciarPolling();
    },
    [sessionId, iniciarPolling]
  );

  const enviarAudio = useCallback(
    async (blob) => {
      const urlLocal = URL.createObjectURL(blob);
      setMensagens((atual) => [
        ...atual,
        { autor: "usuario", tipo: "audio", conteudo: urlLocal },
      ]);
      setEnviando(true);

      const base64 = await blobParaBase64(blob);

      await fetch(RECEBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          tipo: "audio",
          conteudo: base64,
          mimeType: blob.type,
        }),
      });

      iniciarPolling();
    },
    [sessionId, iniciarPolling]
  );

  return { mensagens, enviando, enviarTexto, enviarAudio };
}

function blobParaBase64(blob) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onloadend = () => resolve(String(leitor.result).split(",")[1]);
    leitor.onerror = reject;
    leitor.readAsDataURL(blob);
  });
}