import "./globals.css";

export const metadata = {
  title: "Vit — sua reunião vira ata | Vitora",
  description:
    "Envie o áudio de uma reunião e receba a ata pronta, com participantes, assuntos e encaminhamentos. Uma amostra do Vitora no 9º Congresso Nacional do CONFIES.",
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: "#161614",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/fonts/NeueGravica-ExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NeueGravica-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
