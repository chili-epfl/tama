import React from "react";

import PropTypes from "prop-types";

import ChooseExample from "./ChooseExample";
import ShowExample from "./ShowExample";
import parallelogramData from "../ParallelogramData";
import mammalsData from "../MammalsData";
import adverbsData from "../AdverbsData";

const exampleData = {
  mammals: mammalsData,
  parallelograms: parallelogramData,
  adverbs: adverbsData
};

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
    const { activityChosen } = this.props;
    const example = exampleData[activityChosen][this.state.index];
    const image = activityChosen === "adverbs" ? example.adverb : example.src;

    this.newActivityRef.child("activity_type").set("example");
    this.newActivityRef.child("item").set(image);
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
          activityChosen={this.props.activityChosen}
        />
      );
    }
    const { activityChosen } = this.props;
    const data = exampleData[activityChosen][this.state.index];
    return (
      <ShowExample
        data={data}
        getBackToMenu={this.props.getBackToMenu}
        updateScore={this.props.updateScore}
        student={this.props.student}
        recordExampleActivity={this.recordExampleActivity}
        genderTeacherMale={this.props.genderTeacherMale}
        studentImg={this.props.studentImg}
        activityChosen={activityChosen}
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
