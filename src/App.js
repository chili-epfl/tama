import React, { useState } from "react";
import "./App.css";

import { examples, concepts } from "./animals.js";
import { Math } from "core-js";
import ExampleGrid from "./ExampleGrid";
import Guideline from "./Guideline";

const conceptNumber = Math.floor(concepts.length * Math.random());
const [concept, filter] = concepts[conceptNumber];
console.log(`Concept number ${1 + conceptNumber}`);

const _examples = examples
  .filter(x => filter(x.features))
  .sort(_ => 0.5 - Math.random())
  .filter((_, i) => i < 12);

const App = () => {
  const [step, setStep] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);

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
            initialSelection={[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]}
          />
          <Guideline
            title="Hello World!"
            text="Click the button... Click the button... Click the button... Click the button... Click the button... Click the button... Click the button... Click the button..."
            buttonText="Click Me!"
            onClick={() => setShowFeedback(!showFeedback)}
            buttonDisabled={showFeedback}
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
