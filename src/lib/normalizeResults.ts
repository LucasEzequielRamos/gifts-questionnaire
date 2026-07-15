import type { GiftScore } from "./calculateResults";
import { gifts } from "../data/gifts";

export interface RadarGift {
  gift: string;
  value: number;
}

export function normalizeResults(results: GiftScore[]): RadarGift[] {
  return results.map((result) => {
    const gift = gifts.find((g) => g.id === result.gift);
    const maxScore = gift?.maxScore ?? 15;

    return {
      gift: result.gift,
      value: Math.round((result.score / maxScore) * 100),
    };
  });
}