import Card from './Card';

function Cards(props) {
  const card = props.stayList.map((stay) =>
    <Card
      key={stay.title}
      photo={stay.photo}
      superHost={stay.superHost}
      type={stay.type}
      beds={stay.beds}
      rating={stay.rating}
      title={stay.title}
    />
  )
  return (
    <div className='card-grid'>
      {card}
    </div>
  )};

export default Cards;