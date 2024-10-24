import { useState, useEffect } from "react";

import Game from "./Game";
//import initialCards from "./initials/initialCards.js";

export default function App() {
  const [currentFetch, setCurrentFetch] = useState([]);

  //These would probably be better to be stored in the Game component but since our scoreboard is here, we will store it here for now.
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function increaseScore() {
    hideSubtitle(); //Might as well call this here.
    setCurrentScore(currentScore + 1);
    if (currentScore >= highScore) {
      setHighScore(currentScore + 1);
      showHighScoreAnim();
    }
  }

  function nullScore() {
    setCurrentScore(0);
  }

  function showHighScoreAnim() {
    const highScoreAnimation = document.querySelector(".highScoreAnimation");
    highScoreAnimation.classList = "highScoreAnimation highScoreAnimate";
    setTimeout(() => {
      highScoreAnimation.classList = "highScoreAnimation hidden";
    }, 1000);
  }

  function hideSubtitle() {
    const subTitle = document.querySelector(".subTitle");
    subTitle.classList = "subTitle hidden";
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=40")
      .then((response) => response.json())
      .then((data) => {
        const fetchedCards = data.results.map((pokemon) => ({
          title: pokemon.name,
          imageUrl: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
          id: pokemon.url.id,
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
            Score: <span className="score currentScore">{currentScore}</span>
          </div>
          <hr />
          <div className="highScoreDiv">
            High Score: <span className="score highScore">{highScore}</span>
          </div>
          <div className="highScoreAnimation hidden">New high score!</div>
        </div>
      </header>
      <div className="subTitle">
        Click as many cards as possible without clicking any card twice!
      </div>
      <div className="gameDiv">
        <div className="cardContainer">
          <Game
            currentFetch={currentFetch}
            increaseScore={increaseScore}
            nullScore={nullScore}
          ></Game>
        </div>
      </div>
    </div>
  );
}
