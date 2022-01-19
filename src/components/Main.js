

import Cards from "./Cards";

function Main(props) {
  let numStay = "";
  if (props.stayList.length > 12) {
    numStay = `12+ stays`;
  } else if (props.stayList.length === 0) {
    numStay = `0 stay`;
  } else {
    numStay = `${props.stayList.length} stays`;
  };
  return (
    <main className="my-8 font-poppins font-bold text-xl text-[#333333]">
      <div className="flex justify-between">
        <h1>
          Stays in Finland
        </h1>
        <p>{numStay}</p>
      </div>
      <Cards stayList={props.stayList}/>
    </main>
  );
};

export default Main;