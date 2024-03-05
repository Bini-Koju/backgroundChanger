import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="grid place-content-center animate-spin  w-52 h-52 m-auto my-3 flex-col rounded-full text-3xl  p-2 "
        style={{ backgroundColor: color }}
      >
        <p className="uppercase ">{color} </p>
      </div>

      <div className=" flex justify-center m-auto bg-yellow-300 p-3 w-72">
        <button
          onClick={() => setColor("red")}
          className="m-2 p-3 bg-stone-900 text-white"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="m-2 p-3 bg-stone-900 text-white"
        >
          Green
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="m-2 p-3 bg-stone-900 text-white"
        >
          Yellow
        </button>
      </div>
    </>
  );
}

export default App;
