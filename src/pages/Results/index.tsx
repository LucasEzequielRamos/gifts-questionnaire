import AppLayout from "../../layouts/AppLayout";

import { useAssessment } from "../../context/AssessmentContext";

import { calculateResults } from "../../lib/calculateResults";

import RadarSection from "../../components/results/RadarSection";

import { normalizeResults } from "../../lib/normalizeResults";

import { gifts } from "../../data/gifts";

import ResultCard from "@/components/results/ResultCard";
import ResultsHeader from "@/components/results/ResultsHeader";
import TopGiftCard from "@/components/results/TopGiftCard";
import GiftAccordion from "@/components/results/GiftAccordion";
import DownloadReportButton from "@/components/results/DownloadReportButton";
import ResetButton from "@/components/results/ResetButton";

export default function Results() {
  const { answers, name } = useAssessment();

  const results = calculateResults(answers);

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
          {results.slice(0, 3).map((result, index) => {
            const info = gifts.find(g => g.id === result.gift);

            if (!info) return null;

            return (
              <TopGiftCard
                key={result.gift}
                position={index + 1}
                title={info.name}
                score={result.score}
                maxScore={info.maxScore}
              />
            );
          })}
        </div>

        <RadarSection data={normalizeResults(results)} gifts={gifts} />
        <div className="mt-8 space-y-4">
          {results.map(result => {
            const gift = gifts.find(g => g.id === result.gift);

            if (!gift) return null;

            return (
              <GiftAccordion
                key={gift.id}
                gift={gift}
                score={result.score}
                maxScore={gift.maxScore}
              />
            );
          })}
        </div>

        <div className="space-y-4">
          {results.map(result => {
            const info = gifts.find(g => g.id === result.gift);

            if (!info) return null;

            return (
              <ResultCard
                key={result.gift}
                title={info.name}
                score={result.score}
                maxScore={info.maxScore}
              />
            );
          })}
        </div>

        <DownloadReportButton name={name} results={results} gifts={gifts} />
        <ResetButton />
      </div>
    </AppLayout>
  );
}
