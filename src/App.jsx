import { useState, useEffect } from "react";

import Game from "./Game";
//import initialCards from "./initials/initialCards.js";

export default function App() {
  const [currentFetch, setCurrentFetch] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=40")
      .then((response) => response.json())
      .then((data) => {
        const fetchedCards = data.results.map((pokemon) => ({
          title: pokemon.name,
          imageUrl: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
        }));
        setCurrentFetch(fetchedCards);
      });
  }, []);

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
          <Game currentFetch={currentFetch}></Game>
        </div>
      </div>
    </div>
  );
}
