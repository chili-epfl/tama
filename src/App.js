import React, { useState } from "react";
import "./App.css";

import { examples, concepts } from "./animals.js";
import { Math } from "core-js";
import ExampleGrid from "./ExampleGrid";
import Guideline from "./Guideline";

const conceptNumber = Math.floor(concepts.length * Math.random());
const [concept, filter] = concepts[conceptNumber];

const _examples = examples
  .filter(x => filter(x.features))
  .sort(_ => 0.5 - Math.random())
  .filter((_, i) => i < 16);

const App = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("answering");
  const [showFeedback, setShowFeedback] = useState(false);
  const [selected, setSelected] = useState(_examples.map((x, i) => 0));
  const [initialSelection, setInitialSelection] = useState(
    _examples.map(_ => Math.random() > 0.3)
  );

  return (
    <div className="App">
      <h1>Inductive Teaching Experiment</h1>
      {step < 1 && <Guideline onClick={() => setStep(1)} />}
      {step === 1 && (
        <>
          <ExampleGrid
            showFeedback={showFeedback}
            concept={concept}
            examples={_examples}
            setReady={x => setStatus(x ? "ready" : "answering")}
            initialSelection={initialSelection}
            selected={selected}
            setSelected={setSelected}
          />
          <Guideline
            title="Guess the category!"
            text="Based off the examples already given, guess the category and assign the color GREEN to the correct examples. Also select which examples do not belong to the category by giving them the color RED."
            buttonText="Submit"
            onClick={() => setShowFeedback(!showFeedback)}
            buttonDisabled={status === "answering"}
          />
        </>
      )}
      {/*  */}
    </div>
  );
};

// const toSelect = examples
// .map((x, i) => [x, i])
// //.filter(x => concept(x[0].features))
// .sort(_ => 0.5 - Math.random())
// .filter((_, i) => i < 4)
// .map(([_, i]) => i);

export default App;
