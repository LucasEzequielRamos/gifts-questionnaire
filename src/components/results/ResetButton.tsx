import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotateCcw } from "lucide-react";
import { useAssessment } from "../../context/AssessmentContext";

export default function ResetButton() {
  const { resetAssessment } = useAssessment();
  const navigate = useNavigate();
  const [confirming, setConfirming] = useState(false);

  function handleClick() {
    if (!confirming) {
      setConfirming(true);
      return;
    }

    resetAssessment();
    navigate("/");
  }

  return (
    <button
      onClick={handleClick}
      onBlur={() => setConfirming(false)}
      className={`flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-4 font-semibold transition active:scale-[0.98] ${
        confirming
          ? "border-red-300 bg-red-50 text-red-600"
          : "border-slate-200 bg-white text-slate-600"
      }`}
    >
      <RotateCcw size={20} />
      {confirming ? "¿Seguro? Tocá de nuevo para borrar" : "Volver a empezar"}
    </button>
  );
}
