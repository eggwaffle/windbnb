function Input(props) {
  return (
    <input
      type="text"
      className="input"
      name={props.name}
      value={props.value}
      onClick={props.onClick}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required
    />
  )
};

export default Input;