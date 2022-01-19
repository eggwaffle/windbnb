//https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs

import { useState } from "react";
import Select from "./Select";

function Filterbar({ fullStayList, setStayListState}) {
  const [stayCity, setStayCity] = useState("");
  const [totalGuest, setTotalGuest] = useState(0);
  const filteredData = fullStayList.filter(
    stay => stay.maxGuests >= totalGuest && stay.city === stayCity
  );
  const handleFilter = () => setStayListState(filteredData);
  return (
    <div>
      <Select
        fullStayList={fullStayList}
        stayCity={stayCity}
        setStayCity={setStayCity}
      />
      <input
        type="number"
        name="totalGuest"
        placeholder="0"
        value={totalGuest}
        onChange={(e) => setTotalGuest(e.target.value)}
        required
      />
      <button onClick={handleFilter}>Search</button>
    </div>
  );
};

export default Filterbar;