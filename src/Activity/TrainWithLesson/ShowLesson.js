// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import type { VirtualStudent, ShapeFeatures } from "../../VirtualStudent/types";
import VirtualStudentComponent from "../../VirtualStudent";

const styles = theme => ({
  root: {
    height: "100%"
  },
  group: {
    height: "100%"
  },
  blackboard: {
    position: "relative"
  },
  textImage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: theme.palette.common.white
  }
});

type StateT = {
  studentAlreadyKnow: boolean
};

type PropsT = {
  student: VirtualStudent,
  lesson: { shapeFeatures: ShapeFeatures, title: string },
  classes: Object,
  getBackToMenu: Function,
  updateScore: Function,
  recordLessonActivity: Function,
  studentImg: string
};

class ShowLesson extends React.Component<PropsT, StateT> {
  constructor(props) {
    super(props);
    const { student, lesson } = this.props;
    this.state = {
      studentAlreadyKnow: student.alreadyKnowLesson(lesson.shapeFeatures)
    };
  }

  componentDidMount() {
    this.props.recordLessonActivity(this.state.studentAlreadyKnow);
    this.props.updateScore();
    this.props.student.learnLesson(this.props.lesson.shapeFeatures);
    setTimeout(() => {
      this.props.getBackToMenu();
    }, 3000);
  }

  render() {
    const { classes } = this.props;
    let bubbleText;
    if (this.state.studentAlreadyKnow) {
      bubbleText = this.props.student.feedbackLessonAlreadyKnow;
    } else {
      bubbleText = this.props.student.feedbackLessonDidntKnow;
    }

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            justify="center"
            alignItems="flex-end"
            className={classes.group}
          >
            <VirtualStudentComponent
              bubbleText={bubbleText}
              studentImg={this.props.studentImg}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.group}
          >
            <div className={classes.blackboard}>
              <img
                src="images/blackboard.png"
                alt="Blackboard"
                width="400"
                height="300"
              />
              <div className={classes.textImage}>
                <Typography variant="title" color="inherit">
                  {this.props.lesson.title}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ShowLesson);
