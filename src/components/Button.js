function Button(props) {
  return (
    <button
      className="button"
      onClick={props.onClick}
    >
      {props.buttonContent}
    </button>
  )
};

export default Button;