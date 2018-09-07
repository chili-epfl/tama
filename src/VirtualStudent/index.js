// @flow

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  textImage: {
    position: "absolute",
    top: "42%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "90%"
  },
  bubble: {
    position: "relative",
    left: "40%",
    width: "55%"
  },
  bubbleImage: {
    width: "100%",
    height: "auto"
  },
  studentImage: {
    marginLeft: "20%",
    width: "35%",
    height: "auto"
  }
});

const VirtualStudent = ({ classes, bubbleText, studentImg }) => (
  <div className={classes.root}>
    <div className={classes.bubble}>
      <img
        src="images/student/bubble.png"
        alt="bubble"
        className={classes.bubbleImage}
      />
      <div className={classes.textImage}>{bubbleText}</div>
    </div>
    <img
      src={studentImg}
      className={classes.studentImage}
      alt="virtual_student"
    />
  </div>
);

VirtualStudent.propTypes = {
  classes: PropTypes.object.isRequired,
  bubbleText: PropTypes.object.isRequired,
  studentImg: PropTypes.string.isRequired
};

export default withStyles(styles)(VirtualStudent);
