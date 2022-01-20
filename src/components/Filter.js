import { useState, useEffect } from "react";
import Filterdrawer from "./Filterdrawer";
import Filterbar from "./Filterbar";

function Filter({ fullStayList, setStayListState}) {
  const [stayCity, setStayCity] = useState("Add location");
  const [stayCountry, setStayCountry] = useState("");
  const [totalGuest, setTotalGuest] = useState(0);
  const [adultGuest, setAdultGuest] = useState(0);
  const [childGuest, setChildGuest] = useState(0);
  const [expand, setExpand] = useState(false);
  let filterdrawerClass = "";
  let guest = `Add guests`;

  expand ? filterdrawerClass = "drawer-container" : filterdrawerClass = "drawer-container hidden";

  const filteredData = fullStayList.filter(
    stay => stay.maxGuests >= totalGuest && stay.city === stayCity
  );
  const handleCityChange = (e) => setStayCity(e.target.value);
  const handleFilter = () => {
    setStayListState(filteredData);
    setExpand(false);
  }

  if (adultGuest < 0) {
    setAdultGuest(0);
  }
  if (childGuest < 0) {
    setChildGuest(0);
  }
  if (totalGuest === 0 ) {
    guest = `Add guests`;
  } else {
    guest = `${totalGuest} guests`;
  }

  useEffect(() => {
    setTotalGuest(adultGuest + childGuest)
  }, [adultGuest, childGuest]);

  return (
    <div>
      <div>
        <Filterbar
          fullStayList={fullStayList}
          stayCity={stayCity}
          stayCountry={stayCountry}
          guest={guest}
          onChange={handleCityChange}
          onClick={() => setExpand(true)}
        />
      </div>
      <div className={filterdrawerClass}>
        <Filterdrawer
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
    </div>
  );
}

export default Filter;