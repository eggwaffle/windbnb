function Card(props) {
  return (
    <div className='card' id={props.key}>
      <img className="photo" src={props.photo} alt='hotel room'></img>
      <div className="tag-row">
        <div>
          <p>{props.type}</p>
        </div>
        <div className="rating">
          <span className="material-icons">
              star
          </span>
          <p>{props.rating}</p>
        </div>
      </div>
      <h2 className="title">{props.title}</h2>
    </div>
  );
};

export default Card;