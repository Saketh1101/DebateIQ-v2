import { motion } from "framer-motion";
import { Award, MessageSquare, Sparkles } from "lucide-react";

const contributors = [
  { name: "Eleanor R.", debates: 42, constructiveness: 9.1, badge: "Most Insightful" },
  { name: "Marcus T.", debates: 38, constructiveness: 8.7, badge: "Most Active" },
  { name: "Aisha K.", debates: 35, constructiveness: 8.9, badge: "Thoughtful Contributor" },
  { name: "David L.", debates: 31, constructiveness: 8.4, badge: "" },
  { name: "Sofia M.", debates: 28, constructiveness: 8.6, badge: "" },
  { name: "James W.", debates: 25, constructiveness: 7.9, badge: "" },
];

const Leaderboard = () => (
  <div className="container max-w-3xl pt-24 pb-12">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="mb-1 font-display text-3xl font-bold text-foreground">Community</h1>
      <p className="mb-8 text-sm text-muted-foreground">Celebrating engagement, not dominance. Growth over glory.</p>

      <div className="space-y-3">
        {contributors.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass flex items-center justify-between rounded-lg p-4 transition-all duration-200 hover:bg-card/80"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50 font-display text-sm font-bold text-muted-foreground">{i + 1}</span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{c.name}</p>
                  {c.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-glow">
                      <Sparkles className="h-2.5 w-2.5" /> {c.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-3">
                  <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> {c.debates} debates</span>
                  <span className="flex items-center gap-1"><Award className="h-3 w-3" /> {c.constructiveness} constructiveness</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Leaderboard;
