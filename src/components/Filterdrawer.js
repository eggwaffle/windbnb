import { useState} from "react";

import Button from "./Button";
import Number from "./Number";
import Option from "./Option";

function Filterdrawer(props) {
  const [ optionHidden, setOptionHidden] = useState(false);
  const [ numHidden, setNumHidden] = useState(true);
  let locationArr = [];
  let locationList = [];
  let numClass = "num-class hidden";

  numHidden ? numClass = "num-class hidden" : numClass = "num-class";
  const showCity = () => {
    setOptionHidden(false);
    setNumHidden(true);
  }
  const showNum = () => {
    setOptionHidden(true);
    setNumHidden(false);
  }

  props.fullStayList.map(d => locationArr.push([d.city, `, ${d.country}`]))
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
      icon="location_on"
      option={location}
      setStayCity={props.setStayCity}
      setStayCountry={props.setStayCountry}
    />
  )
  return (
    <div className={props.filterdrawerClass}>
      <div className="drawer-title-bar">
        <h1 className="drawer-title">
          Edit your search
        </h1>
        <Button
          onClick={() => props.setExpand(false)}
          buttonContent={
            <span className="material-icons">
              close
            </span>
          }
        />
      </div>
      <div className = "drawer-bar">
        <div className = "drawer-button-box">
          <h2>location</h2>
          <Button
            className = {props.locationButtonClass}
            onClick={showCity}
            buttonContent={props.stayCity + props.stayCountry}
          />
        </div>
        <div className="drawer-button-box">
          <h2>guests</h2>
          <Button
            className = {props.guestButtonClass}
            onClick={showNum}
            buttonContent={props.guest}
          />
        </div>
        <div className="drawer-search-container">
        <Button
            className = "drawer-search"
            onClick={props.handleFilter}
            buttonContent={
              <div>
                <span className="material-icons">
                  search
                </span>
                Search
              </div>
            }
          />
        </div>
      </div>
      <div className="drawer-settings">
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
      </div>
      <div className="drawer-search-container-mobile">
        <Button
            className = "drawer-search"
            onClick={props.handleFilter}
            buttonContent={
              <div>
                <span className="material-icons">
                  search
                </span>
                Search
              </div>
            }
          />
      </div>
    </div>
  )
};

export default Filterdrawer;