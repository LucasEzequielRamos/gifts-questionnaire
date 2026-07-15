import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const TOTAL_QUESTIONS = 36;

interface AssessmentContextType {
  name: string;
  setName: (name: string) => void;

  answers: number[];
  setAnswers: React.Dispatch<React.SetStateAction<number[]>>;

  resetAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("assessment");

    if (!saved) return "";

    try {
      return JSON.parse(saved).name ?? "";
    } catch {
      return "";
    }
  });

  const [answers, setAnswers] = useState<number[]>(() => {
    const saved = localStorage.getItem("assessment");

    if (!saved) return Array(TOTAL_QUESTIONS).fill(0);

    try {
      return JSON.parse(saved).answers ?? Array(TOTAL_QUESTIONS).fill(0);
    } catch {
      return Array(TOTAL_QUESTIONS).fill(0);
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "assessment",
      JSON.stringify({
        name,
        answers,
      }),
    );
  }, [name, answers]);

  function resetAssessment() {
    localStorage.removeItem("assessment");
    setName("");
    setAnswers(Array(TOTAL_QUESTIONS).fill(0));
  }

  return (
    <AssessmentContext.Provider
      value={{
        name,
        setName,
        answers,
        setAnswers,
        resetAssessment,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAssessment() {
  const context = useContext(AssessmentContext);

  if (!context) {
    throw new Error(
      "useAssessment debe utilizarse dentro de AssessmentProvider",
    );
  }

  return context;
}
