import { ChatMessage } from "@/types/chat";
import AssistantResponse from "./AssistantResponse";
import { Loader2 } from "lucide-react";

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  if (message.isLoading) {
    return (
      <div className="flex justify-start">
        <div className="flex items-center gap-2 rounded-2xl bg-assistant-bubble px-4 py-3 text-assistant-bubble-foreground shadow-sm">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm">Analiziram vaše vprašanje...</span>
        </div>
      </div>
    );
  }

  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl rounded-br-md bg-user-bubble px-4 py-3 text-sm leading-relaxed text-user-bubble-foreground shadow-sm">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="w-full max-w-full">
        {message.data ? (
          <AssistantResponse data={message.data} />
        ) : (
          <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-assistant-bubble px-4 py-3 text-sm leading-relaxed text-assistant-bubble-foreground shadow-sm">
            {message.content}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
