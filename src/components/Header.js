//https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs

import logo from "../assets/images/logo.svg";
import Filter from "./Filter";

function Header({ fullStayList, setStayListState}) {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <Filter
        fullStayList={fullStayList}
        setStayListState={setStayListState}
      />
    </header>
  );
};

export default Header;