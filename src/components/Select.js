function Select({ fullStayList, stayCity, setStayCity }) {
  let cityArr = [];
  fullStayList.map(d => cityArr.push(d.city))
  const cityList = [...new Set(cityArr)]
  const option = cityList.map((city) =>
    <option key={city} value={city}>{city}</option>
  )
  return (
    <select
        type="text"
        name="stayCity"
        placeholder="city"
        value={stayCity}
        onChange={(e) => setStayCity(e.target.value)}
        required
      >
        <option value="" disabled hidden>Add location</option>
        {option}
      </select>
  )
};

export default Select;