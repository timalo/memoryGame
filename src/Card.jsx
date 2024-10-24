export default function Card(props) {
  return (
    <div className="cardDiv" id={props.id} onClick={props.cardClick}>
      <div className="cardImageDiv">
        <img className="cardImage" src={props.imageUrl}></img>
      </div>
      <div className="cardTitleDiv">
        <div className="cardTitle">{props.title}</div>
      </div>
    </div>
  );
}
