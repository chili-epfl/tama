import React, { useState } from "react";
import "./App.css";

import animalsData from "./cardsData";
import { Math } from "core-js";
import ExampleGrid from "./ExampleGrid";
import Guideline from "./Guideline";

const App = () => {
  const [step, setStep] = useState("intro");
  const [status, setStatus] = useState("answering");

  const [examples, setExamples] = useState(null);
  const [concept, setConcept] = useState(() => () => true);
  const [name, setName] = useState(() => () => true);
  const [selected, setSelected] = useState(null);
  const [initialSelection, setInitialSelection] = useState(null);

  const nextQuestion = () => {
    const conceptNumber = Math.floor(
      animalsData.concepts.length * Math.random()
    );
    const [c, filter, name] = animalsData.concepts[conceptNumber];
    const e = animalsData.examples
      .filter(x => filter(x.features))
      .sort(_ => 0.5 - Math.random())
      .filter((_, i) => i < 16);

    setConcept(() => c);
    setExamples(e);
    setName(name);
    setSelected(e.map((x, i) => 0));
    setInitialSelection(e.map((_, i) => i < 4));
    setStep("questions");
    setStatus("answering");
  };

  return (
    <div className="App">
      {/* <h1>Inductive Teaching Experiment</h1> */}
      {step === "intro" && (
        <Guideline
          title="Welcome to this cool experiment"
          text="You are a great person :)"
          buttonText="Start!"
          onClick={nextQuestion}
        />
      )}
      {step === "questions" && (
        <>
          <ExampleGrid
            showFeedback={status === "submitted"}
            concept={concept}
            examples={examples}
            setReady={x => setStatus(x ? "ready" : "answering")}
            initialSelection={initialSelection}
            selected={selected}
            setSelected={setSelected}
          />
          {(status === "answering" || status === "ready") && (
            <Guideline
              title="Guess the category!"
              text="Based off the examples already given, guess the GREEN category and assign the color GREEN to the correct examples. Also select which examples do not belong to the category by giving them the color RED."
              buttonText="Submit"
              onClick={() => setStatus("submitted")}
              buttonDisabled={status === "answering"}
            />
          )}
          {status === "submitted" && (
            <Guideline
              title="Success!"
              text={`The category was: ${name}`}
              buttonText="Next"
              onClick={nextQuestion}
            />
          )}
        </>
      )}
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
