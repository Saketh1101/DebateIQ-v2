import { motion } from "framer-motion";

interface DebateBubbleProps {
  author: string;
  content: string;
  round?: string;
  isUser?: boolean;
}

const DebateBubble = ({ author, content, round, isUser = false }: DebateBubbleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className={`glass rounded-lg p-4 ${isUser ? "border-glow/20" : ""}`}
  >
    <div className="mb-2 flex items-center justify-between">
      <span className="text-sm font-medium text-foreground">{author}</span>
      {round && <span className="text-xs text-muted-foreground">{round}</span>}
    </div>
    <p className="text-sm leading-relaxed text-foreground/80">{content}</p>
  </motion.div>
);

export default DebateBubble;
