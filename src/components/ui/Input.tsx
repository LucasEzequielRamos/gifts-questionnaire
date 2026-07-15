import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn"; // o "@/lib/cn" si ya configuraste el alias

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "w-full",
        "h-12",
        "rounded-xl",
        "border",
        "border-slate-300",
        "bg-white",
        "px-4",
        "text-slate-800",
        "focus:border-blue-600",
        "focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
