import { motion } from "framer-motion";
import { Users, Bot, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const modes = [
  {
    title: "Friendly Mode",
    subtitle: "Collaborative Arena",
    desc: "Multi-participant collaborative discussion. No sides, no scoring — just structured thinking together.",
    icon: Users,
    path: "/debate/friendly/setup",
    color: "from-emerald-500/20 to-primary/20",
  },
  {
    title: "Famous Personalities",
    subtitle: "Simulation Mode",
    desc: "Practice debating historical and modern thinkers. AI responds in personality-consistent tone.",
    icon: Bot,
    path: "/debate/simulation/setup",
    color: "from-amber-500/20 to-primary/20",
  },
  {
    title: "Online Mode",
    subtitle: "Live Intellectual Exchange",
    desc: "Structured real-time debate with guided rounds. Not competitive — designed for mutual growth.",
    icon: Globe,
    path: "/debate/online",
    color: "from-sky-500/20 to-primary/20",
  },
];

const Modes = () => (
  <div className="container pt-24 pb-12">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1 className="mb-1 font-display text-3xl font-bold text-foreground">Choose Your Mode</h1>
      <p className="mb-10 text-sm text-muted-foreground">Each mode is a different kind of intellectual exercise.</p>

      <div className="grid gap-6 lg:grid-cols-3">
        {modes.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass glow-border group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:bg-card/80"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            <div className="relative z-10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/20">
                <m.icon className="h-5 w-5 text-glow" />
              </div>
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{m.title}</h3>
              <p className="mb-3 text-xs font-medium text-glow">{m.subtitle}</p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              <Link to={m.path}>
                <Button variant="glow" size="sm" className="gap-2">
                  Enter <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Modes;
