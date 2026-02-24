import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import DebateBubble from "@/components/DebateBubble";

const rounds = ["Opening Perspective", "Rebuttal", "Counter Perspective", "Closing Reflection"];

const OnlineArena = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [currentTurn, setCurrentTurn] = useState<"A" | "B">("A");
  const [messagesA, setMessagesA] = useState<{ content: string; round: string }[]>([]);
  const [messagesB, setMessagesB] = useState<{ content: string; round: string }[]>([]);
  const [input, setInput] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = () => {
    if (!input.trim()) return;
    const entry = { content: input.trim(), round: `Round ${currentRound + 1}: ${rounds[currentRound]}` };

    if (currentTurn === "A") {
      setMessagesA((prev) => [...prev, entry]);
      setCurrentTurn("B");
      // Simulate B after a beat
      setTimeout(() => {
        setMessagesB((prev) => [...prev, {
          content: "I understand your point and would like to offer a complementary perspective. The complexity here lies in balancing multiple stakeholder interests while maintaining intellectual integrity.",
          round: `Round ${currentRound + 1}: ${rounds[currentRound]}`,
        }]);
        if (currentRound < rounds.length - 1) {
          setCurrentRound((r) => r + 1);
        }
        setCurrentTurn("A");
      }, 800);
    }
    setInput("");
  };

  return (
    <div className="container pt-24 pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-center flex-1">
            <h1 className="font-display text-lg font-bold text-foreground">Universal Basic Income: A Necessity?</h1>
            <p className="text-xs text-muted-foreground">Round {currentRound + 1}: {rounds[currentRound]} · {currentTurn === "A" ? "Your" : "Opponent's"} Turn</p>
          </div>
          <Button variant="glass" size="sm" className="gap-2" onClick={() => setShowSummary(!showSummary)}>
            <Sparkles className="h-3 w-3 text-glow" /> Summarise So Far
          </Button>
        </div>

        {/* Round indicators */}
        <div className="mb-4 flex justify-center gap-2">
          {rounds.map((r, i) => (
            <div key={r} className={`h-1.5 flex-1 max-w-16 rounded-full transition-all ${i <= currentRound ? "bg-glow" : "bg-muted"}`} />
          ))}
        </div>

        {showSummary && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="glass glow-border mb-4 rounded-xl p-5">
            <h3 className="mb-3 font-display text-sm font-semibold text-glow">Debate Snapshot Report</h3>
            <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <div><strong className="text-foreground">Neutral Summary:</strong> Both participants are exploring economic security from complementary angles — one emphasizing individual autonomy, the other systemic sustainability.</div>
              <div><strong className="text-foreground">Logical Observations:</strong> Arguments remain well-structured. Consider strengthening evidence-based claims with specific data points.</div>
              <div><strong className="text-foreground">Growth Suggestion:</strong> Try directly addressing your counterpart's strongest point before presenting alternatives.</div>
            </div>
          </motion.div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass rounded-xl flex flex-col h-[55vh]">
            <div className="border-b border-border/30 p-3">
              <p className="text-sm font-medium text-foreground">You (Position A)</p>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messagesA.map((m, i) => (
                <DebateBubble key={i} author="You" content={m.content} round={m.round} isUser />
              ))}
            </div>
            {currentTurn === "A" && (
              <div className="border-t border-border/30 p-3">
                <Textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Express your perspective..." rows={3} className="mb-2 bg-muted/30 border-border/30 text-sm" />
                <Button variant="glow" size="sm" className="w-full" onClick={handleSubmit}>Submit Turn</Button>
              </div>
            )}
          </div>

          <div className="glass rounded-xl flex flex-col h-[55vh]">
            <div className="border-b border-border/30 p-3">
              <p className="text-sm font-medium text-foreground">Opponent (Position B)</p>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messagesB.map((m, i) => (
                <DebateBubble key={i} author="Opponent" content={m.content} round={m.round} />
              ))}
            </div>
            {currentTurn === "B" && (
              <div className="border-t border-border/30 p-3 flex items-center justify-center py-6">
                <p className="text-xs text-muted-foreground animate-glow-pulse">Opponent is composing...</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnlineArena;
