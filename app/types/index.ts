import { ReactNode } from "react";

export interface CardItem {
    id: string;
    title: string;
    description: string;
    icons: string[]
    imageUrl?: string;
  }

export  interface Service {
    title: string;
    description: string;
    icon: ReactNode;
    delay: number;
  }
  