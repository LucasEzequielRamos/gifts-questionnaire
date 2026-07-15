import type { LucideIcon } from "lucide-react";

export interface Verse {
  reference: string;
  text: string;
}

export interface Gift {
  id: string;
  name: string;

  icon: LucideIcon;

  color: string;

  maxScore: number;
  questions: number;

  summary: string;

  description: string;

  strengths: string[];

  risks: string[];

  development: string[];

  characters: string[];

  verses: Verse[];
}