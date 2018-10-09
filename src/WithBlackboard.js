// @flow

// @flow
import React from "react";

import { FormattedMessage } from "react-intl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import VirtualStudent from "../VirtualStudent";
import TeacherWelcome from "../Teacher/TeacherWelcome";

const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  mainContent: {
    height: "70%"
  },
  group: {
    height: "100%"
  },
  studentName: {
    textAlign: "center",
    alignSelf: "center"
  },
  logo: {
    width: "auto",
    height: "15%",
    margin: "20px"
  },
  buttonDisplay: {
    flexBasis: "0%"
  }
});

type PropsT = {
  classes: Object,
  onClickStart: void => void,
  onClickStartMamiferes: void => void,
  onClickStartAdverbs: void => void,
  studentName: string,
  studentImg: string,
  genderTeacherMale: boolean
};

const WithBlackboard = ({ classes, studentBuble, children }: PropsT) => (
  <div className={classes.root}>
    <VirtualStudent bubbleText={studentBuble} studentImg={studentImg} />
    {children}
    <TeacherWelcome
      bubbleText={teacherBubble}
      genderTeacherMale={genderTeacherMale}
    />
  </div>
);

export default withStyles(styles)(WithBlackboard);
