import { useState } from "react";
import Card from "./Card";
import initialCards from "./initials/initialCards.js";

export default function App() {
  const [currentCards, setCurrentCards] = useState(initialCards);

  return (
    <div className="content">
      <header>
        <div className="titleDiv">Memory Card Game</div>
        <div className="scoreDiv">
          <div className="currentScoreDiv">
            Score: <span className="currentScore">0</span>
          </div>
          <hr />
          <div className="highScoreDiv">
            High Score: <span className="highScore">0</span>
          </div>
        </div>
      </header>
      <div className="gameDiv">
        <div className="cardContainer">
          {currentCards.map((card, index) => (
            <Card key={index} imageUrl={card.imageUrl} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
