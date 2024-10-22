import { useState, useEffect } from "react";
import Card from "./Card";

export default function Game(props) {
  const [shuffledCards, setShuffledCards] = useState([]);
  //TODO: Constantly getting into an endless loop here, being  only able to randomize all of the cards in infinite loop
  return shuffledCards.map((card, index) => (
    <Card key={index} imageUrl={card.imageUrl} title={card.title} />
  ));
}
