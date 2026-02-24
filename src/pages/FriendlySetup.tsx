import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FriendlySetup = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [count, setCount] = useState(3);
  const [names, setNames] = useState<string[]>(Array(3).fill(""));

  const handleCountChange = (n: number) => {
    setCount(n);
    setNames((prev) => {
      const arr = [...prev];
      while (arr.length < n) arr.push("");
      return arr.slice(0, n);
    });
  };

  const handleSubmit = () => {
    if (!title.trim()) return;
    navigate(`/debate/friendly/room?title=${encodeURIComponent(title)}&count=${count}&names=${encodeURIComponent(names.join(","))}`);
  };

  return (
    <div className="container max-w-xl pt-24 pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-1 font-display text-2xl font-bold text-foreground">Friendly Mode Setup</h1>
        <p className="mb-8 text-sm text-muted-foreground">Configure your collaborative discussion.</p>

        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-foreground">Debate Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Ethics of AI in Healthcare" className="bg-muted/50 border-border/50" />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-foreground">Context / Background</label>
            <Textarea value={context} onChange={(e) => setContext(e.target.value)} placeholder="Provide background context..." rows={3} className="bg-muted/50 border-border/50" />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-foreground">Participants ({count})</label>
            <div className="flex gap-2 mb-3">
              {[2, 3, 4, 5, 6, 7, 8].map((n) => (
                <button
                  key={n}
                  onClick={() => handleCountChange(n)}
                  className={`h-8 w-8 rounded-md text-xs font-medium transition-all ${n === count ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground hover:bg-muted"}`}
                >
                  {n}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {names.map((name, i) => (
                <Input
                  key={i}
                  value={name}
                  onChange={(e) => {
                    const updated = [...names];
                    updated[i] = e.target.value;
                    setNames(updated);
                  }}
                  placeholder={`Participant ${i + 1}`}
                  className="bg-muted/50 border-border/50"
                />
              ))}
            </div>
          </div>

          <Button variant="glow" className="w-full" onClick={handleSubmit}>Begin Discussion</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default FriendlySetup;
