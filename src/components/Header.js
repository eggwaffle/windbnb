//https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs


import logo from "../assets/images/logo.svg";
import Filterbar from "./Filterbar";

function Header({ data, setData}) {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <Filterbar data={data} setData={setData}/>
    </header>
  );
};

export default Header;