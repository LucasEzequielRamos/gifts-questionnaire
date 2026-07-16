import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-120 flex-col px-6 py-10">
        {children}
      </div>
      <footer className="mt-12 border-t border-slate-200 py-6 text-center">
        <p className="text-sm text-slate-600">
          Desarrollado por{" "}
          <span className="font-semibold text-slate-900">Lucas Ramos</span>
        </p>

        <a
          href="https://wa.me/5491124849007"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-medium hover:underline"
        >
          Contacto
        </a>
      </footer>
    </main>
  );
}
