import { useState} from "react";

import Button from "./Button";
import Number from "./Number";
import Option from "./Option";

function Filterdrawer(props) {
  const [ optionHidden, setOptionHidden] = useState(false);
  const [ numHidden, setNumHidden] = useState(true);
  let locationArr = [];
  let locationList = [];
  let numClass = "hidden";

  numHidden ? numClass = "hidden" : numClass = "";
  const showCity = () => {
    setOptionHidden(false);
    setNumHidden(true);
  }
  const showNum = () => {
    setOptionHidden(true);
    setNumHidden(false);
  }

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
      setStayCountry={props.setStayCountry}
      option={location}
    />
  )
  return (
    <div className="filterdrawer">
      <Button
        onClick={showCity}
        buttonContent={props.stayCity + `, ` + props.stayCountry}
        />
      <Button
        onClick={showNum}
        buttonContent={props.guest}
        />
      <div className="option">
        {optionHidden
          ? null
          : option}
      </div>
      <div className={numClass}>
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
      </div>
        <Button onClick={props.handleFilter} buttonContent={"Search"}/>
    </div>
  )
};

export default Filterdrawer;