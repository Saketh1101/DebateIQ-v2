import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Modes", path: "/modes" },
  { label: "Leaderboard", path: "/leaderboard" },
  { label: "Profile", path: "/profile" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="glass-strong fixed top-0 left-0 right-0 z-50 border-b border-border/30" style={{ boxShadow: "0 1px 20px hsl(268 65% 27% / 0.15)" }}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-0.5 font-display text-xl font-bold">
          <span className="silver-gradient">Debate</span>
          <span className="glow-text">IQ</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-muted/50">
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
