import AppRouter from "./router/AppRouter";
import { AssessmentProvider } from "./context/AssessmentContext";

export default function App() {
  return (
    <AssessmentProvider>
      <AppRouter />
    </AssessmentProvider>
  );
}
