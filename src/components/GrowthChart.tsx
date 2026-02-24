import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

interface GrowthChartProps {
  data: { dimension: string; score: number }[];
}

const GrowthChart = ({ data }: GrowthChartProps) => (
  <ResponsiveContainer width="100%" height={300}>
    <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
      <PolarGrid stroke="hsl(268 30% 25%)" />
      <PolarAngleAxis dataKey="dimension" tick={{ fill: "hsl(220 10% 60%)", fontSize: 11 }} />
      <Radar
        name="Growth"
        dataKey="score"
        stroke="hsl(268 80% 55%)"
        fill="hsl(268 80% 55%)"
        fillOpacity={0.2}
      />
    </RadarChart>
  </ResponsiveContainer>
);

export default GrowthChart;
