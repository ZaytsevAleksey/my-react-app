export interface CardData {
  id: number;
  title: string;
  text: string;
  image?: string | null;
}

export interface CardProps {
  title: string;
  description: string;
  image?: string | null;
  onClick?: () => void;
}