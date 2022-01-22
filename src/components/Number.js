function Number(props) {
  return (
    <div className="number">
      <label>{props.label}</label>
      <p>{props.description}</p>
      <div className="counter-box">
        <button type="button" id="addButton" onClick={() => props.setGuest(props.numGuest+1)}>
          <span  className="material-icons">add</span>
        </button>
        <span
          className="counter"
        >
          {props.numGuest}
        </span>
        <button type="button" id="removeButton" onClick={() => props.setGuest(props.numGuest-1)}>
          <span className="material-icons">remove</span>
        </button>
      </div>
    </div>
)}

export default Number;