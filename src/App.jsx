import { useState } from "react";

function App() {
  const [color, setcolor] = useState("royalblue");

  return (
    <>
      <div
        className="w-full h-screen "
        style={{ backgroundColor: color }}
      ></div>
      <div className=" fixed flex flex-wrap justify-center rounded-3xl bottom-12 inset-x-0 px-4xl">
        <div className=" fixed flex flex-wrap gap-3 justify-center shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
