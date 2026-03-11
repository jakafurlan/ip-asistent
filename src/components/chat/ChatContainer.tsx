import { useEffect, useRef } from "react";
import { ChatMessage } from "@/types/chat";
import MessageBubble from "./MessageBubble";
import { Scale } from "lucide-react";

interface ChatContainerProps {
  messages: ChatMessage[];
}

const ChatContainer = ({ messages }: ChatContainerProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin bg-chat-bg">
      <div className="mx-auto max-w-6xl space-y-6 p-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              IP asistent
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Zastavite vprašanja glede varstva osebnih podatkov.
            </p>
          </div>
        )}
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default ChatContainer;
