function Number(props) {
  return (
    <div>
      <label>{props.label}</label>
      <p>{props.description}</p>
      <div className="p-1 border-solid border-2 border-gray-3 rounded-xl text-center">
        <button type="button" id="addButton" onClick={() => props.setGuest(props.numGuest+1)} className="inline-block align-middle mx-1 p-1 rounded bg-[#E0E0E0] text-gray-3">
          <span  className="material-icons">add</span>
        </button>
        <input
          type="number"
          className="p-0 w-8 border-none bg-[#F2F2F2] text-center text-gray-1"
          onChange={e => props.setGuest(e.target.value)}
          value={props.numGuest}
        />
        <button type="button" id="removeButton" onClick={() => props.setGuest(props.numGuest-1)} className="inline-block align-middle mx-1 p-1 rounded bg-[#E0E0E0] text-gray-3">
          <span className="material-icons align-middle">remove</span>
        </button>
      </div>
    </div>
)}

export default Number;