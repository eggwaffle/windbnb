function Select({ stayCity, setStayCity }) {
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
        <option value="Helsinki">Helsinki</option>
        <option value="Oulu">Oulu</option>
      </select>
  )
};

export default Select;