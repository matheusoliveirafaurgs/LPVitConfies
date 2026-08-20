import ReuniaoClient from "./ReuniaoClient";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaginaChat({ params }) {
  return <ReuniaoClient sessionId={params.sessionId} />;
}