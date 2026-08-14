"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const RECEBE_URL = process.env.NEXT_PUBLIC_VIT_RECEBE_URL;
const CONSULTA_URL = process.env.NEXT_PUBLIC_VIT_CONSULTA_URL;

const INTERVALO_POLLING_MS = 2500;

// 480 tentativas × 2,5 segundos = 20 minutos
const MAX_TENTATIVAS_POLLING = 480;

export function useSessaoChat(sessionId) {
  const [mensagens, setMensagens] = useState([]);
  const [enviando, setEnviando] = useState(false);

  const pollRef = useRef(null);
  const tentativasRef = useRef(0);

  // ==================================================
  // PARA POLLING
  // ==================================================

  const pararPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  // ==================================================
  // CONSULTA STATUS
  // ==================================================

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
          conteudo:
            "O processamento está levando mais tempo que o esperado. Tente novamente em alguns instantes.",
        },
      ]);

      return;
    }

    try {
      const resposta = await fetch(
        `${CONSULTA_URL}?session_id=${encodeURIComponent(sessionId)}`,
        {
          cache: "no-store",
        }
      );

      // Falha pontual na consulta:
      // deixa o próximo ciclo tentar novamente.
      if (!resposta.ok) {
        return;
      }

      const dados = await resposta.json();

      // ----------------------------------------------
      // CONCLUÍDO
      // ----------------------------------------------

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

        return;
      }

      // ----------------------------------------------
      // AGUARDANDO RESPOSTA
      // ----------------------------------------------

      if (dados.estado === "aguardando_resposta") {
        pararPolling();
        setEnviando(false);

        const perguntas = (dados.lacunas || [])
          .map((l) => l.pergunta)
          .filter(Boolean)
          .join(" ");

        setMensagens((atual) => [
          ...atual,
          {
            autor: "agente",
            tipo: "pergunta",
            conteudo:
              perguntas ||
              "Preciso de mais algumas informações para concluir a ata.",
          },
        ]);

        return;
      }

      // ----------------------------------------------
      // ERRO
      // ----------------------------------------------

      if (dados.estado === "erro") {
        pararPolling();
        setEnviando(false);

        setMensagens((atual) => [
          ...atual,
          {
            autor: "agente",
            tipo: "erro",
            conteudo:
              dados.erro ||
              "Não consegui processar essa reunião. Tente novamente.",
          },
        ]);

        return;
      }
    } catch {
      // Falha pontual de rede:
      // mantém o polling e tenta novamente no próximo ciclo.
    }
  }, [sessionId, pararPolling]);

  // ==================================================
  // INICIA POLLING
  // ==================================================

  const iniciarPolling = useCallback(() => {
    pararPolling();

    tentativasRef.current = 0;

    pollRef.current = setInterval(
      consultarStatus,
      INTERVALO_POLLING_MS
    );
  }, [consultarStatus, pararPolling]);

  // ==================================================
  // LIMPEZA DO POLLING AO DESMONTAR COMPONENTE
  // ==================================================

  useEffect(() => pararPolling, [pararPolling]);

  // ==================================================
  // ENVIA TEXTO
  // ==================================================

  const enviarTexto = useCallback(
    async (texto) => {
      if (!texto || !String(texto).trim()) {
        return;
      }

      setMensagens((atual) => [
        ...atual,
        {
          autor: "usuario",
          tipo: "texto",
          conteudo: texto,
        },
      ]);

      setEnviando(true);

      try {
        const resposta = await fetch(RECEBE_URL, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            session_id: sessionId,
            tipo: "texto",
            conteudo: texto,
          }),
        });

        if (!resposta.ok) {
          let mensagemErro =
            "Não foi possível enviar a mensagem.";

          try {
            const dadosErro = await resposta.json();

            if (dadosErro?.erro) {
              mensagemErro = dadosErro.erro;
            } else if (dadosErro?.message) {
              mensagemErro = dadosErro.message;
            }
          } catch {
            // resposta não era JSON
          }

          throw new Error(mensagemErro);
        }

        iniciarPolling();
      } catch (erro) {
        setEnviando(false);

        setMensagens((atual) => [
          ...atual,
          {
            autor: "agente",
            tipo: "erro",
            conteudo:
              erro?.message ||
              "Não consegui enviar sua mensagem. Tente novamente.",
          },
        ]);
      }
    },
    [sessionId, iniciarPolling]
  );

  // ==================================================
  // ENVIA ÁUDIO
  // ==================================================

  const enviarAudio = useCallback(
    async (blob) => {
      if (!blob) {
        return;
      }

      const urlLocal = URL.createObjectURL(blob);

      setMensagens((atual) => [
        ...atual,
        {
          autor: "usuario",
          tipo: "audio",
          conteudo: urlLocal,
        },
      ]);

      setEnviando(true);

      try {
        const base64 = await blobParaBase64(blob);

        const resposta = await fetch(RECEBE_URL, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            session_id: sessionId,
            tipo: "audio",
            conteudo: base64,

            // Ex:
            // audio/webm;codecs=opus
            // audio/mpeg
            // audio/mp4
            mimeType: blob.type || null,

            // File possui .name.
            // Blob gravado pelo navegador normalmente não possui.
            filename: blob.name || null,
          }),
        });

        if (!resposta.ok) {
          let mensagemErro =
            "Não foi possível enviar o áudio.";

          try {
            const dadosErro = await resposta.json();

            if (dadosErro?.erro) {
              mensagemErro = dadosErro.erro;
            } else if (dadosErro?.message) {
              mensagemErro = dadosErro.message;
            }
          } catch {
            // resposta não era JSON
          }

          throw new Error(mensagemErro);
        }

        iniciarPolling();
      } catch (erro) {
        setEnviando(false);

        setMensagens((atual) => [
          ...atual,
          {
            autor: "agente",
            tipo: "erro",
            conteudo:
              erro?.message ||
              "Não consegui enviar esse áudio. Tente novamente.",
          },
        ]);
      }
    },
    [sessionId, iniciarPolling]
  );

  // ==================================================
  // RETORNO DO HOOK
  // ==================================================

  return {
    mensagens,
    enviando,
    enviarTexto,
    enviarAudio,
  };
}

// ==================================================
// CONVERTE BLOB / FILE PARA BASE64 PURO
// ==================================================

function blobParaBase64(blob) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();

    leitor.onloadend = () => {
      const resultado = String(leitor.result || "");

      const virgula = resultado.indexOf(",");

      if (virgula === -1) {
        reject(
          new Error(
            "Não foi possível converter o áudio para Base64."
          )
        );

        return;
      }

      const base64 = resultado.slice(virgula + 1);

      if (!base64) {
        reject(
          new Error(
            "O conteúdo convertido do áudio está vazio."
          )
        );

        return;
      }

      resolve(base64);
    };

    leitor.onerror = () => {
      reject(
        new Error(
          "Não foi possível ler o arquivo de áudio."
        )
      );
    };

    leitor.readAsDataURL(blob);
  });
}