export interface CardData {
  id: number;
  title: string;
  text: string;
  image?: string | null;
}

interface CardProps {
  title: string;
  description: string;
  image?: string | null;
  onClick?: () => void;
}