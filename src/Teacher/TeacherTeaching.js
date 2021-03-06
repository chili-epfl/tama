import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  bubbleThinking1: {
    transform: "scaleX(-1)",
    backgroundColor: "transparent",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    border: "none"
  },
  bubbleThinking2: {
    transform: "scaleX(1)",
    backgroundColor: "transparent",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    border: "none"
  },
  bubbleAnswer: {
    position: "relative",
    left: "10%",
    width: "55%"
  },
  textImageThinking1: {
    position: "absolute",
    top: "39%",
    left: "52%",
    transform: "translate(-50%, -50%) scaleX(-1)",
    textAlign: "center"
  },
  textImageThinking2: {
    position: "absolute",
    top: "39%",
    left: "53%",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
  },
  textImageAnswer: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
  },
  bubbles: {
    display: "flex",
    flexWrap: "noWrap"
  },
  bubbleImage1: {
    width: "100%",
    height: "auto"
  },
  bubbleImage2: {
    width: "100%",
    height: "auto"
  },
  teacherImage: {
    marginLeft: "10%",
    width: "80%",
    height: "auto"
  }
});

class TeacherTeaching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thinking: true,
      bubbleThinking1: "images/teacher/bubble-thinking.png",
      bubbleThinking2: "images/teacher/bubble-thinking.png",
      answer: true
    };
    this.teacherImage = this.props.genderTeacherMale
      ? "images/teacher/teacher_male.png"
      : "images/teacher/teacher_female.png";
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {!this.props.waitingForStudent && (
          <Grid container alignItems="flex-end">
            {this.state.thinking && (
              <div className={classes.bubbles}>
                <button
                  className={classes.bubbleThinking1}
                  onClick={() => {
                    this.setState({ thinking: false, answer: true });
                    this.props.onClickBubble(true);
                  }}
                  onMouseEnter={() =>
                    this.setState({
                      bubbleThinking1:
                        "images/teacher/bubble-thinking-focus.png"
                    })
                  }
                  onMouseLeave={() =>
                    this.setState({
                      bubbleThinking1: "images/teacher/bubble-thinking.png"
                    })
                  }
                >
                  <img
                    src={this.state.bubbleThinking1}
                    className={classes.bubbleImage1}
                    alt="bubble"
                  />
                  <div className={classes.textImageThinking1}>
                    <Typography variant="title">
                      {this.props.positiveAnswer}
                    </Typography>
                  </div>
                </button>
                <button
                  className={classes.bubbleThinking2}
                  onClick={() => {
                    this.setState({ thinking: false, answer: false });
                    this.props.onClickBubble(false);
                  }}
                  onMouseEnter={() =>
                    this.setState({
                      bubbleThinking2:
                        "images/teacher/bubble-thinking-focus.png"
                    })
                  }
                  onMouseLeave={() =>
                    this.setState({
                      bubbleThinking2: "images/teacher/bubble-thinking.png"
                    })
                  }
                >
                  <img
                    src={this.state.bubbleThinking2}
                    className={classes.bubbleImage2}
                    alt="bubble"
                  />
                  <div className={classes.textImageThinking2}>
                    <Typography variant="title">
                      {this.props.negativeAnswer}
                    </Typography>
                  </div>
                </button>
              </div>
            )}
            {!this.state.thinking && (
              <div className={classes.bubbleAnswer}>
                <img
                  src="images/teacher/bubble-answer.png"
                  className={classes.bubbleImage1}
                  alt="bubble"
                />
                <div className={classes.textImageAnswer}>
                  <Typography variant="title">
                    {this.state.answer
                      ? this.props.positiveAnswer
                      : this.props.negativeAnswer}
                  </Typography>
                </div>
              </div>
            )}
          </Grid>
        )}
        <Grid container justify="center" alignItems="flex-start">
          <img
            src={this.teacherImage}
            alt="teacher"
            className={classes.teacherImage}
          />
        </Grid>
      </div>
    );
  }
}

TeacherTeaching.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickBubble: PropTypes.func.isRequired,
  positiveAnswer: PropTypes.object,
  negativeAnswer: PropTypes.object,
  waitingForStudent: PropTypes.bool.isRequired,
  genderTeacherMale: PropTypes.bool.isRequired
};

export default withStyles(styles)(TeacherTeaching);
