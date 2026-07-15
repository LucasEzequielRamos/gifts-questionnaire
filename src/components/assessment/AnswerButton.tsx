interface Props {
  text: string;
  selected: boolean;
  onClick: () => void;
}

export default function AnswerButton({ text, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
    w-full
    rounded-2xl
    border-2
    p-4
    text-left
    transition-all
    duration-200
    active:scale-[0.98]

    ${
      selected
        ? "border-blue-600 bg-blue-50 shadow-md"
        : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
    }
  `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
        h-5
        w-5
        rounded-full
        border-2
        ${selected ? "border-blue-600 bg-blue-600" : "border-slate-400"}
      `}
        />

        <span>{text}</span>
      </div>
    </button>
  );
}
