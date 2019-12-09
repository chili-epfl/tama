import React, { useState } from "react";
import "./App.css";

import { examples, concepts } from "./animals.js";
import { Math } from "core-js";

const conceptNumber = Math.floor(concepts.length * Math.random());
const [concept, filter] = concepts[conceptNumber];
console.log(`Concept number ${1 + conceptNumber}`);

const _examples = examples
  .filter(x => filter(x.features))
  .sort(_ => 0.5 - Math.random())
  .filter((_, i) => i < 16);

const Example = ({
  img,
  features,
  selected,
  initial,
  select,
  show,
  submitted
}) => {
  const color = concept(features) ? "#090" : "#900";
  const x = 0;
  return (
    <div
      className="Example"
      onClick={initial ? () => {} : select}
      style={
        initial
          ? {
              border: `solid ${initial ? color : "#fff0"} 6px`
            }
          : selected
          ? {
              background: `${show || selected ? "#090" : "#222"}3`
            }
          : {}
      }
    >
      <img src={"images/animals/" + img} />
    </div>
  );
};

const Guidelines = ({ next }) => {
  return (
    <div className="Guidelines">
      <h1>Hello world </h1>
      <span>
        Do this like that then do that like this. Do this like that then do that
        like this. Do this like that then do that like this. Do this like that
        then do that like this. Do this like that then do that like this. Do
        this like that then do that like this. Do this like that then do that
        like this.
      </span>
      <span className="button" onClick={next}>
        >> Next >>
      </span>
    </div>
  );
};

const Examples = () => {
  const toSelect = _examples
    .map((x, i) => [x, i])
    .filter(x => concept(x[0].features))
    .sort(_ => 0.5 - Math.random())
    .filter((_, i) => i < 3)
    .map(([_, i]) => i);

  const [selected, setSelected] = useState(
    _examples.map((_, i) => toSelect.includes(i))
  );

  const [intialSelection, _] = useState([...selected]);

  const toggleSelect = i => {
    if (selected[i]) {
      selected[i] = false;
    } else {
      selected[i] = true;
    }
    setSelected([...selected]);
  };

  return (
    <div>
      <div className="Examples">
        {_examples.map((ex, i) => (
          <Example
            key={i}
            {...ex}
            show={false}
            selected={selected[i]}
            initial={intialSelection[i]}
            select={() => toggleSelect(i)}
          />
        ))}
      </div>
      <div className="Guidelines" style={{ width: "600px" }}>
        <span>Select all positive examples then click "submit"</span>
        <span className="button" onClick={() => {}}>
          submit
        </span>
      </div>
    </div>
  );
};

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <h1>Inductive Teaching Experiment</h1>
      {step < 1 && <Guidelines next={() => setStep(1)} />}
      {step === 1 && <Examples />}
      {/*  */}
    </div>
  );
}

export default App;
