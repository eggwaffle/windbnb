import { useState, useEffect } from "react";
import Filterdrawer from "./Filterdrawer";
import Filterbar from "./Filterbar";

function Filter({ fullStayList, setStayListState }) {
  const [stayCity, setStayCity] = useState("Add location");
  const [stayCountry, setStayCountry] = useState("");
  const [totalGuest, setTotalGuest] = useState(0);
  const [adultGuest, setAdultGuest] = useState(0);
  const [childGuest, setChildGuest] = useState(0);
  const [expand, setExpand] = useState(false);
  let overlayClass = "filter-overlay hidden";
  let filterdrawerClass = "filterdrawer hidden";
  let locationButtonClass = `drawer-button-empty`;
  let guestButtonClass = `drawer-button-empty`;
  let guest = `Add guests`;

  if (expand) {
    filterdrawerClass = "filterdrawer";
    overlayClass = "filter-overlay";
  } else {
    filterdrawerClass = "filterdrawer hidden";
    overlayClass = "filter-overlay hidden";
  }

  const filteredData = fullStayList.filter(
    stay => stay.maxGuests >= totalGuest && stay.city === stayCity
  );
  const handleCityChange = (e) => setStayCity(e.target.value);
  const handleFilter = () => {
    setStayListState(filteredData);
    setExpand(false);
  }

  if (stayCity === "Add location") {
    locationButtonClass = `display-button-empty`;
  } else {
    locationButtonClass = `display-button`;
  }

  if (adultGuest < 0) {
    setAdultGuest(0);
  }
  if (childGuest < 0) {
    setChildGuest(0);
  }
  if (totalGuest === 0 ) {
    guest = `Add guests`;
    guestButtonClass = `display-button-empty`;
  } else {
    guest = `${totalGuest} guests`;
    guestButtonClass = `display-button`;
  }

  useEffect(() => {
    setTotalGuest(adultGuest + childGuest)
  }, [adultGuest, childGuest]);

  return (
    <div>
      <Filterbar
        locationButtonClass={locationButtonClass}
        guestButtonClass={guestButtonClass}
        fullStayList={fullStayList}
        stayCity={stayCity}
        stayCountry={stayCountry}
        guest={guest}
        onChange={handleCityChange}
        onClick={() => setExpand(true)}
      />
      <div className={overlayClass} onClick={() => setExpand(false)}></div>
      <Filterdrawer
        filterdrawerClass={filterdrawerClass}
        locationButtonClass={locationButtonClass}
        guestButtonClass={guestButtonClass}
        setExpand={setExpand}
        fullStayList={fullStayList}
        stayCity={stayCity}
        setStayCity={setStayCity}
        stayCountry={stayCountry}
        setStayCountry={setStayCountry}
        setStayListState={setStayListState}
        guest={guest}
        adultGuest={adultGuest}
        childGuest={childGuest}
        setAdultGuest={setAdultGuest}
        setChildGuest={setChildGuest}
        setTotalGuest={setTotalGuest}
        handleFilter={handleFilter}
      />
  </div>
  );
}

export default Filter;