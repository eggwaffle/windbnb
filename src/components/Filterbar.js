import Button from "./Button";
function Select(props) {
  return (
    <div className="filter-bar">
      <div className="bar-display">
        <Button
          className={props.locationButtonClass}
          onClick={props.onClick}
          buttonContent={props.stayCity + props.stayCountry}
        />
      </div>
      <div className="bar-display">
        <Button
          className={props.guestButtonClass}
          onClick={props.onClick}
          buttonContent={props.guest}
        />
      </div>
      <Button
        className="searchbar-button"
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