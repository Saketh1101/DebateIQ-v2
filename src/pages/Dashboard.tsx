import { motion } from "framer-motion";
import { Brain, Users, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Debates", value: "24", icon: Brain },
  { label: "Friendly Mode", value: "10", icon: Users },
  { label: "Simulations", value: "8", icon: Brain },
  { label: "Online Debates", value: "6", icon: Globe },
];

const recentDebates = [
  { title: "Ethics of AI Regulation", mode: "Friendly", participants: 4, date: "2 hours ago" },
  { title: "Universal Basic Income", mode: "Simulation", participants: 2, date: "Yesterday" },
  { title: "Climate Policy Tradeoffs", mode: "Online", participants: 2, date: "3 days ago" },
];

const Dashboard = () => (
  <div className="container pt-24 pb-12">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <h1 className="mb-1 font-display text-3xl font-bold text-foreground">Dashboard</h1>
      <p className="mb-8 text-sm text-muted-foreground">Your intellectual journey at a glance.</p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass glow-border rounded-xl p-5">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
              <s.icon className="h-4 w-4 text-glow" />
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground">Recent Debates</h2>
        <Link to="/modes" className="text-xs text-glow hover:underline">Start New →</Link>
      </div>

      <div className="space-y-3">
        {recentDebates.map((d) => (
          <div key={d.title} className="glass flex items-center justify-between rounded-lg p-4 transition-all duration-200 hover:bg-card/80">
            <div>
              <p className="text-sm font-medium text-foreground">{d.title}</p>
              <p className="text-xs text-muted-foreground">{d.mode} · {d.participants} participants</p>
            </div>
            <span className="text-xs text-muted-foreground">{d.date}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 glass glow-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4 text-glow" />
          <h3 className="font-display text-sm font-semibold text-foreground">Growth Insight</h3>
        </div>
        <p className="text-sm text-muted-foreground">Your rebuttal engagement improved by <span className="text-glow font-medium">12%</span> over your last 5 debates. Keep it up!</p>
      </div>
    </motion.div>
  </div>
);

export default Dashboard;
