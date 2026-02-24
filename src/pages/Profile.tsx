import { motion } from "framer-motion";
import { User, Brain, TrendingUp } from "lucide-react";
import GrowthChart from "@/components/GrowthChart";

const growthData = [
  { dimension: "Logical Consistency", score: 7.5 },
  { dimension: "Evidence Usage", score: 6.8 },
  { dimension: "Rebuttal Depth", score: 8.2 },
  { dimension: "Clarity & Structure", score: 7.0 },
  { dimension: "Constructiveness", score: 8.5 },
];

const insights = [
  "Your rebuttal engagement improved by 12% over your last 5 debates.",
  "Evidence usage has been steadily increasing — great progress.",
  "Consider deepening your opening perspectives with more context.",
];

const Profile = () => (
  <div className="container max-w-3xl pt-24 pb-12">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border/50 bg-muted/50">
          <User className="h-7 w-7 text-muted-foreground" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Your Profile</h1>
          <p className="text-sm text-muted-foreground">Intellectual growth tracker</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        {[{ label: "Total Debates", value: "24" }, { label: "Friendly", value: "10" }, { label: "Online", value: "6" }].map((s) => (
          <div key={s.label} className="glass rounded-xl p-4 text-center">
            <p className="font-display text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="glass glow-border rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="h-4 w-4 text-glow" />
          <h2 className="font-display text-sm font-semibold text-foreground">Growth Dimensions</h2>
        </div>
        <GrowthChart data={growthData} />
      </div>

      <div className="glass rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-glow" />
          <h2 className="font-display text-sm font-semibold text-foreground">Personal Insights</h2>
        </div>
        <div className="space-y-3">
          {insights.map((ins, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg bg-muted/30 p-3">
              <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-glow shrink-0" />
              <p className="text-sm text-muted-foreground">{ins}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default Profile;
