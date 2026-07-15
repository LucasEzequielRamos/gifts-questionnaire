import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import type { Gift } from "../../types/gift";

interface Props {
  data: {
    gift: string;
    value: number;
  }[];
  gifts: Gift[];
}

interface TickProps {
  x?: string | number;
  y?: string | number;
  cx?: string | number;
  payload?: { value: string };
}

function abbreviate(name: string) {
  if (name.length <= 8) return name;
  return `${name.slice(0, 7)}.`;
}

export default function RadarSection({ data, gifts }: Props) {
  function renderTick(props: TickProps) {
    const { payload } = props;

    if (!payload) return null;

    const x = Number(props.x ?? 0);
    const y = Number(props.y ?? 0);
    const cx = Number(props.cx ?? 0);

    const gift = gifts.find(g => g.id === payload.value);
    const label = gift ? abbreviate(gift.name) : payload.value;

    let textAnchor: "start" | "middle" | "end" = "middle";
    if (x > cx + 5) textAnchor = "start";
    else if (x < cx - 5) textAnchor = "end";

    return (
      <text x={x} y={y} textAnchor={textAnchor} fontSize={10} fill="#475569">
        {label}
      </text>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Distribución de dones</h2>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={data}
            outerRadius="65%"
            margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
          >
            <PolarGrid />

            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <PolarAngleAxis dataKey="gift" tick={renderTick as any} />

            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />

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
