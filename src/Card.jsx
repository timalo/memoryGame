export default function Card(props) {
  function cardClick(e) {
    //Handle card click and everything related to it
    console.log("Card clicked");
    console.log(e.target);
  }

  return (
    <div className="cardDiv" onClick={cardClick}>
      <div className="cardImageDiv">
        <img className="cardImage" src={props.imageUrl}></img>
      </div>
      <div className="cardTitleDiv">
        <div className="cardTitle">{props.title}</div>
      </div>
    </div>
  );
}
