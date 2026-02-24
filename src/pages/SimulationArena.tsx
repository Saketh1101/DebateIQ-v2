import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot } from "lucide-react";
import DebateBubble from "@/components/DebateBubble";

interface Message {
  author: string;
  content: string;
  isUser: boolean;
}

const aiResponses = [
  "That's an interesting perspective. However, I would argue that the foundation of this idea rests on assumptions that deserve closer examination. Let me offer a different lens through which to view this question.",
  "I appreciate your reasoning. In my view, the complexity of this matter requires us to consider not just the immediate implications, but the deeper philosophical underpinnings that shape our understanding.",
  "Your argument has merit, yet I believe we must also weigh the historical context that has shaped these ideas. The interplay between theory and practice reveals nuances that purely abstract reasoning may overlook.",
];

const SimulationArena = () => {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic") || "Open Discussion";
  const personality = searchParams.get("personality") || "Socrates";

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    const userMsg: Message = { author: "You", content: input.trim(), isUser: true };
    const aiMsg: Message = { author: personality, content: aiResponses[messages.length % aiResponses.length], isUser: false };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="container pt-24 pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-6 text-center">
          <h1 className="font-display text-xl font-bold text-foreground">{topic}</h1>
          <p className="text-xs text-muted-foreground">Simulation Mode · Debating with {personality}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* User column */}
          <div className="glass rounded-xl flex flex-col h-[65vh]">
            <div className="border-b border-border/30 p-3">
              <p className="text-sm font-medium text-foreground">You</p>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.filter((m) => m.isUser).map((m, i) => (
                <DebateBubble key={i} author={m.author} content={m.content} isUser />
              ))}
            </div>
            <div className="border-t border-border/30 p-3">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="State your perspective..."
                rows={3}
                className="mb-2 bg-muted/30 border-border/30 text-sm"
              />
              <Button variant="glow" size="sm" className="w-full" onClick={handleSubmit}>Submit</Button>
            </div>
          </div>

          {/* AI column */}
          <div className="glass rounded-xl flex flex-col h-[65vh]">
            <div className="border-b border-border/30 p-3 flex items-center gap-2">
              <Bot className="h-4 w-4 text-glow" />
              <p className="text-sm font-medium text-foreground">{personality}</p>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.filter((m) => !m.isUser).map((m, i) => (
                <DebateBubble key={i} author={m.author} content={m.content} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SimulationArena;
