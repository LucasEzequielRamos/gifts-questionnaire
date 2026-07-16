import { BookOpen, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <div className="flex min-h-full flex-1 flex-col justify-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 shadow-lg">
            <BookOpen size={42} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-slate-800">
            Cuestionario de Dones Espirituales
          </h1>

          <p className="mt-3 text-slate-500">
            Descubrí los dones espirituales que Dios ha desarrollado en tu vida.
          </p>
        </div>

        {/* Información */}
        <Card>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Clock3 className="text-blue-600" />
              <span className="text-sm text-slate-600">
                Duración aproximada: 8 minutos
              </span>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Basado en:</h3>

              <ul className="space-y-2 text-sm text-slate-600">
                <li>📖 Romanos 12</li>
                <li>📖 1 Corintios 12</li>
                <li>📖 Efesios 4</li>
              </ul>
            </div>
          </div>
        </Card>

        <Button onClick={() => navigate("/intro")}>Comenzar evaluación</Button>
      </div>
    </AppLayout>
  );
}
