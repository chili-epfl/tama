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
  const colors = ["#770000", "#000077", "#007700"];
  const trueCategory = concept(features) ? 1 : -1;
  return (
    <div
      className="Example"
      style={{
        background: `${colors[1 + selected]}${initial ? "" : "44"}`
      }}
    >
      <img src={"images/animals/" + img} />
      {!initial && (
        <div className="category-buttons">
          {[-1, 0, 1].map(x => {
            if (selected !== x)
              return (
                <span
                  key={x}
                  onClick={() => select(x)}
                  style={{ background: colors[x + 1] }}
                ></span>
              );
          })}
        </div>
      )}
      {show && !initial && (
        <span className="example-feedback">
          {selected === trueCategory ? "" : "X"}
        </span>
      )}
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
    _examples.map((_, i) => (toSelect.includes(i) ? 1 : 0))
  );

  const [intialSelection, _] = useState([...selected]);
  const [show, setShow] = useState(false);

  const toggleSelect = i => x => {
    if (selected[i] === x) selected[i] = 0;
    else selected[i] = x;
    setSelected([...selected]);
  };

  return (
    <>
      <div className="Examples">
        {_examples.map((ex, i) => (
          <Example
            key={i}
            {...ex}
            show={show}
            selected={selected[i]}
            initial={intialSelection[i]}
            select={toggleSelect(i)}
          />
        ))}
      </div>
      <div className="Guidelines" style={{ width: "600px" }}>
        <span>Select all positive examples then click "submit"</span>
        <span className="button" onClick={() => setShow(!show)}>
          submit
        </span>
      </div>
    </>
  );
};

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <h1>Inductive Teaching Experiment</h1>
      {step < 1 && <Guidelines next={() => setStep(1)} />}
      {step === 1 && <Examples />}
      {/*  */}
    </div>
  );
};

export default App;
