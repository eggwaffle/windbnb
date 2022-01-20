import { useState, useEffect } from "react";

function Number(props) {

  return (
    <div>
      <label>{props.label}</label>
      <p>{props.description}</p>
      <div className="p-1 border-solid border-2 border-gray-3 rounded-xl text-center">
        <button type="button" id="addButton" onClick={() => props.setGuest(props.numGuest+1)} className="inline-block align-middle mx-1 p-1 rounded bg-[#E0E0E0] text-gray-3">
          <span  className="material-icons">add</span>
        </button>
        <p>{props.numGuest}</p>
        <button type="button" id="removeButton" onClick={() => props.setGuest(props.numGuest-1)} className="inline-block align-middle mx-1 p-1 rounded bg-[#E0E0E0] text-gray-3">
          <span className="material-icons align-middle">remove</span>
        </button>
      </div>
    </div>
)}

export default Number;

/*
 <input
          type="number"
          name="adultGuest"
          className="p-0 w-8 border-none bg-[#F2F2F2] text-center text-gray-1"
          min={0}
          defaultValue={props.adultGuest}
          required
        />
 */