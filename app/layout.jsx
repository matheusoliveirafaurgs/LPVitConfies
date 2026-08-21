import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Vit — sua reuniao vira ata | Vitora",
  description:
    "Envie o audio de uma reuniao e receba a ata pronta, com participantes, assuntos e encaminhamentos. Uma amostra do Vitora no 9o Congresso Nacional do CONFIES.",

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

export const viewport = {
  themeColor: "#161614",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
