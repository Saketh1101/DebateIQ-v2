import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import DebateBubble from "@/components/DebateBubble";

interface Thought {
  author: string;
  content: string;
}

const FriendlyArena = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "Untitled Discussion";
  const names = (searchParams.get("names") || "").split(",").filter(Boolean);
  const participants = names.length > 0 ? names.map((n) => n || "Anon") : ["Participant 1", "Participant 2", "Participant 3"];

  const [thoughts, setThoughts] = useState<Record<string, Thought[]>>({});
  const [inputs, setInputs] = useState<Record<string, string>>({});

  const addThought = (participant: string) => {
    const text = inputs[participant]?.trim();
    if (!text) return;
    setThoughts((prev) => ({
      ...prev,
      [participant]: [...(prev[participant] || []), { author: participant, content: text }],
    }));
    setInputs((prev) => ({ ...prev, [participant]: "" }));
  };

  return (
    <div className="container pt-24 pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">{title}</h1>
            <p className="text-xs text-muted-foreground">Friendly Mode · Collaborative Discussion</p>
          </div>
          <Button variant="glass" size="sm" className="gap-2">
            <Sparkles className="h-3 w-3 text-glow" /> Generate AI Summary
          </Button>
        </div>

        <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${Math.min(participants.length, 4)}, 1fr)` }}>
          {participants.map((p) => (
            <div key={p} className="glass rounded-xl flex flex-col h-[65vh]">
              <div className="sticky top-0 border-b border-border/30 p-3">
                <p className="text-sm font-medium text-foreground">{p}</p>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {(thoughts[p] || []).map((t, i) => (
                  <DebateBubble key={i} author={t.author} content={t.content} />
                ))}
              </div>
              <div className="border-t border-border/30 p-3">
                <Textarea
                  value={inputs[p] || ""}
                  onChange={(e) => setInputs((prev) => ({ ...prev, [p]: e.target.value }))}
                  placeholder="Share a thought..."
                  rows={2}
                  className="mb-2 bg-muted/30 border-border/30 text-sm"
                />
                <Button variant="glow" size="sm" className="w-full" onClick={() => addThought(p)}>Add Thought</Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FriendlyArena;
