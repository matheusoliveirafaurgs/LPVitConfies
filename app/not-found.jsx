import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function NotFound() {
  return (
    <main
      className={`${montserrat.className} flex min-h-screen items-center justify-center bg-white px-6 text-[#161614]`}
    >
      <div className="w-full max-w-[520px] text-center">
        <Image
          src="/favicon-preto.png"
          alt="Vitora"
          width={64}
          height={64}
          priority
          className="mx-auto h-auto w-[56px]"
        />

        <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1B456A]">
          Erro 404
        </p>

        <h1 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-[34px]">
          Página não encontrada
        </h1>

        <p className="mx-auto mt-4 max-w-[420px] text-[14px] leading-[1.6] text-[#5D5D5B]">
          O endereço acessado não existe ou pode ter sido alterado.
        </p>

        <Link
          href="/vitreuniao"
          className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#161614] px-6 text-[13px] font-semibold text-white transition-opacity hover:opacity-85"
        >
          Conhecer a Vit
        </Link>
      </div>
    </main>
  );
}