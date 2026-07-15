import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout";
import Spinner from "../../components/ui/Spinner";

export default function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results");
    }, 1200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AppLayout>
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <Spinner />

        <h2 className="text-xl font-semibold">Analizando tus respuestas...</h2>

        <p className="text-slate-500">Esto tomará solo un momento.</p>
      </div>
    </AppLayout>
  );
}
