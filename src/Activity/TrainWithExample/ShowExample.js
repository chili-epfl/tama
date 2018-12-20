import * as React from "react";

import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import WithBlackboard from "../../WithBlackboard";

const styles = {
  root: {
    height: "100%"
  },
  group: {
    height: "100%"
  },
  shape: {
    marginTop: "5%"
  }
};

class ShowExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentThinking: false,
      bubbleImageLeft: "images/teacher/bubble-thinking.png",
      bubbleImageRight: "images/teacher/bubble-thinking.png",
      teacherAnswer: ""
    };
  }

  handleClick = userAnswer => {
    const { student, data, recordExampleActivity } = this.props;
    recordExampleActivity(userAnswer);
    this.props.updateScore();
    student.learn(userAnswer, data.shapeFeatures);
    setTimeout(() => {
      this.props.getBackToMenu();
    }, 2000);
  };

  render() {
    const {
      classes,
      student,
      data,
      studentImg,
      genderTeacherMale,
      activityChosen
    } = this.props;
    const {
      studentThinking,
      teacherAnswer,
      bubbleImageLeft,
      bubbleImageRight
    } = this.state;

    const studentBubbleText = this.textActivity(studentThinking, student);
    const teacherBubbleTextPositive = (
      <FormattedMessage id="showExample.positiveAnswer" defaultMessage="Yes" />
    );
    const teacherBubbleTextNegative = (
      <FormattedMessage id="showExample.negativeAnswer" defaultMessage="No" />
    );
    const textAnswer =
      teacherAnswer === "left"
        ? teacherBubbleTextPositive
        : teacherBubbleTextNegative;

    return (
      <WithBlackboard
        studentBubble={studentBubbleText}
        studentImg={studentImg}
        genderTeacherMale={genderTeacherMale}
        teacherBubble={!teacherAnswer ? teacherBubbleTextPositive : textAnswer}
        teacherBubbleRight={
          !teacherAnswer ? teacherBubbleTextNegative : undefined
        }
        teacherBubbleImage={
          !teacherAnswer ? bubbleImageLeft : "images/teacher/bubble-answer.png"
        }
        teacherBubbleImageRight={!teacherAnswer ? bubbleImageRight : undefined}
        onTeacherBubbleClick={side => {
          this.setState({
            studentThinking: true,
            teacherAnswer: side
          });
          this.handleClick(side === "left");
        }}
        onTeacherBubbleMouseEnter={side => {
          const bubbleImagekey =
            side === "right" ? "bubbleImageRight" : "bubbleImageLeft";
          this.setState({
            [bubbleImagekey]: "images/teacher/bubble-thinking-focus.png"
          });
        }}
        onTeacherBubbleMouseLeave={side => {
          const bubbleImagekey =
            side === "right" ? "bubbleImageRight" : "bubbleImageLeft";
          this.setState({
            [bubbleImagekey]: "images/teacher/bubble-thinking.png"
          });
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center"
          }}
        >
          {activityChosen === "adverbs" ? (
            console.log(data) || (
              <p>{`${data.sentence1} ${data.adverb} ${data.sentence2}`}</p>
            )
          ) : (
            <img
              className={classes.imagePara}
              src={data.src}
              alt="example"
              style={{ height: "100%", width: "auto" }}
            />
          )}
        </div>
      </WithBlackboard>
    );
  }

  textActivity(thinking, student) {
    const question = {
      mammals: student.questionExampleMammal,
      parallelograms: student.questionExample,
      adverbs: student.questionExampleAdverb
    }[this.props.activityChosen];
    return thinking ? student.thinkingAboutExample : question;
  }
}

ShowExample.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  getBackToMenu: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  recordExampleActivity: PropTypes.func.isRequired,
  genderTeacherMale: PropTypes.bool.isRequired,
  studentImg: PropTypes.string.isRequired,
  activityChosen: PropTypes.string.isRequired
};

export default withStyles(styles)(ShowExample);
