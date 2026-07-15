import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Gift } from "../../types/gift";

interface Props {
  gift: Gift;
  score: number;
  maxScore: number;
}

export default function GiftAccordion({ gift, score, maxScore }: Props) {
  const [open, setOpen] = useState(false);

  const Icon = gift.icon;

  const percentage = Math.round((score / maxScore) * 100);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left transition hover:bg-slate-50"
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${gift.color} text-white`}
          >
            <Icon size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">{gift.name}</h3>

            <p className="text-sm text-slate-500">
              {score}/{maxScore} puntos · {percentage}%
            </p>
          </div>
        </div>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
        >
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <div className="space-y-6 border-t border-slate-200 p-6">
              <section>
                <h4 className="mb-2 font-semibold">¿Qué significa?</h4>

                <p className="text-slate-600">
                  {gift.description || "Próximamente..."}
                </p>
              </section>

              <section>
                <h4 className="mb-2 font-semibold">Fortalezas</h4>

                {gift.strengths.length > 0 ? (
                  <ul className="space-y-2">
                    {gift.strengths.map(item => (
                      <li key={item} className="flex gap-2 text-slate-600">
                        <span className="text-emerald-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400">Próximamente...</p>
                )}
              </section>

              <section>
                <h4 className="mb-2 font-semibold">Riesgos</h4>

                {gift.risks.length > 0 ? (
                  <ul className="space-y-2">
                    {gift.risks.map(item => (
                      <li key={item} className="flex gap-2 text-slate-600">
                        <span className="text-slate-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400">Próximamente...</p>
                )}
              </section>

              <section>
                <h4 className="mb-2 font-semibold">Cómo desarrollarlo</h4>

                {gift.development.length > 0 ? (
                  <ul className="space-y-2">
                    {gift.development.map(item => (
                      <li key={item} className="flex gap-2 text-slate-600">
                        <span className="text-slate-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400">Próximamente...</p>
                )}
              </section>

              <section>
                <h4 className="mb-2 font-semibold">Personajes bíblicos</h4>

                {gift.characters.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {gift.characters.map(name => (
                      <span
                        key={name}
                        className={`rounded-full ${gift.color} bg-opacity-10 px-3 py-1 text-sm text-slate-700`}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400">Próximamente...</p>
                )}
              </section>

              <section>
                <h4 className="mb-2 font-semibold">Versículos</h4>

                {gift.verses.length > 0 ? (
                  <ul className="space-y-3">
                    {gift.verses.map(verse => (
                      <li key={verse.reference}>
                        <p className="text-sm font-medium text-slate-700">
                          {verse.reference}
                        </p>
                        <p className="text-sm italic text-slate-500">
                          {verse.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400">Próximamente...</p>
                )}
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
