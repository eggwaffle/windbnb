function Button(props) {
  return (
    <button
      className={`button ${props.className}`}
      onClick={props.onClick}
    >
      {props.buttonContent}
    </button>
  )
};

export default Button;