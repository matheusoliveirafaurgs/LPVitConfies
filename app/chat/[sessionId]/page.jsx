import Chat from "../../../components/chat/Chat";

export default function PaginaChat({ params }) {
  const { sessionId } = params;

  return (
    <main className="min-h-screen bg-preto">
      <Chat sessionId={sessionId} />
    </main>
  );
}