interface Props {
  position: number;
  title: string;
  score: number;
  maxScore: number;
}

export default function TopGiftCard({
  position,
  title,
  score,
  maxScore,
}: Props) {
  const percent = (score / maxScore) * 100;

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          {position}
        </div>

        <span className="text-3xl font-bold text-slate-900">{score}</span>
      </div>

      <h2 className="mb-6 text-2xl font-bold">{title}</h2>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </article>
  );
}
