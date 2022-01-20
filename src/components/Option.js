function Option(props) {
  const choose = () => props.setStayCity(props.option[0]);
  return (
    <li
      onClick={choose}
      name={props.option[0]}
    >
      {`${props.option[0]}, ${props.option[1]}`}
    </li>
  )
};

export default Option;