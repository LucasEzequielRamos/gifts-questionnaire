import AppLayout from "../../layouts/AppLayout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="flex flex-1 flex-col justify-center gap-8">
        <h1 className="text-3xl font-bold text-center">Antes de comenzar...</h1>

        <Card>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Este test no determina definitivamente tus dones espirituales.
            </p>

            <p>
              Es una herramienta de reflexión basada en principios bíblicos.
            </p>

            <p>
              Los resultados deben ser acompañados por oración, servicio y
              liderazgo pastoral.
            </p>
          </div>
        </Card>

        <Button onClick={() => navigate("/name")}>Entiendo</Button>
      </div>
    </AppLayout>
  );
}
