import React, { useState } from "react";
import "./App.css";

const examples = [
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] },
  { img: "A", features: [1, 1, 1, 1, 1] }
];

const Example = ({ img, selected, select }) => (
  <div
    className="Example"
    onClick={select}
    style={selected ? { border: "solid #090 6px" } : {}}
  >
    {img}
  </div>
);

function App() {
  const [selected, setSelected] = useState(examples.map(() => false));

  const toggleSelect = i => {
    console.log("toggleSelect", i);
    selected[i] = !selected[i];
    setSelected([...selected]);
  };

  return (
    <div className="App">
      <h1>Teach the simulated student:</h1>
      <div className="Examples">
        {examples.map((ex, i) => (
          <Example
            {...ex}
            selected={selected[i]}
            select={() => toggleSelect(i)}
          />
        ))}
      </div>
      <button>Show these examples</button>
    </div>
  );
}

export default App;
