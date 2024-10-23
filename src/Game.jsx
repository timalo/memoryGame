import { useState, useEffect } from "react";
import Card from "./Card";

export default function Game(props) {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    shuffleCards();
  }, [props.currentFetch]);

  function shuffleCards() {
    const randomCards = props.currentFetch
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setShuffledCards(randomCards);
  }

  function cardClick(e) {
    console.log("Card clicked");
    console.log(e);
    console.log(e.target);
  }
  /* 
  function checkCardClicked(cardId) {
    if (clickedCards.includes(cardId)) {
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      const newClickedCards = [...clickedCards, cardId];
      setClickedCards(newClickedCards);
      setCurrentScore(currentScore + 1);
      if (currentScore >= highScore) {
        setHighScore(currentScore + 1);
      }
    }
  } */

  //TODO: implement the cardClick function, will have to find a way to associate certain card with certain id.
  return shuffledCards.map((card, index) => (
    <Card
      key={index}
      imageUrl={card.imageUrl}
      title={card.title}
      cardClick={cardClick}
    />
  ));
}
