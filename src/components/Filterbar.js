//https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs

import { useCallback } from 'react';

function checkData(stay) {
  if (stay.maxGuests >= 4){
    return true;
  };
  return false;
}

function Filterbar({ data, setData}) {
  let filteredData = data.filter(checkData);
  const handleFilter = useCallback(event => {
    setData(filteredData);
    console.log(filteredData.length);
  }, [filteredData, setData])
  return (
    <div>
      <button onClick={handleFilter}>Click me</button>
    </div>
  );
};

export default Filterbar;