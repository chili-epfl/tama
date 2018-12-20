// @flow
import React from "react";

import { FormattedMessage } from "react-intl";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import WithBlackboard from "../WithBlackboard";

const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  logo: {
    width: "auto",
    height: "15%",
    margin: "20px"
  },
  buttonContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  button: {
    marginBottom: 16
  }
});

const TopicButtons = withStyles(styles)(
  ({ classes, onClickStart, studentName }) => (
    <div className={classes.buttonContainer}>
      <Button
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => onClickStart("parallelograms")}
      >
        <FormattedMessage
          id="gameStart.startTeachinParalelograms"
          defaultMessage="Start teaching Parallelograms to {studentName}"
          values={{ studentName: studentName.replace(/ .*/, "") }}
        />
      </Button>
      <Button
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => onClickStart("mammals")}
      >
        <FormattedMessage
          id="gameStart.startTeachingMammals"
          defaultMessage="Start teaching Mammiferes to {studentName}"
          values={{ studentName: studentName.replace(/ .*/, "") }}
        />
      </Button>
      <Button
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => onClickStart("adverbs")}
      >
        <FormattedMessage
          id="gameStart.startTeachingAdverbs"
          defaultMessage="Start teaching adverbs to {studentName}"
          values={{ studentName: studentName.replace(/ .*/, "") }}
        />
      </Button>
    </div>
  )
);

type PropsT = {
  classes: Object,
  onClickStart: void => void,
  studentName: string,
  studentImg: string,
  genderTeacherMale: boolean
};

const GameStart = ({
  classes,
  onClickStart,
  studentName,
  studentImg,
  genderTeacherMale
}: PropsT) => (
  <div className={classes.root}>
    <img src="images/logo.png" alt="logo" className={classes.logo} />
    <WithBlackboard
      genderTeacherMale={genderTeacherMale}
      studentImg={studentImg}
      studentBubble={
        <FormattedMessage
          id="gameStart.studentName"
          defaultMessage="Hello! My name is {studentName}!"
          values={{ studentName }}
        />
      }
      teacherBubble={
        <FormattedMessage
          id="gameStart.teacherBubble"
          defaultMessage="Hello {studentName}! I'm {username}, your teacher!"
          values={{
            studentName: studentName.replace(/ .*/, ""),
            username: localStorage.getItem("username")
          }}
        />
      }
    >
      <TopicButtons onClickStart={onClickStart} studentName={studentName} />
    </WithBlackboard>
  </div>
);

export default withStyles(styles)(GameStart);
