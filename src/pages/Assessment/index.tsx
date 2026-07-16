import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import questions from "../../data/questions.json";

import AppLayout from "../../layouts/AppLayout";

import ProgressBar from "../../components/ui/ProgressBar";
import Button from "../../components/ui/Button";

import AnswerButton from "../../components/assessment/AnswerButton";

import { useAssessment } from "../../context/AssessmentContext";

const options = [
  "Nada acertado",
  "Poco acertado",
  "Moderadamente acertado",
  "Bastante acertado",
  "Totalmente acertado",
];

export default function Assessment() {
  const navigate = useNavigate();

  const { answers, setAnswers } = useAssessment();

  const [current, setCurrent] = useState(0);

  const question = questions[current];

  function selectAnswer(value: number) {
    const copy = [...answers];
    copy[current] = value;
    setAnswers(copy);

    setTimeout(() => {
      if (current === questions.length - 1) {
        navigate("/processing");
      } else {
        setCurrent(c => c + 1);
      }
    }, 250);
  }

  function back() {
    if (current === 0) return;

    setCurrent(c => c - 1);
  }

  return (
    <AppLayout>
      <div className="flex flex-1 flex-col gap-8">
        <ProgressBar value={((current + 1) / questions.length) * 100} />

        <h2 className="text-center text-sm text-slate-500">
          Pregunta {current + 1} de {questions.length}
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            <h1 className="mb-8 text-2xl font-semibold leading-relaxed">
              {question.text}
            </h1>

            <div className="space-y-3">
              {options.map((option, index) => (
                <AnswerButton
                  key={option}
                  text={option}
                  selected={answers[current] === index + 1}
                  onClick={() => selectAnswer(index + 1)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-auto">
          <Button
            className="bg-slate-300 text-slate-800 hover:bg-slate-400"
            onClick={back}
            disabled={current === 0}
          >
            Atrás
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
