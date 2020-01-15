import React, { useState } from "react";
import "./App.css";

import geometryData from "./geometryData";
import cardsData from "./cardsData";
import animalsData from "./animalsData";
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
    const questionData = [animalsData, geometryData, cardsData][
      Math.floor(3 * Math.random())
    ];
    const conceptNumber = Math.floor(
      questionData.concepts.length * Math.random()
    );
    const [c, filter, name] = questionData.concepts[conceptNumber];
    const e = questionData.examples
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

  const checkCorrectness = () => {
    return !selected.some((x, i) => {
      if (initialSelection[i]) return false;
      return x * (concept(examples[i].features) ? 1 : -1) < 0;
    });
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
              Based off the examples already given, guess the category.
              <li>
                Examples that belong to the category are shown in <b>GREEN</b>
              </li>
              <li>
                Counter-examples that do not belong to the category are showm in{" "}
                <b>RED</b>
              </li>
            </>
          }
          buttonText="Submit"
          onClick={() => setStatus("submitted")}
          buttonDisabled={status === "answering"}
        />
      )}
      {status === "submitted" && (
        <Guideline
          title={checkCorrectness() ? "Success !!" : "You have Errors..."}
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
              Select examples to help JOHN DOE guess the category: <b>{name}</b>
              . Select between 3 and 6 examples.
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
          onClick={() => nextQuestion("teacher")}
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
          text={
            <>
              <span>
                This experiment is about inductively discovering a secret rule
                forming a category, based on seeing examples.
                <ul>
                  <li>
                    Examples that belong to the category will be shown in{" "}
                    <b>GREEN</b>
                  </li>
                  <li>
                    Counter-examples that do not belong to the category will be
                    showm in <b>RED</b>
                  </li>
                </ul>
                When you play as a student you will see already selected
                examples and you must assign other examples to the category or
                not. When you play as a teacher, you are told the secret
                category and you must select examples to help a student guess
                the category correctly
              </span>
            </>
          }
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
