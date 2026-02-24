import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const personalities = [
  "Socrates", "Marcus Aurelius", "Noam Chomsky", "Hannah Arendt",
  "Carl Sagan", "Simone de Beauvoir", "Albert Einstein", "Maya Angelou",
];

const SimulationSetup = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [personality, setPersonality] = useState("");
  const [style, setStyle] = useState("open");

  const handleStart = () => {
    if (!topic.trim() || !personality) return;
    navigate(`/debate/simulation/room?topic=${encodeURIComponent(topic)}&personality=${encodeURIComponent(personality)}&style=${style}`);
  };

  return (
    <div className="container max-w-xl pt-24 pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-1 font-display text-2xl font-bold text-foreground">Famous Personalities</h1>
        <p className="mb-8 text-sm text-muted-foreground">Practice debating historical and modern thinkers.</p>

        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-foreground">Debate Topic</label>
            <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. The meaning of justice" className="bg-muted/50 border-border/50" />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-foreground">Famous Personality</label>
            <Select value={personality} onValueChange={setPersonality}>
              <SelectTrigger className="bg-muted/50 border-border/50">
                <SelectValue placeholder="Select a thinker..." />
              </SelectTrigger>
              <SelectContent>
                {personalities.map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-foreground">Discussion Style</label>
            <div className="flex gap-3">
              {[{ value: "open", label: "Open Exchange" }, { value: "structured", label: "Turn-Based" }].map((s) => (
                <button
                  key={s.value}
                  onClick={() => setStyle(s.value)}
                  className={`flex-1 rounded-lg border p-3 text-xs font-medium transition-all ${style === s.value ? "border-glow/50 bg-primary/10 text-foreground" : "border-border/30 bg-muted/30 text-muted-foreground hover:bg-muted/50"}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <Button variant="glow" className="w-full" onClick={handleStart}>Start Simulation</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SimulationSetup;
