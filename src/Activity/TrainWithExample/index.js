import React from "react";

import PropTypes from "prop-types";

import ChooseExample from "./ChooseExample";
import ShowExample from "./ShowExample";
import parallelogramData from "../ParallelogramData";
import mammalsData from "../MammalsData";
import adverbsData from "../AdverbsData";

class TrainWithExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasChosenExample: false
    };
    this.newActivityRef = this.props.sessionRef.child("activities").push();
  }

  handleSelectExample = index => {
    this.setState({ hasChosenExample: true, index });
  };

  recordExampleActivity = userAnswer => {
    this.newActivityRef.child("activity_type").set("example");
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
    this.newActivityRef.child("knowledge").set(this.props.student.getState());
    this.newActivityRef.child("user_answer").set(userAnswer);
    this.newActivityRef.child("time").set(new Date().getTime());
  };

  render() {
    if (!this.state.hasChosenExample) {
      return (
        <ChooseExample
          onSelectExample={this.handleSelectExample}
          onNavigationBackToMenu={this.props.getBackToMenu}
          activityChosen= {this.props.activityChosen}
        />
      );
    }
    const data = {
      mammals: mammalsData[this.state.index],
      parallelograms: parallelogramData[this.state.index],
      adverbs: adverbsData[this.state.index] 
    }[this.props.activityChosen]
    return (
      <ShowExample
        data={data}
        getBackToMenu={this.props.getBackToMenu}
        updateScore={this.props.updateScore}
        student={this.props.student}
        recordExampleActivity={this.recordExampleActivity}
        genderTeacherMale={this.props.genderTeacherMale}
        studentImg={this.props.studentImg}
        activityChosen = {this.props.activityChosen}
      />
    );
  }
}

TrainWithExample.propTypes = {
  getBackToMenu: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  sessionRef: PropTypes.object.isRequired,
  genderTeacherMale: PropTypes.bool.isRequired,
  studentImg: PropTypes.string.isRequired,
  activityChosen: PropTypes.string.isRequired
};

export default TrainWithExample;
