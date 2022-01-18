
import Card from './Card';

function Cards(props) {
  return (
    <div className='card-grid'>
      {props.stayList.map((d) => (
          <Card
            key={d.id}
            photo={d.photo}
            type={d.type}
            rating={d.rating}
            title={d.title}
          />
      ))}
    </div>
  )};

export default Cards;