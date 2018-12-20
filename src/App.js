// @flow

import * as React from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange";
import { IntlProvider, addLocaleData } from "react-intl";
import localeEn from "react-intl/locale-data/en";
import localeFr from "react-intl/locale-data/fr";

import firebase from "./firebase";
import RegistrationForm from "./RegistrationForm";
import ChooseActivity from "./Activity/ChooseActivity";
import TrainWithExample from "./Activity/TrainWithExample";
import TrainWithExercises from "./Activity/TrainWithExercises";
import TrainWithLesson from "./Activity/TrainWithLesson";
import TestView from "./Activity/TestView";
import Home from "./Home";
import GameStart from "./GameStart";
import getVirtualStudent from "./VirtualStudent/utils";
import AppDrawer from "./AppDrawer";
import SessionHistory from "./SessionHistory";
import messagesFr from "./translations/fr.json";
import messagesEn from "./translations/en.json";
import type { VirtualStudent } from "./VirtualStudent/types";
import parallelogramData from "./Activity/ParallelogramData";
import Leaderboard, { updateLeaderboard } from "./Leaderboard";
import nameData from "./NameData";
import Stats from "./Statistics";
import NotEnoughPointsSnackbar from "./NotEnoughPointsSnackbar";
import mammalsData from "./Activity/MammalsData";
import adverbsData from "./Activity/AdverbsData";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
    background: {
      paper: "#fff",
      default: "#f5f5f5"
    }
  },
  status: {
    danger: "red"
  }
});

const messages = {
  fr: messagesFr,
  en: messagesEn
};

export const gridScores = [
  0,
  10,
  25,
  50,
  100,
  200,
  500,
  1000,
  2000,
  5000,
  10000
];

const scoreCost = {
  example: -10,
  exercise: -30,
  lesson: -50
};

const numStudentImg = 5;

type PropsT = {};

type StateT = {
  hasBeenWelcomed: boolean,
  isRegistered: boolean,
  hasChosenActivityType: boolean,
  hasChosenActivity: string,
  view: string,
  score: number,
  scoreDisplayed: string,
  language: string,
  test: Object,
  alreadyShownRules: boolean,
  openSnackbar: boolean,
  displayResultTest: boolean,
  activityChosen: string,
};

class App extends React.Component<PropsT, StateT> {
  student: VirtualStudent;
  studentName: string;
  sessionRef: Object;
  finalScore: number;
  activityScore: number;
  genderTeacherMale: boolean;
  genderStudent: string;
  studentImgId: number;
  studentLearningImg: string;
  studentBackpackImg: string;
  studentAvatar: string;

  constructor(props: PropsT) {
    super(props);
    const language =
      localStorage.getItem("lang") || navigator.language.split(/[-_]/)[0];
    this.state = {
      hasBeenWelcomed: false,
      isRegistered: !!localStorage.getItem("user_id"),
      hasChosenActivityType: false,
      hasChosenActivity: "",
      view: "home",
      score: 200,
      scoreDisplayed: "200",
      language,
      test: {},
      alreadyShownRules: false,
      openSnackbar: false,
      displayResultTest: false,
      activityChosen: "",
    };
    this.initializeConstructorVars();
    addLocaleData([...localeEn, ...localeFr]);
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", this.state.language);
    }
  }

  initializeConstructorVars = () => {
    this.genderTeacherMale = !!this.genderTeacherMale;

    this.genderStudent = Math.random() > 0.5 ? "male" : "female";
    const { language } = this.state;
    const fNameIdx =
      Math.random() * nameData[language].firstNames[this.genderStudent].length;
    const lNameIdx = Math.random() * nameData[language].lastNames.length;
    const firstName =
      nameData[language].firstNames[this.genderStudent][Math.floor(fNameIdx)];
    const lastName = nameData[language].lastNames[Math.floor(lNameIdx)];
    this.studentName = `${firstName} ${lastName}`;

    this.student = getVirtualStudent(this.studentName);

    this.studentImgId = Math.floor(Math.random() * numStudentImg);
    this.studentLearningImg = `/images/student/student_${
      this.genderStudent
    }_learning_${this.studentImgId}.png`;
    this.studentBackpackImg = `/images/student/student_${
      this.genderStudent
    }_backpack_${this.studentImgId}.png`;
    this.studentAvatar = `/images/student/student_${
      this.genderStudent
    }_avatar_${this.studentImgId}.png`;
  };

  startNewGame = () => {
    this.initializeConstructorVars();
    this.setState({
      hasBeenWelcomed: false,
      hasChosenActivityType: false,
      hasChosenActivity: "",
      score: 200,
      scoreDisplayed: "200",
      view: "game_start",
      test: {},
      displayResultTest: false
    });
  };

  updateScore = (points: number) => {
    this.sessionRef.update({ score: this.state.score + points });
    this.setState({ score: this.state.score + points });
    if (points < 0) {
      this.setState({ scoreDisplayed: this.state.scoreDisplayed + points });
    } else {
      this.setState({
        scoreDisplayed: `${this.state.scoreDisplayed}+${points}`
      });
    }
    setTimeout(() => {
      this.setState({ scoreDisplayed: this.state.score.toString() });
    }, 2000);
  };
  gameStartButtons = (view , activityChosen, isRegistered, userId) =>{
    this.setState({
      hasBeenWelcomed: true,
      view,
      activityChosen
    });
    this.sessionRef.child("topic").set(activityChosen);
    if (isRegistered && userId) {
      this.recordNewSession(userId);
    }
  }

  runTest = () => {
    const questions = {
      adverbs:[...adverbsData],
      mammals: [...mammalsData],
      parallelograms: [...parallelogramData]
    }[this.state.activityChosen]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)
      .map(x => ({
        src: x.src || x.adverb,
        shapeFeatures: x.shapeFeatures,
        valid: x.valid
      }));
    const answers = questions.map(q =>
      this.student.answer(q.shapeFeatures)
    );
    const grade = questions.reduce(
      (g, q, i) => (q.valid === answers[i] ? g + 1 : g),
      0
    );
    const testScore = gridScores[grade];
    const test = { questions, answers, grade, testScore };

    const testRef = this.sessionRef.child("test");
    testRef.set(test);
    this.activityScore = this.state.score;
    this.finalScore = testScore + this.activityScore;
    this.sessionRef.child("finalScore/").set(this.finalScore);

    this.setState({
      hasChosenActivityType: true,
      hasChosenActivity: "test",
      test
    });

    const userId = localStorage.getItem("user_id");
    const username = localStorage.getItem("username");
    if (userId && username) {
      updateLeaderboard(userId, username, this.finalScore);
    }
  };

  recordNewSession = (userId: string) => {
    const sessionId = firebase
      .database()
      .ref()
      .child("sessions")
      .push().key;
    this.sessionRef = firebase
      .database()
      .ref(`/sessions/${userId}/${sessionId}`);
    this.sessionRef.child("start_time").set(new Date().getTime());
    this.sessionRef.child("score").set(200);
    this.sessionRef.child("student_name").set(this.studentName);
  };

  render() {
    const { view, isRegistered, hasChosenActivity } = this.state;
    let displayed;
    const userId: string = localStorage.getItem("user_id") || "";
    if (view === "home") {
      displayed = (
        <Home
          isRegistered={isRegistered}
          onClickStart={() => {
            if (this.state.isRegistered && userId) {
              this.recordNewSession(userId);
              const dbRef = firebase.database().ref(`/users/${userId}/`);
              dbRef.once("value").then(snapshot => {
                this.genderTeacherMale = snapshot.val().gender === "male";
                this.setState({ view: "game_start" });
              });
            } else {
              this.setState({ view: "registration_form" });
            }
          }}
        />
      );
    } else if (view === "registration_form") {
      displayed = (
        <RegistrationForm
          onSubmit={newUserId => {
            this.recordNewSession(newUserId);
            const dbRef = firebase.database().ref(`/users/${newUserId}/`);
            dbRef.once("value").then(snapshot => {
              this.genderTeacherMale = snapshot.val().gender === "male";
              this.setState({ isRegistered: true, view: "game_start" });
            });
          }}
        />
      );
    } else if (view === "game_start") {
      displayed = (
        <GameStart
          onClickStart={() => {
            this.gameStartButtons("chooseActivity", "parallelograms", isRegistered, userId)
          }}
          onClickStartMamiferes={() => {
            this.gameStartButtons("chooseActivity", "mammals",isRegistered, userId)
          }}
          onClickStartAdverbs={() => {
            this.gameStartButtons("chooseActivity","adverbs", isRegistered, userId)
          }}
          studentName={this.studentName}
          studentImg={this.studentBackpackImg}
          genderTeacherMale={this.genderTeacherMale}
        />
      );
    }else if (view === "leaderboard") {
      displayed = <Leaderboard />;
    } else if (view === "stats") {
      displayed = <Stats />;
    } else if (view === "history") {
      displayed = (
        <SessionHistory
          studentName={this.studentName}
          sessionRef={this.sessionRef}
          student={this.student}
          genderTeacherMale={this.genderTeacherMale}
          studentAvatar={this.studentAvatar}
        />
      );
    } else if (view === "chooseActivity") {
      if (!this.state.hasChosenActivityType) {
        displayed = (
          <ChooseActivity
            sessionRef={this.sessionRef}
            onClickExample={() => {
              if (this.state.score + scoreCost.example >= 0) {
                this.setState({
                  hasChosenActivityType: true,
                  hasChosenActivity: "example"
                });
              } else {
                this.setState({ openSnackbar: true });
              }
            }}
            onClickExercise={() => {
              if (this.state.score + scoreCost.exercise >= 0) {
                this.setState({
                  hasChosenActivityType: true,
                  hasChosenActivity: "exercise"
                });
              } else {
                this.setState({ openSnackbar: true });
              }
            }}
            onClickLesson={() => {
              if (this.state.score + scoreCost.lesson >= 0) {
                this.setState({
                  hasChosenActivityType: true,
                  hasChosenActivity: "lesson"
                });
              } else {
                this.setState({ openSnackbar: true });
              }
            }}
            onConfirmTestDialog={this.runTest}
            alreadyShownRules={this.state.alreadyShownRules}
            hasShownRules={() => this.setState({ alreadyShownRules: true })}
            studentImg={this.studentLearningImg}
            genderTeacherMale={this.genderTeacherMale}
          />
        );
      }else if (this.state.hasChosenActivityType) {
        if (hasChosenActivity === "example") {
          displayed = (
            <TrainWithExample
              getBackToMenu={() =>
                this.setState({ hasChosenActivityType: false })
              }
              updateScore={() => this.updateScore(scoreCost.example)}
              student={this.student}
              sessionRef={this.sessionRef}
              genderTeacherMale={this.genderTeacherMale}
              studentImg={this.studentLearningImg}
              activityChosen = {this.state.activityChosen}
            />
          );
        } else if (hasChosenActivity === "exercise") {
          displayed = (
            <TrainWithExercises
              getBackToMenu={() =>
                this.setState({ hasChosenActivityType: false })
              }
              updateScore={() => this.updateScore(scoreCost.exercise)}
              student={this.student}
              sessionRef={this.sessionRef}
              genderTeacherMale={this.genderTeacherMale}
              studentImg={this.studentLearningImg}
              activityChosen = {this.state.activityChosen}
            />
          );
        } else if (hasChosenActivity === "lesson") {
          displayed = (
            <TrainWithLesson
              getBackToMenu={() =>
                this.setState({ hasChosenActivityType: false })
              }
              updateScore={() => this.updateScore(scoreCost.lesson)}
              student={this.student}
              sessionRef={this.sessionRef}
              studentImg={this.studentLearningImg}
              activityChosen = {this.state.activityChosen}
            />
          );
        } else if (hasChosenActivity === "test") {
          displayed = (
            <TestView
              startNewGame={this.startNewGame}
              student={this.student}
              finalScore={this.finalScore}
              activityScore={this.activityScore}
              test={this.state.test}
              studentName={this.studentName}
              updateScore={() =>
                this.setState({
                  score: this.finalScore,
                  scoreDisplayed: String(this.finalScore)
                })
              }
              displayResultTest={this.state.displayResultTest}
              hasSeenQuestionsTest={() =>
                this.setState({ displayResultTest: true })
              }
              studentImg={this.studentLearningImg}
              activityChosen = {this.state.activityChosen}
            />
          );
        }
      }
    }
    return (
      <IntlProvider
        locale={this.state.language}
        messages={messages[this.state.language]}
      >
        <MuiThemeProvider theme={theme}>
          <AppDrawer
            hasBeenWelcomed={this.state.hasBeenWelcomed}
            isRegistered={this.state.isRegistered}
            startNewGame={this.startNewGame}
            onUnregister={() => {
              this.startNewGame();
              localStorage.removeItem("user_id");
              localStorage.removeItem("username");
              this.setState({
                isRegistered: false,
                alreadyShownRules: false
              });
            }}
            scoreDisplayed={this.state.scoreDisplayed}
            changeView={v => this.setState({ view: v })}
            testStarted={hasChosenActivity === "test"}
            mainContent={displayed}
            changeLanguage={language => {
              localStorage.setItem("lang", language);
              this.setState({ language });
            }}
            studentName={this.studentName}
          />
          <NotEnoughPointsSnackbar
            open={this.state.openSnackbar}
            handleClose={() => this.setState({ openSnackbar: false })}
          />
        </MuiThemeProvider>
      </IntlProvider>
    );
  }
}

export default App;
