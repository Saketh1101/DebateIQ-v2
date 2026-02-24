import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Users, Sparkles, ArrowRight } from "lucide-react";

const features = [
  { icon: Brain, title: "Structured Thinking", desc: "Guided rounds that sharpen your reasoning methodology" },
  { icon: Users, title: "Collaborative Growth", desc: "No winners or losers — only deeper understanding" },
  { icon: Sparkles, title: "AI-Powered Insights", desc: "Neutral analysis that reveals logical patterns and growth areas" },
];

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(268 80% 55% / 0.4), transparent 70%)", filter: "blur(80px)" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
          <Sparkles className="h-3 w-3 text-glow" />
          A digital gym for the mind
        </div>

        <h1 className="mb-2 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="silver-gradient">Debate</span>
          <span className="glow-text">IQ</span>
        </h1>

        <p className="mb-4 font-display text-lg text-muted-foreground sm:text-xl">
          Structured Thinking. Sharper Minds.
        </p>

        <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-muted-foreground/80">
          Engage in thoughtful discourse across three distinct modes. No timers, no pressure — just intellectual growth through calm, structured reasoning.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link to="/modes">
            <Button variant="glow" size="lg" className="gap-2">
              Start Debating <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="glass" size="lg">
              View Dashboard
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-24 grid max-w-4xl gap-6 sm:grid-cols-3"
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
            className="glass glow-border rounded-xl p-6 text-center transition-all duration-300 hover:bg-card/80"
          >
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
              <f.icon className="h-5 w-5 text-glow" />
            </div>
            <h3 className="mb-2 font-display text-sm font-semibold text-foreground">{f.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Index;
