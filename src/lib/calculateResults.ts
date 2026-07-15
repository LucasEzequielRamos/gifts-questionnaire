    import questions from "../data/questions.json";

export interface GiftScore {
  gift: string;
  score: number;
}

export function calculateResults(answers: number[]): GiftScore[] {
  const scores: Record<string, number> = {};

  questions.forEach((question, index) => {
    const gift = question.gift;

    if (!scores[gift]) {
      scores[gift] = 0;
    }

    scores[gift] += answers[index];
  });

  return Object.entries(scores)
    .map(([gift, score]) => ({
      gift,
      score,
    }))
    .sort((a, b) => b.score - a.score);
}