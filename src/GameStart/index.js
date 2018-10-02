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
  buttonDisplay:{
    flexBasis: "0%"
  },
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

const GameStart = ({
  classes,
  onClickStart,
  onClickStartMamiferes,
  onClickStartAdverbs,
  studentName,
  studentImg,
  genderTeacherMale
}: PropsT) => (
  <div className={classes.root}>
    <img src="images/logo.png" alt="logo" className={classes.logo} />
    <Grid container justify="space-around" className={classes.mainContent}>
      <Grid item xs={12} sm={4}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.group}
        >
          <VirtualStudent
            bubbleText={
              <FormattedMessage
                id="gameStart.studentName"
                defaultMessage="Hello! My name is {studentName}!"
                values={{ studentName }}
              />
            }
            studentImg={studentImg}
          />
        </Grid>
      </Grid>
      <Grid item container direction="column" wrap="nowrap" xs={4} spacing={8}>
        <Grid item xs = {4}/>  
        <Grid item xs={12} zeroMinWidth className={classes.buttonDisplay}>
          <Button fullWidth={true} variant="contained" color="primary" onClick={onClickStart}>
            <FormattedMessage
                id="gameStart.startTeachinParalelograms"
                defaultMessage="Start teaching Parallelograms to {studentName}"
                values={{ studentName: studentName.replace(/ .*/, "") }}
            />
          </Button>        
        </Grid>
        <Grid item xs={12} className={classes.buttonDisplay} >
            <Button fullWidth={true} variant="contained" color="primary" onClick={onClickStartMamiferes}>
              <FormattedMessage
                id="gameStart.startTeachingMammals"
                defaultMessage="Start teaching Mammiferes to {studentName}"
                values={{ studentName: studentName.replace(/ .*/, "") }}
              />
            </Button>
        </Grid>
        <Grid item xs={12} className={classes.buttonDisplay}>
            <Button fullWidth={true} variant="contained" color="primary" onClick={onClickStartAdverbs}>
              <FormattedMessage
                id="gameStart.startTeachingAdverbs"
                defaultMessage="Start teaching adverbs to {studentName}"
                values={{ studentName: studentName.replace(/ .*/, "") }}
              />
            </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.group}
        >
          <TeacherWelcome
            bubbleText={
              <FormattedMessage
                id="gameStart.teacherBubble"
                defaultMessage="Hello {studentName}! I'm {username}, your teacher!"
                values={{
                  studentName: studentName.replace(/ .*/, ""),
                  username: localStorage.getItem("username")
                }}
              />
            }
            genderTeacherMale={genderTeacherMale}
          />
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(GameStart);
