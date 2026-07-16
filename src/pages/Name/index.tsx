import AppLayout from "../../layouts/AppLayout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import { useAssessment } from "../../context/AssessmentContext";
import { useNavigate } from "react-router-dom";

export default function Name() {
  const { name, setName } = useAssessment();

  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="flex flex-1 flex-col justify-center gap-8">
        <h1 className="text-3xl font-bold text-center">¿Cómo te llamás?</h1>

        <Card>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Tu nombre (opcional)"
          />
        </Card>

        <Button onClick={() => navigate("/assessment")}>Continuar</Button>
      </div>
    </AppLayout>
  );
}
