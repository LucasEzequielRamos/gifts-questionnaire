import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    gift: string;
    value: number;
  }[];
}

export default function RadarSection({ data }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Distribución de dones</h2>

      <div className="h-85">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid />

            <PolarAngleAxis dataKey="gift" />

            <PolarRadiusAxis domain={[0, 100]} />

            <Radar
              dataKey="value"
              fill="#2563eb"
              stroke="#2563eb"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
