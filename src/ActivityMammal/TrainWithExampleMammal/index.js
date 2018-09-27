import React from "react";

import PropTypes from "prop-types";

import ChooseExample from "./ChooseExample";
import ShowExample from "./ShowExample";
import mammalsData from "../MammalsData";

class TrainWithExampleMammal extends React.Component {
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
    const image = mammalsData[this.state.index].src;
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
        />
      );
    }
    const parallelogram = mammalsData[this.state.index];
    return (
      <ShowExample
        parallelogram={parallelogram}
        getBackToMenu={this.props.getBackToMenu}
        updateScore={this.props.updateScore}
        student={this.props.student}
        recordExampleActivity={this.recordExampleActivity}
        genderTeacherMale={this.props.genderTeacherMale}
        studentImg={this.props.studentImg}
      />
    );
  }
}

TrainWithExampleMammal.propTypes = {
  getBackToMenu: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  sessionRef: PropTypes.object.isRequired,
  genderTeacherMale: PropTypes.bool.isRequired,
  studentImg: PropTypes.string.isRequired
};

export default TrainWithExampleMammal;
