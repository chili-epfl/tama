import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import WithBlackboard from "./../../WithBlackboard";

const styles = () => ({
  root: {
    height: "100%"
  },
  group: {
    height: "100%"
  },
  shape: {
    marginTop: "5%"
  }
});

class ShowExercise extends React.Component {
  constructor(props) {
    super(props);
    const { selected, student, data } = props;
    this.state = {
      studentAnswers: selected.map(exampleIndex =>
        student.answer(data[exampleIndex].shapeFeatures)
      )
    };
  }

  componentDidMount() {
    this.props.updateScore();
  }

  handleClick = () => {
    this.props.recordExerciseActivity(this.state.studentAnswers);
    this.props.getBackToMenu();
  };

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  render() {
    const {
      classes,
      studentImg,
      genderTeacherMale,
      data,
      selected
    } = this.props;

    return (
      <WithBlackboard
        studentBubble="This is what I think."
        studentImg={studentImg}
        genderTeacherMale={genderTeacherMale}
        teacherBubbleImage="images/teacher/bubble-answer.png"
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            overflow: "auto"
          }}
        >
          {selected.map((exampleIndex, answerIndex) => (
            <div
              key={exampleIndex}
              style={{
                height: "25%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <img
                className={classes.imagePara}
                src={data[exampleIndex].src}
                alt="example"
                style={{ height: "100%", width: "auto" }}
              />
              <span style={{ color: "white" }}>
                {this.state.studentAnswers[answerIndex]
                  ? "This is a parallelogram"
                  : "This is NOT a parallelogram"}
              </span>
              <Button
                variant="contained"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 30,
                  zIndex: 99
                }}
                onClick={this.handleClick}
              >
                OK
              </Button>
            </div>
          ))}
        </div>
      </WithBlackboard>
    );
  }
}

ShowExercise.propTypes = {
  classes: PropTypes.object.isRequired,
  getBackToMenu: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  updateScore: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  recordExerciseActivity: PropTypes.func.isRequired,
  genderTeacherMale: PropTypes.bool.isRequired,
  studentImg: PropTypes.string.isRequired,
  selected: PropTypes.array.isRequired
};

export default withStyles(styles)(ShowExercise);
