import React from "react";

import PropTypes from "prop-types";

import ChooseExercise from "./ChooseExercise";
import ShowExercise from "./ShowExercise";
import parallelogramData from "../ParallelogramData";
import mammalsData from "../MammalsData";
import adverbsData from "../AdverbsData";

class TrainWithExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      hasChosenExercise: false
    };
    this.newActivityRef = this.props.sessionRef.child("activities").push();
  }

  handleSelectExercise = index => {
    this.setState({ hasChosenExercise: true, index });
  };

  recordExerciseActivity = (userAnswer, studentAnswer) => {
    const image = {
      mammals: mammalsData[this.state.index],
      parallelograms: parallelogramData[this.state.index],
      adverbs: adverbsData[this.state.index] 
    }[this.props.activityChosen]
    if(this.props.activityChosen === "adverbs"){
      this.newActivityRef.child("item").set(image.adverb);
    }else{
      this.newActivityRef.child("item").set(image.src);
    }
    this.newActivityRef.child("item").set(image);
    this.newActivityRef.child("activity_type").set("exercise");
    
    this.newActivityRef.child("knowledge").set(this.props.student.getState());
    this.newActivityRef.child("student_answer").set(studentAnswer);
    this.newActivityRef.child("user_answer").set(userAnswer);
    this.newActivityRef.child("time").set(new Date().getTime());
  };

  render() {
    if (!this.state.hasChosenExercise) {
      return (
        <ChooseExercise
          onSelectExercise={this.handleSelectExercise}
          onNavigationBackToMenu={this.props.getBackToMenu}
          activityChosen = {this.props.activityChosen}
        />
      );
    }
    const data = {
      mammals: mammalsData[this.state.index],
      parallelograms: parallelogramData[this.state.index],
      adverbs: adverbsData[this.state.index] 
    }[this.props.activityChosen]
    return (
      <ShowExercise
        data={data}
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
