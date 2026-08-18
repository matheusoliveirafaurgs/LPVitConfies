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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
