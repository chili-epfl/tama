// @flow

import * as React from "react";

import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  studentContainer: {
    height: "100%",
    flex: "0 0 35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1
  },
  studentBubbleText: {
    position: "absolute",
    top: "42%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "90%"
  },
  studentBubble: {
    position: "relative",
    left: "35%",
    width: "50%"
  },
  studentBubbleImage: {
    width: "100%",
    height: "auto"
  },
  studentImage: {
    marginLeft: "20%",
    width: "35%",
    height: "auto"
  },
  blackboardContainer: {
    height: "75%",
    flex: "0 0 30%"
  },
  teacherContainer: {
    height: "100%",
    flex: "0 0 35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1
  },
  teacherBubbleText: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "90%"
  },
  teacherBubbleLeft: {
    position: "relative",
    left: "-5%",
    width: "50%"
  },
  teacherBubbleRight: {
    position: "relative",
    left: "0%",
    width: "50%"
  },
  teacherBubbleImage: {
    width: "100%",
    height: "auto"
  },
  teacherImage: {
    marginLeft: "10%",
    width: "80%",
    height: "auto"
  },
  blackboardImage: {
    width: "100%",
    height: "auto"
  },
  blackboardContainer2: {
    width: "150%",
    transform: "translate(-16.7%)"
  },
  blackboardChildrenContainer: {
    position: "absolute",
    top: "8%",
    left: "8%",
    width: "84%",
    height: "84%",
    margin: "auto"
  }
});

const Student = withStyles(styles)(({ classes, bubbleText, studentImg }) => (
  <div className={classes.studentContainer}>
    <div className={classes.studentBubble}>
      <img
        src="images/student/bubble.png"
        alt="bubble"
        className={classes.studentBubbleImage}
      />
      <div className={classes.studentBubbleText}>{bubbleText}</div>
    </div>
    <img
      src={studentImg}
      className={classes.studentImage}
      alt="virtual_student"
    />
  </div>
));

const Teacher = withStyles(styles)(
  ({
    classes,
    bubbleTextLeft,
    bubbleTextRight,
    genderTeacherMale,
    onTeacherBubbleClick,
    onTeacherBubbleMouseEnter,
    onTeacherBubbleMouseLeave,
    bubbleImageLeft,
    bubbleImageRight,
    styleMouseCursor
  }) => {
    const teacherImage = genderTeacherMale
      ? "images/teacher/teacher_male.png"
      : "images/teacher/teacher_female.png";
    return (
      <div className={classes.teacherContainer}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {bubbleTextLeft && (
            <div
              className={classes.teacherBubbleLeft}
              onClick={() => onTeacherBubbleClick("left")}
              onMouseEnter={() => onTeacherBubbleMouseEnter("left")}
              onMouseLeave={() => onTeacherBubbleMouseLeave("left")}
              style={styleMouseCursor ? { cursor: "pointer" } : {}}
            >
              <img
                src={bubbleImageLeft || "images/teacher/bubble-answer.png"}
                alt="bubble"
                className={classes.teacherBubbleImage}
              />
              <div className={classes.teacherBubbleText}>{bubbleTextLeft}</div>
            </div>
          )}
          {bubbleTextRight && (
            <div
              className={classes.teacherBubbleRight}
              onClick={() => onTeacherBubbleClick("right")}
              onMouseEnter={() => onTeacherBubbleMouseEnter("right")}
              onMouseLeave={() => onTeacherBubbleMouseLeave("right")}
              style={styleMouseCursor ? { cursor: "pointer" } : {}}
            >
              <img
                src={bubbleImageRight || "images/teacher/bubble-answer.png"}
                alt="bubble"
                className={classes.teacherBubbleImage}
                style={{ transform: "scaleX(-1)" }}
              />
              <div className={classes.teacherBubbleText}>{bubbleTextRight}</div>
            </div>
          )}
        </div>
        <img
          src={teacherImage}
          alt="teacher"
          className={classes.teacherImage}
        />
      </div>
    );
  }
);

type PropsT = {
  classes: Object,
  studentBubble: any,
  teacherBubble: any,
  teacherBubbleRight: any,
  children: any,
  teacherBubbleImage: string,
  teacherBubbleImageRight: string,
  studentImg: string,
  genderTeacherMale: boolean,
  onTeacherBubbleClick: Function,
  onTeacherBubbleMouseEnter: Function,
  onTeacherBubbleMouseLeave: Function
};

const nothing = () => {};

const WithBlackboard = ({
  classes,
  studentBubble,
  teacherBubble,
  teacherBubbleRight,
  studentImg,
  teacherBubbleImage,
  teacherBubbleImageRight,
  genderTeacherMale,
  onTeacherBubbleClick,
  onTeacherBubbleMouseEnter,
  onTeacherBubbleMouseLeave,
  children
}: PropsT) => (
  <div className={classes.root}>
    <Student bubbleText={studentBubble} studentImg={studentImg} />
    <div className={classes.blackboardContainer}>
      <div className={classes.blackboardContainer2}>
        <img
          src="images/blackboard.png"
          alt="blackboard"
          className={classes.blackboardImage}
        />
        <div className={classes.blackboardChildrenContainer}>{children}</div>
      </div>
    </div>
    <Teacher
      genderTeacherMale={genderTeacherMale}
      bubbleTextLeft={teacherBubble}
      bubbleTextRight={teacherBubbleRight}
      bubbleImageLeft={teacherBubbleImage}
      bubbleImageRight={teacherBubbleImageRight}
      styleMouseCursor={!!onTeacherBubbleClick}
      onTeacherBubbleClick={onTeacherBubbleClick || nothing}
      onTeacherBubbleMouseEnter={onTeacherBubbleMouseEnter || nothing}
      onTeacherBubbleMouseLeave={onTeacherBubbleMouseLeave || nothing}
    />
  </div>
);

export default withStyles(styles)(WithBlackboard);
