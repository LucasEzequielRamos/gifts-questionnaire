interface Props {
  title: string;
  score: number;
  maxScore: number;
}

export default function ResultCard({ title, score, maxScore }: Props) {
  const percentage = Math.round((score / maxScore) * 100);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="font-semibold">{title}</h3>

        <span className="text-sm font-bold text-blue-600">
          {score}/{maxScore}{" "}
          <span className="font-normal text-slate-400">({percentage}%)</span>
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
