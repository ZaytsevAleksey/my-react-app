import React from "react";

interface CardProps {
  card_name: string;
  card_text: string;
  image: string;
  onCardClick: (imageUrl: string) => void;
}

const Card: React.FC<CardProps> = ({ card_name, card_text, image, onCardClick }) => (
  <div 
    className="feature" 
    onClick={() => onCardClick(image)} 
    style={{ cursor: onCardClick ? "pointer" : "default" }}
  >
    <hr className="thick-line" />
    <h3>{card_name}</h3>
    <p>{card_text}</p>
    {image && <img src={image} alt={card_name} />}
  </div>
);

export default Card;