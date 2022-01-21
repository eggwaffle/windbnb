function Option(props) {
  const choose = () => {
    props.setStayCity(props.option[0]);
    props.setStayCountry(props.option[1]);
  }
  return (
    <div className="option-item">
      <span className="material-icons">{props.icon}</span>
      <li
      onClick={choose}
      name={props.option[0]}
    >
      {`${props.option[0]}${props.option[1]}`}
    </li>
    </div>
  )
};

export default Option;