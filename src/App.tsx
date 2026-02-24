import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Modes from "./pages/Modes";
import FriendlySetup from "./pages/FriendlySetup";
import FriendlyArena from "./pages/FriendlyArena";
import SimulationSetup from "./pages/SimulationSetup";
import SimulationArena from "./pages/SimulationArena";
import OnlineMode from "./pages/OnlineMode";
import OnlineArena from "./pages/OnlineArena";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CursorGlow />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modes" element={<Modes />} />
          <Route path="/debate/friendly/setup" element={<FriendlySetup />} />
          <Route path="/debate/friendly/room" element={<FriendlyArena />} />
          <Route path="/debate/simulation/setup" element={<SimulationSetup />} />
          <Route path="/debate/simulation/room" element={<SimulationArena />} />
          <Route path="/debate/online" element={<OnlineMode />} />
          <Route path="/debate/online/room" element={<OnlineArena />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
