import { useState, useCallback } from "react";
import { ChatMessage, AssistantResponseData } from "@/types/chat";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatInput from "@/components/chat/ChatInput";
import { Scale } from "lucide-react";
import { toast } from "sonner";
import { MOCK_RESPONSE, MOCK_EMPTY_RESPONSE } from "@/data/mockData";
import registrskaData from "@/data/registrska_tablica.json";

const Index = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = useCallback(async (question: string) => {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
    };

    const loadingMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      isLoading: true,
    };

    setMessages((prev) => [...prev, userMsg, loadingMsg]);
    setIsLoading(true);

    try {
      let data: AssistantResponseData;

      const q = question.toLowerCase().trim();
      if (q === "mock") {
        await new Promise((r) => setTimeout(r, 1200));
        data = MOCK_RESPONSE;
      } else if (q === "mock2") {
        await new Promise((r) => setTimeout(r, 1200));
        data = MOCK_EMPTY_RESPONSE;
      } else if (q.includes("registrsk") && q.includes("osebni podatek")) {
        await new Promise((r) => setTimeout(r, 1200));
        data = registrskaData as AssistantResponseData;
      } else {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question }),
        });
        if (!res.ok) throw new Error("Napaka strežnika");
        data = await res.json();
      }

      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        data,
      };

      setMessages((prev) =>
        prev.filter((m) => m.id !== loadingMsg.id).concat(assistantMsg)
      );
    } catch {
      toast.error("Prišlo je do napake. Poskusite znova.");
      setMessages((prev) => prev.filter((m) => m.id !== loadingMsg.id));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="shrink-0 border-b border-border bg-card px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Scale className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold leading-tight text-foreground">
              IP asistent
            </h1>
            <p className="text-xs text-muted-foreground">
              Zastavite vprašanja glede varstva osebnih podatkov.
            </p>
          </div>
        </div>
      </header>

      {/* Chat */}
      <ChatContainer messages={messages} />

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
};

export default Index;
