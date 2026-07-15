import type { GiftScore } from "./calculateResults";

const maxScores: Record<string, number> = {
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

export interface RadarGift {
  gift: string;
  value: number;
}

export function normalizeResults(results: GiftScore[]): RadarGift[] {
  return results.map((gift) => ({
    gift: gift.gift,
    value: Math.round((gift.score / maxScores[gift.gift]) * 100),
  }));
}