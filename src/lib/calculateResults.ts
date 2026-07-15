import questions from "../data/questions.json";
import { gifts } from "../data/gifts";

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
    .sort((a, b) => {
      const giftA = gifts.find((g) => g.id === a.gift);
      const giftB = gifts.find((g) => g.id === b.gift);

      const percentageA = giftA ? a.score / giftA.maxScore : 0;
      const percentageB = giftB ? b.score / giftB.maxScore : 0;

      return percentageB - percentageA;
    });
}