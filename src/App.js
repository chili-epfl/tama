import React, { useState } from "react";
import "./App.css";

import animalsData from "./geometryData";
import { Math } from "core-js";
import ExampleGrid from "./ExampleGrid";
import Guideline from "./Guideline";

const teachingStrategy = (examples, concept) => {
  // Stupid teaching strategy. Only returns the 4 first examples
  return examples.map((_, i) => i < 4);
};

const learningStrategy = (examples, initial) => {
  return examples.map(() => (Math.random() > 0.5 ? 1 : -1));
};

const App = () => {
  const [game, setGame] = useState("intro");
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("answering");

  const [examples, setExamples] = useState(null);
  const [concept, setConcept] = useState(() => () => true);
  const [name, setName] = useState(() => () => true);
  const [selected, setSelected] = useState(null);
  const [initialSelection, setInitialSelection] = useState(null);

  const nextQuestion = gameType => {
    const conceptNumber = Math.floor(
      animalsData.concepts.length * Math.random()
    );
    const [c, filter, name] = animalsData.concepts[conceptNumber];
    const e = animalsData.examples
      .filter(x => filter(x.features))
      .sort(_ => 0.5 - Math.random())
      .filter((_, i) => i < 12);

    setConcept(() => c);
    setExamples(e);
    setName(name);
    setSelected(e.map((x, i) => 0));
    setInitialSelection(gameType === "student" ? teachingStrategy(e, c) : []);
    setGame(gameType);
    setStep(step + 1);
    setStatus("answering");
  };

  const StudentGame = () => (
    <>
      <ExampleGrid
        gameType={game}
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
          title="Guess what is the GREEN category!"
          text={
            <>
              Based off the examples already given, guess the category and
              assign the color GREEN to the correct examples. Also select which
              examples do not belong to the category by giving them the color
              RED.
            </>
          }
          buttonText="Submit"
          onClick={() => setStatus("submitted")}
          buttonDisabled={status === "answering"}
        />
      )}
      {status === "submitted" && (
        <Guideline
          title="Success!"
          text={
            <>
              The category was: <b>{name}</b>
            </>
          }
          buttonText="Next"
          onClick={() => nextQuestion("student")}
        />
      )}
    </>
  );

  const TeacherGame = () => (
    <>
      <ExampleGrid
        gameType={game}
        showFeedback={status === "submitted"}
        concept={concept}
        examples={examples}
        setReady={x => setStatus(x ? "ready" : "answering")}
        initialSelection={initialSelection}
        setInitialSelection={setInitialSelection}
        selected={selected}
        setSelected={setSelected}
      />
      {(status === "answering" || status === "ready") && (
        <Guideline
          title="Teach JOHN DOE!"
          text={
            <>
              Select examples to help JOHN DOE guess the concept: <b>{name}</b>.
              Select between 3 and 6 examples.
            </>
          }
          buttonText="Submit"
          onClick={() =>
            setStatus("submitted") ||
            setSelected(learningStrategy(examples, initialSelection))
          }
          buttonDisabled={status === "answering"}
        />
      )}
      {status === "submitted" && (
        <Guideline
          title="Success!"
          text="Your students made many mistakes !!! :( :( :( :("
          buttonText="Next"
          onClick={() => nextQuestion("student")}
        />
      )}
    </>
  );

  return (
    <div className="App">
      {/* <h1>Inductive Teaching Experiment</h1> */}
      {game === "intro" && (
        <Guideline
          title="Welcome to this cool experiment"
          text="You are a great person :)"
          buttonText="Start!"
          onClick={() => nextQuestion("student")}
        />
      )}
      {game === "student" && <StudentGame />}
      {game === "teacher" && <TeacherGame />}
      <Guideline
        buttonText="Play as a Student"
        onClick={() => nextQuestion("student")}
      />
      <Guideline
        buttonText="Play as a Teacher"
        onClick={() => nextQuestion("teacher")}
      />
    </div>
  );
};

export default App;
