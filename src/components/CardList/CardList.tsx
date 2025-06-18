import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import type { CardData } from '../../Type';
import defaultStyles from "../../assets/styles/InfoSection.module.css";

interface Card {
  card_name: string;
  card_text: string;
  image: string;
}

const CardComponent: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const updateImage = (imageUrl: string) => {
    console.log('Image would update to:', imageUrl);
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        
        const mappedCards: Card[] = posts.map((post: any, i: number) => ({
          card_name: `Professional Profile ${i + 1}`,
          card_text: post.body,
          image: 'img/Frame 1625.jpg'
        }));
        
        setCards(mappedCards);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Ошибка при загрузке карточек:', err);
      }
    };

    fetchCards();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="features-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          card_name={card.card_name}
          card_text={card.card_text}
          image={card.image}
          onCardClick={updateImage}
        />
      ))}
    </div>
  );
};

export default CardComponent;