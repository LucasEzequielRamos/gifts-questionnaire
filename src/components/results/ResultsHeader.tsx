interface Props {
  name?: string;
}

export default function ResultsHeader({ name }: Props) {
  const date = new Date().toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="space-y-5 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg">
        ✨
      </div>

      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
          Evaluación completada
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Tus dones espirituales
        </h1>
      </div>

      {name && <p className="text-lg text-slate-600">{name}</p>}

      <p className="text-sm text-slate-400">{date}</p>

      <div className="mx-auto h-px w-24 bg-slate-200" />
    </header>
  );
}
