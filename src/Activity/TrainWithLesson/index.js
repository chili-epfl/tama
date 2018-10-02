import React from "react";

import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import ChooseLesson from "./ChooseLesson";
import ShowLesson from "./ShowLesson";
import lesson from "./Lesson";

class TrainWithLesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      hasChosenLesson: false
    };
    this.newActivityRef = this.props.sessionRef.child("activities").push();
  }

  handleSubmit = index => {
    this.setState({ index, hasChosenLesson: true });
  };

  recordLessonActivity = studentAlreadyKnow => {
    const { intl } = this.props;
    this.newActivityRef.child("activity_type").set("lesson");
    this.newActivityRef.child("knowledge").set(this.props.student.getState());
    this.newActivityRef
      .child("item")
      .set(intl.formatMessage({ id: lesson[this.state.index].title.props.id }));
    this.newActivityRef.child("time").set(new Date().getTime());
    this.newActivityRef.child("student_already_know").set(studentAlreadyKnow);
  };

  render() {
    if (!this.state.hasChosenLesson) {
      return (
        <ChooseLesson
          onSubmit={this.handleSubmit}
          onNavigationBackToMenu={this.props.getBackToMenu}
        />
      );
    }
    return (
      <ShowLesson
        lesson={lesson[this.state.index]}
        getBackToMenu={this.props.getBackToMenu}
        updateScore={this.props.updateScore}
        student={this.props.student}
        recordLessonActivity={this.recordLessonActivity}
        studentImg={this.props.studentImg}
      />
    );
  }
}

TrainWithLesson.propTypes = {
  getBackToMenu: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  sessionRef: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  studentImg: PropTypes.string.isRequired,
  activityChosen: PropTypes.string.isRequired
};

export default injectIntl(TrainWithLesson);
