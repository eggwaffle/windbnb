import Button from "./Button";
function Select(props) {
  return (
    <div className="filter-bar">
      <Button
        onClick={props.onClick}
        buttonContent={props.stayCity + props.stayCountry}
        />
      <Button
        onClick={props.onClick}
        buttonContent={props.guest}
        />
      <Button
        onClick={props.onClick}
        buttonContent={
        <span className="material-icons">
          search
        </span>
      }
    />
    </div>
  )
};

export default Select;