import { useState, useEffect } from "react";
import Card from "./Card";

export default function Game(props) {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    console.log("Game component mounted");
    const randomCards = props.currentFetch
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setShuffledCards(randomCards);
  }, [props.currentFetch]);

  return shuffledCards.map((card, index) => (
    <Card key={index} imageUrl={card.imageUrl} title={card.title} />
  ));
}
