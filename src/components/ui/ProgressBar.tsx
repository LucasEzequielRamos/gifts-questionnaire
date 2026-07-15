interface Props {
  value: number;
}

export default function ProgressBar({ value }: Props) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
      <div
        style={{
          width: `${value}%`,
        }}
        className="
            h-full
            rounded-full
            bg-blue-600
            transition-all
            duration-500
            "
      />
    </div>
  );
}
