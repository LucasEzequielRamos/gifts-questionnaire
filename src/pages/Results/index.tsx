import AppLayout from "../../layouts/AppLayout";

import { useAssessment } from "../../context/AssessmentContext";

import { calculateResults } from "../../lib/calculateResults";

import RadarSection from "../../components/results/RadarSection";

import { normalizeResults } from "../../lib/normalizeResults";

import { gifts } from "../../data/gifts";

import ResultCard from "../../components/results/ResultCard";
import ResultsHeader from "@/components/results/ResultsHeader";
import TopGiftCard from "@/components/results/TopGiftCard";
import GiftAccordion from "@/components/results/GiftAccordion";

export default function Results() {
  const { answers, name } = useAssessment();

  const results = calculateResults(answers);

  const maxScoreByGift: Record<string, number> = {
    apostol: 15,
    profeta: 15,
    evangelista: 15,
    pastor: 15,
    maestro: 15,
    liderazgo: 15,
    exhortacion: 15,
    fe: 15,
    sabiduria: 10,
    conocimiento: 10,
    discernimiento: 10,
    servicio: 10,
    misericordia: 10,
    administracion: 10,
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        <ResultsHeader name={name} />
        <div>
          <h1 className="text-3xl font-bold">
            {name ? `${name}, estos son tus dones` : "Tus dones"}
          </h1>

          <p className="mt-2 text-slate-500">
            Resultado basado en tus respuestas.
          </p>
        </div>

        <div className="rounded-2xl bg-sky-50 p-5">
          <p className="leading-relaxed text-slate-700">
            Este informe refleja las áreas donde tus respuestas muestran una
            mayor afinidad con determinados dones espirituales. Recuerda que
            este resultado es una herramienta de reflexión y debe complementarse
            con oración, servicio y el acompañamiento de líderes espirituales.
          </p>
        </div>

        <div className="space-y-4">
          {results.slice(0, 3).map((gift, index) => {
            const info = gifts.find(g => g.id === gift.gift);

            return (
              <TopGiftCard
                key={gift.gift}
                position={index + 1}
                title={info?.name ?? gift.gift}
                score={gift.score}
                maxScore={maxScoreByGift[gift.gift]}
              />
            );
          })}
        </div>

        <RadarSection data={normalizeResults(results)} />

        <div className="mt-8 space-y-4">
          {results.map(result => {
            const gift = gifts.find(g => g.id === result.gift);

            if (!gift) return null;

            const maxScore = [
              "apostol",
              "profeta",
              "evangelista",
              "pastor",
              "maestro",
              "liderazgo",
              "exhortacion",
              "fe",
            ].includes(gift.id)
              ? 15
              : 10;

            return (
              <GiftAccordion
                key={gift.id}
                gift={gift}
                score={result.score}
                maxScore={maxScore}
              />
            );
          })}
        </div>

        <div className="space-y-4">
          {results.map(gift => {
            const info = gifts.find(g => g.id === gift.gift);

            return (
              <ResultCard
                key={gift.gift}
                title={info?.name ?? gift.gift}
                score={gift.score}
                maxScore={maxScoreByGift[gift.gift]}
              />
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
