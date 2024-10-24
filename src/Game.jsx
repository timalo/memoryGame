import { useState, useEffect } from "react";
import Card from "./Card";

export default function Game(props) {
  const [shuffledCards, setShuffledCards] = useState([]);
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
    // console.log(e.currentTarget.lastChild.innerText);
    checkCardClicked(e.currentTarget.lastChild.innerText);
  }

  function checkCardClicked(cardName) {
    console.log("Calling checkCardClicked with value: ", cardName);
    if (clickedCards.includes(cardName)) {
      console.log("Lose");
      props.nullScore();
      setClickedCards([]);
      shuffleCards();
    } else {
      console.log("should award point");
      props.increaseScore();
      const newClickedCards = [...clickedCards, cardName];
      setClickedCards(newClickedCards);
      shuffleCards();
    }
  }

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
