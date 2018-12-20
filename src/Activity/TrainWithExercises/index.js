import React from "react";

import PropTypes from "prop-types";

import ChooseExercise from "./ChooseExercise";
import ShowExercise from "./ShowExercise";

import parallelogramData from "../ParallelogramData";
import mammalsData from "../MammalsData";
import adverbsData from "../AdverbsData";

const exampleData = {
  mammals: mammalsData,
  parallelograms: parallelogramData,
  adverbs: adverbsData
};

class TrainWithExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      hasChosenExercises: false
    };
    this.newActivityRef = this.props.sessionRef.child("activities").push();
  }

  handleSelectExercises = selected => {
    this.setState({ hasChosenExercises: true, selected });
  };

  recordExerciseActivity = studentAnswers => {
    const { selected } = this.state;
    const images = exampleData[this.props.activityChosen]
      .filter((_, i) => selected.includes(i))
      .map(x => (this.props.activityChosen === "adverbs" ? x.adverb : x.src));

    this.newActivityRef.child("items").set(images);
    this.newActivityRef.child("activity_type").set("exercise");
    this.newActivityRef.child("knowledge").set(this.props.student.getState());
    this.newActivityRef.child("student_answers").set(studentAnswers);
    this.newActivityRef.child("time").set(new Date().getTime());
  };

  render() {
    if (!this.state.hasChosenExercises) {
      return (
        <ChooseExercise
          onSelectExercises={this.handleSelectExercises}
          onNavigationBackToMenu={this.props.getBackToMenu}
          activityChosen={this.props.activityChosen}
        />
      );
    }
    const data = exampleData[this.props.activityChosen];
    return (
      <ShowExercise
        data={data}
        selected={this.state.selected}
        getBackToMenu={this.props.getBackToMenu}
        updateScore={this.props.updateScore}
        student={this.props.student}
        recordExerciseActivity={this.recordExerciseActivity}
        genderTeacherMale={this.props.genderTeacherMale}
        studentImg={this.props.studentImg}
        activityChosen={this.props.activityChosen}
      />
    );
  }
}

TrainWithExercise.propTypes = {
  getBackToMenu: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  sessionRef: PropTypes.object.isRequired,
  genderTeacherMale: PropTypes.bool.isRequired,
  studentImg: PropTypes.string.isRequired,
  activityChosen: PropTypes.string.isRequired
};

export default TrainWithExercise;
