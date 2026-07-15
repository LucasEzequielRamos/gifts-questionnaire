import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  children,

  loading,

  className,

  ...props
}: Props) {
  return (
    <button
      className={cn(
        "w-full",
        "h-14",
        "rounded-2xl",
        "bg-blue-600",
        "font-semibold",
        "text-white",
        "shadow-lg",
        "shadow-blue-500/20",
        "transition-all",
        "duration-200",
        "hover:-translate-y-0.5",
        "hover:bg-blue-700",
        "active:translate-y-0",
        "active:scale-[0.98]",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
}
