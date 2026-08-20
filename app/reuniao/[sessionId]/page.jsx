import ReuniaoClient from "./ReuniaoClient";

export const metadata = {
  title: "Vit - Assistente Virtual",

  description:
    "Converse com a Vit, assistente virtual do Vitora para reuniões, funcionalidades e suporte.",

  robots: {
    index: false,
    follow: false,
  },

  icons: {
    icon: [
      {
        url: "/favicon-preto.png?v=3",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-branco.png?v=3",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function PaginaChat({ params }) {
  return <ReuniaoClient sessionId={params.sessionId} />;
}