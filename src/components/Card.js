const SuperHostTag = () => {
  return (
    <div className="super-host">
      <p>superhost</p>
    </div>
  )
}

function Card(props) {

  let superHost;
  let beds=``;

  if (props.superHost) superHost = <SuperHostTag />;
  if (props.beds !==null) beds = `, ${props.beds} beds`;

  return (
    <div className='card'>
      <img className="photo skeleton" src={props.photo} alt='hotel room'></img>
      <div className="tag-row">
        <div className="tag">
          {superHost}
          <p>{props.type + beds}</p>
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