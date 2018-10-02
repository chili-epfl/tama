import * as React from "react";

import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import VirtualStudent from "../../VirtualStudent";
import TeacherTeaching from "../../Teacher/TeacherTeaching";

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
    this.state = { thinking: false };
  }

  handleClick = userAnswer => {
    const { student, data, recordExampleActivity } = this.props;

    recordExampleActivity(userAnswer);
    this.props.updateScore();
    this.setState({ thinking: true });
    student.learn(userAnswer, data.shapeFeatures);
    setTimeout(() => {
      this.props.getBackToMenu();
    }, 2000);
  };

  render() {
    const { classes, student, data } = this.props;
    const { thinking } = this.state;
    const bubbleText = thinking
      ? student.thinkingAboutExample
      : this.props.activityChosen === "mammals" ? student.questionExampleMammal : student.questionExample;
    return (
      <React.Fragment>
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={4}>
            <Grid
              container
              justify="center"
              alignItems="flex-end"
              className={classes.group}
            >
              <VirtualStudent
                bubbleText={bubbleText}
                studentImg={this.props.studentImg}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid
              container
              justify="center"
              alignItems="flex-start"
              className={classes.shape}
            >
              <img
                className={classes.imagePara}
                src={data.src}
                alt="data"
                width="300"
                height="300"
                border="1px solid"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid
              container
              justify="center"
              alignItems="flex-end"
              className={classes.group}
            >
              <TeacherTeaching
                onClickBubble={this.handleClick}
                positiveAnswer={
                  <FormattedMessage
                    id="showExample.positiveAnswer"
                    defaultMessage="Yes"
                  />
                }
                negativeAnswer={
                  <FormattedMessage
                    id="showExample.negativeAnswer"
                    defaultMessage="No"
                  />
                }
                waitingForStudent={false}
                genderTeacherMale={this.props.genderTeacherMale}
              />
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
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
