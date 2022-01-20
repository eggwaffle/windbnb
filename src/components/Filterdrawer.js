import { useState, useEffect } from "react";

import Button from "./Button";
import Number from "./Number";
import Option from "./Option";

function Filterdrawer(props) {
  let locationArr = [];
  let locationList = [];
  props.fullStayList.map(d => locationArr.push([d.city, d.country]))
  locationArr.filter((location) => {
      var i = locationList.findIndex(loc => loc[0] === location[0]);
      if (i <= -1) {
        locationList.push(location);
      }
      return null;
    });
  const option = locationList.map((location) =>
    <Option
      key={location[0]}
      setStayCity={props.setStayCity}
      option={location}
    />
  )
  useEffect(() => {
    props.setTotalGuest(props.adultGuest+props.childGuest)
  }, [props]);
  return (
    <div className="filterdrawer">
      <Button
        buttonContent={props.stayCity + props.stayCountry}
        />
      <Button
        buttonContent={props.guest}
        />
      <div className="option">{option}</div>

        <Number
          label="Adults"
          description="Ages 13 or above"
          numGuest={props.adultGuest}
          setGuest={props.setAdultGuest}
          setTotalGuest={props.setTotalGuest}
        />

        <Number
          label="Child"
          description="Ages 2-12"
          numGuest={props.childGuest}
          setGuest={props.setChildGuest}
          setTotalGuest={props.setTotalGuest}
        />

        <Button onClick={props.handleFilter} buttonContent={"Search"}/>
    </div>
  )
};

export default Filterdrawer;

/* <input
          type="number"
          name="totalGuest"
          placeholder="0"
          value={props.totalGuest}
          onChange={props.handleGuestChange}
          required
        />
        */