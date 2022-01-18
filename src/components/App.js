// https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs

import { useState } from 'react';
import stays from '../assets/data/stays.json';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [stayListState, setStayListState] = useState(stays);
  return (
    <div className=" mx-10 my-5">
      <Header data={stayListState} setData={setStayListState}/>
      <Main stayList={stayListState}/>
      <Footer />
    </div>
  );
}

export default App;
