import React, { useState } from "react";
import "./App.css";

import geometryData from "./geometryData";
import cardsData from "./cardsData";
import animalsData from "./animalsData";
import { Math } from "core-js";
import ExampleGrid from "./ExampleGrid";
import Guideline from "./Guideline";

import { pick, subset } from "./utils";

const createNewQuestion = () => {
  const qData = [animalsData, geometryData, cardsData][
    Math.floor(3 * Math.random())
  ];

  // const qData = animalsData;

  const conceptNumber = Math.floor(qData.concepts.length * Math.random());
  const [c, f, name] = qData.concepts[conceptNumber];

  // Picks 12 examples out of 9 positive and 9 negative examples
  const ex = qData.examples.filter(x => f(x.features));
  const positiveExamples = subset(
    ex.filter(x => c(x.features)),
    12
  );
  const negativeExamples = subset(
    ex.filter(x => !c(x.features)),
    4
  );
  const e = subset([...positiveExamples, ...negativeExamples], 16);

  return [qData, c, e, name];
};

const teachingStrategy = (examples, concept) => {
  // Stupid teaching strategy. Only returns the 4 first examples

  const z = [
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 12)
  ];

  return examples.map((_, i) => z.includes(i));
};

const learningStrategy = (questionData, examples, initial, concept) => {
  const cons = questionData.concepts.filter(
    c =>
      !examples.some(
        (x, i) => initial[i] && c[0](x.features) !== concept(x.features)
      )
  );

  const con = cons[Math.floor(Math.random() * cons.length)];
  return [examples.map(x => (con[0](x.features) ? 1 : -1)), con[2]];
};

const App = () => {
  const [game, setGame] = useState("intro");
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("answering");
  const [feedback, setFeedback] = useState("");

  const [questionData, setQuestionData] = useState(null);
  const [examples, setExamples] = useState(null);
  const [concept, setConcept] = useState(() => () => true);
  const [name, setName] = useState(() => () => true);
  const [selected, setSelected] = useState(null);
  const [initialSelection, setInitialSelection] = useState(null);

  const nextQuestion = gameType => {
    const [qData, c, e, name] = createNewQuestion();

    setQuestionData(qData);
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
          onClick={() => {
            const [newSelected, feedback] = learningStrategy(
              questionData,
              examples,
              initialSelection,
              concept
            );

            setStatus("submitted");
            setSelected(newSelected);
            setFeedback(feedback);
          }}
          buttonDisabled={status === "answering"}
        />
      )}
      {status === "submitted" && (
        <Guideline
          title="Placeholder feedback title"
          text={`The student understood the concept: ${feedback}`}
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
