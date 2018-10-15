// @flow

import * as React from "react";
import { FormattedMessage } from "react-intl";

import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import TestConfirmationDialog from "./TestConfirmationDialog";
import SessionTimeline from "./SessionTimeline";
import RulesDialog from "../../SidePanel/RulesDialog";
import WithBlackboard from "../../WithBlackboard";

const styles = theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  sessionTimeline: {
    height: "15%",
    display: "flex",
    alignItems: "center"
  },
  mainContent: {
    flex: 1
  },
  activityChoicesContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  activityChoice: {
    height: "100%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: "8px",
    height: "20%",
    width: "90%",
    "&:hover, &$focusVisible": {
      "& $imageBackdrop": {
        opacity: 0.15
      }
    }
  },
  button_test: {
    position: "relative",
    height: "100%",
    width: "400%",
    "&:hover, &$focusVisible": {
      "& $imageBackdrop": {
        opacity: 0.15
      }
    }
  },
  focusVisible: {},
  textButton: {
    position: "absolute",
    left: "25%",
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  textButtonTest: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 50%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  }
});

const activities = [
  {
    url: "images/example_1536x512.png",
    title: (
      <FormattedMessage
        id="chooseActivity.showExample"
        defaultMessage="Show an example"
      />
    ),
    learningCost: "10",
    teacherText: (
      <FormattedMessage
        id="chooseActivity.showExampleTeacherText"
        defaultMessage="I'm going to show you an example"
      />
    )
  },
  {
    url: "images/exercise_1536x512.png",
    title: (
      <FormattedMessage
        id="chooseActivity.giveExercise"
        defaultMessage="Give an exercise"
      />
    ),
    learningCost: "30",
    teacherText: (
      <FormattedMessage
        id="chooseActivity.giveExerciseTeacherText"
        defaultMessage="I'm going to give you an exercise"
      />
    )
  },
  // {
  //   url: "images/lesson_1536x512.png",
  //   title: (
  //     <FormattedMessage
  //       id="chooseActivity.giveLesson"
  //       defaultMessage="Give a lesson"
  //     />
  //   ),
  //   learningCost: "50",
  //   teacherText: (
  //     <FormattedMessage
  //       id="chooseActivity.giveLessonTeacherText"
  //       defaultMessage="I'm going to give you a definition"
  //     />
  //   )
  // },
  {
    url: "images/medal_600x200.png",
    title: (
      <FormattedMessage
        id="chooseActivity.takeTest"
        defaultMessage="Take the test"
      />
    ),
    learningCost: null,
    teacherText: (
      <FormattedMessage
        id="chooseActivity.takeTestTeacherText"
        defaultMessage="It's time for you to take the test!"
      />
    )
  }
];

const ActivityButton = ({
  classes,
  index,
  image,
  handleButtonClick,
  setState,
  hasChosen
}: Object) => (
  <ButtonBase
    className={classes.button}
    focusVisibleClassName={classes.focusVisible}
    onClick={() => {
      setState({
        teacherBubbleImage: "images/teacher/bubble-answer.png",
        hasChosen: true
      });
      setTimeout(() => handleButtonClick(index), 1000);
    }}
    onMouseEnter={() => {
      if (!hasChosen) {
        setState({
          teacherText: image.teacherText
        });
      }
    }}
    onMouseLeave={() => {
      if (!hasChosen) {
        setState({
          teacherText: (
            <FormattedMessage
              id="gameStart.teacherThinking"
              defaultMessage="..."
            />
          )
        });
      }
    }}
  >
    <span
      className={classes.imageSrc}
      style={{
        backgroundImage: `url(${image.url})`
      }}
    />
    <span className={classes.imageBackdrop} />
    <span className={classes.textButton}>
      <Typography component="span" variant="title" color="inherit">
        {image.title} <br />
        {image.learningCost !== null ? `-${image.learningCost} points` : ""}
      </Typography>
    </span>
  </ButtonBase>
);

type PropsT = {
  classes: Object,
  sessionRef: any,
  alreadyShownRules: boolean,
  genderTeacherMale: boolean,
  studentImg: string,
  hasShownRules: () => void,
  onClickExample: () => void,
  onClickExercise: () => void,
  onConfirmTestDialog: () => void
};

type StateT = {
  openTestDialog: boolean,
  openRulesDialog: boolean,
  teacherText: any,
  teacherBubbleImage: string,
  hasChosen: boolean
};

class ChooseActivity extends React.Component<PropsT, StateT> {
  constructor(props) {
    super(props);
    this.state = {
      openTestDialog: false,
      openRulesDialog: false,
      teacherText: (
        <FormattedMessage id="gameStart.teacherThinking" defaultMessage="..." />
      ),
      teacherBubbleImage: "images/teacher/bubble-thinking.png",
      hasChosen: false
    };
    const { sessionRef, alreadyShownRules, hasShownRules } = this.props;
    sessionRef.parent.once("value").then(snapshot => {
      if (!alreadyShownRules && Object.keys(snapshot.val()).length === 1) {
        this.setState({ openRulesDialog: true });
        hasShownRules();
      }
    });
  }

  handleButtonClick = key => {
    const { onClickExample, onClickExercise } = this.props;
    [
      onClickExample,
      onClickExercise,
      () => this.setState({ openTestDialog: true })
    ][key]();
  };

  render() {
    const { classes, sessionRef, genderTeacherMale, studentImg } = this.props;
    const { teacherText, teacherBubbleImage, hasChosen } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.sessionTimeline}>
          <SessionTimeline sessionRef={sessionRef} />
        </div>
        <WithBlackboard
          studentBubble={
            <FormattedMessage
              id="chooseActivity.studentQuestion"
              defaultMessage="What do we do now?"
            />
          }
          studentImg={studentImg}
          genderTeacherMale={genderTeacherMale}
          teacherBubble={teacherText}
          teacherBubbleImage={teacherBubbleImage}
        >
          <div className={classes.activityChoicesContainer}>
            {activities.map((image, index) => (
              <ActivityButton
                key={image.url}
                image={image}
                index={index}
                classes={classes}
                hasChosen={hasChosen}
                handleButtonClick={this.handleButtonClick}
                setState={x => this.setState(x)}
              />
            ))}
          </div>
        </WithBlackboard>
        <TestConfirmationDialog
          onConfirmTestDialog={this.props.onConfirmTestDialog}
          openTestDialog={this.state.openTestDialog}
          onCloseTestDialog={() => this.setState({ openTestDialog: false })}
        />
        <RulesDialog
          openRulesDialog={this.state.openRulesDialog}
          onCloseRulesDialog={() => this.setState({ openRulesDialog: false })}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ChooseActivity);
