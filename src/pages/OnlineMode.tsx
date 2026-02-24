import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Eye, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const liveDebates = [
  { id: "1", title: "Privacy vs. Security in the Digital Age", participants: ["Alex", "Jordan"], exchanges: 12, status: "Active" },
  { id: "2", title: "Is Space Exploration Worth the Cost?", participants: ["Sam", "Taylor"], exchanges: 8, status: "Active" },
  { id: "3", title: "The Role of Art in Society", participants: ["Morgan", "Casey"], exchanges: 16, status: "Recently Finished" },
];

const OnlineMode = () => {
  const navigate = useNavigate();

  return (
    <div className="container pt-24 pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-1 font-display text-2xl font-bold text-foreground">Online Mode</h1>
        <p className="mb-8 text-sm text-muted-foreground">Live structured debates for mutual intellectual growth.</p>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
              <Globe className="h-4 w-4 text-glow" /> Ongoing Live Debates
            </h2>
            {liveDebates.map((d) => (
              <div key={d.id} className="glass flex items-center justify-between rounded-lg p-4 transition-all duration-200 hover:bg-card/80">
                <div>
                  <p className="text-sm font-medium text-foreground">{d.title}</p>
                  <p className="text-xs text-muted-foreground">{d.participants.join(" vs ")} · {d.exchanges} exchanges</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${d.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-muted text-muted-foreground"}`}>{d.status}</span>
                  <Button variant="glass" size="sm" className="gap-1">
                    <Eye className="h-3 w-3" /> Watch
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="glass glow-border rounded-xl p-6 flex flex-col items-center text-center h-fit">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-6 w-6 text-glow" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Join Live Debate</h3>
            <p className="mb-6 text-xs text-muted-foreground leading-relaxed">Match with another thinker. A topic and position will be randomly assigned.</p>
            <Button variant="glow" className="w-full" onClick={() => navigate("/debate/online/room")}>Find a Match</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnlineMode;
