// @flow

import React from "react";
import { FormattedMessage } from "react-intl";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import Cancel from "@material-ui/icons/Cancel";
import CheckCircle from "@material-ui/icons/CheckCircle";

import TestScoreBar from "./TestScoreBar";
import styles from "./styles";

const Avatar = ({ img, classes }: any) => (
  <img src={img} alt="student" className={classes.studentImg} />
);

const ScoreBoard = ({ show, classes, activityScore, testScore }: any) => (
  <Paper className={classes.scoreBoardPaper}>
    <Table className={classes.table}>
      <TableBody>
        <Slide in={show > 12} direction="up">
          <TableRow>
            <TableCell>
              <FormattedMessage
                id="test.startingpoints"
                defaultMessage="Starting points"
              />
            </TableCell>
            <TableCell>{200}</TableCell>
          </TableRow>
        </Slide>
        <Slide in={show > 13} direction="up">
          <TableRow>
            <TableCell>
              <FormattedMessage
                id="test.teachingpoints"
                defaultMessage="Teaching activities used"
              />
            </TableCell>
            <TableCell>{activityScore - 200}</TableCell>
          </TableRow>
        </Slide>
        <Slide in={show > 14} direction="up">
          <TableRow>
            <TableCell>
              <FormattedMessage
                id="test.gradebonus"
                defaultMessage="Grade bonus"
              />
            </TableCell>
            <TableCell>{testScore}</TableCell>
          </TableRow>
        </Slide>
        <Slide in={show > 15} direction="up">
          <TableRow>
            <TableCell>
              <FormattedMessage
                id="test.totalscore"
                defaultMessage="Total score"
              />
            </TableCell>
            <TableCell>{testScore + activityScore}</TableCell>
          </TableRow>
        </Slide>
      </TableBody>
    </Table>
  </Paper>
);

const LeaderboardPeek = ({ show, classes }: any) => (
  <Paper className={classes.scoreBoardPaper}>
    <Table className={classes.table}>
      <Slide in={show > 999} direction="up">
        <TableBody>
          <TableRow>
            <TableCell>Daily score</TableCell>
            <TableCell>XXX</TableCell>
            <TableCell>{"=>"}</TableCell>
            <Slide in={show > 999} direction="up">
              <TableCell>YYY</TableCell>
            </Slide>
          </TableRow>
          <TableRow>
            <TableCell>Weekly score</TableCell>
            <TableCell>XXX</TableCell>
            <TableCell>{"=>"}</TableCell>
            <Slide in={show > 999} direction="up">
              <TableCell>YYY</TableCell>
            </Slide>
          </TableRow>
          <TableRow>
            <TableCell>All time score</TableCell>
            <TableCell>XXX</TableCell>
            <TableCell>{"=>"}</TableCell>
            <Slide in={show > 999} direction="up">
              <TableCell>YYY</TableCell>
            </Slide>
          </TableRow>
        </TableBody>
      </Slide>
    </Table>
  </Paper>
);

const Answer = ({ src, isCorrect, show, classes }: any) => (
  <Grow in={show} timeout={400} direction="left" className={classes.answer}>
    <div>
      <img src={src} alt="test question" className={classes.shape} />
      {isCorrect ? (
        <CheckCircle color="primary" className={classes.statusIcon} />
      ) : (
        <Cancel color="error" className={classes.statusIcon} />
      )}
    </div>
  </Grow>
);

const QuestionsList = ({ questions, index, classes }: any) => (
  <div className={classes.questionList}>
    {questions
      .filter(q => q.index < index)
      .map(q => (
        <Answer
          key={q.src}
          src={q.src}
          isCorrect={q.isCorrect}
          classes={classes}
          show
        />
      ))}
  </div>
);

type PropsT = {
  startNewGame: () => void,
  activityScore: number,
  test: Object,
  classes: Object,
  studentImg: string,
  activityChosen: string
};

type StateT = {
  index: number
};

class TestStudent extends React.Component<PropsT, StateT> {
  interval: any;

  constructor(props: PropsT) {
    super(props);

    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const index = this.state.index + 1;
      this.setState({ index });
      if (index > 20) {
        clearInterval(this.interval);
      }
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    const { classes, test, studentImg, activityScore } = this.props;
    const { index } = this.state;
    const qs = test.questions.map(({ src, valid }, i) => ({
      src,
      index: i,
      answer: test.answers[i],
      isCorrect: valid === test.answers[i]
    }));
    const qY = qs.filter(x => x.answer);
    const qN = qs.filter(x => !x.answer);
    const scoreIndex = qs.filter(x => x.isCorrect && x.index < index).length;

    return (
      <Grid
        container
        spacing={16}
        className={classes.root}
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} className={classes.scoreBar}>
          <TestScoreBar completed={scoreIndex} />
        </Grid>
        <Grid item xs={3} className={classes.avatar}>
          <Avatar classes={classes} img={studentImg} />
          <div>
            <FormattedMessage id="test.grade" defaultMessage="Grade: " />
            {scoreIndex} / {Math.min(10, index)}
          </div>
        </Grid>
        <Grid item xs={9} className={classes.studentAnswers}>
        <FormattedMessage
          id= {{ mammals: "test.areMammal", parallelograms: "test.arepara" }[this.props.activityChosen]}
          defaultMessage="I think these ARE mammals:"
        />
          <QuestionsList classes={classes} questions={qY} index={index} />
          <FormattedMessage
            id= {{ mammals: "test.arenotMammal", parallelograms: "test.arenotpara" }[this.props.activityChosen]}
            defaultMessage="I think these ARE not mammals:"
          />
          <QuestionsList classes={classes} questions={qN} index={index} />
        </Grid>
        <Grid item xs={6} className={classes.scoreBoard}>
          <ScoreBoard
            show={index}
            activityScore={activityScore}
            testScore={test.testScore}
            classes={classes}
          />
        </Grid>
        <Grid item xs={6} className={classes.scoreBoard}>
          <LeaderboardPeek show={index} classes={classes} />
        </Grid>
        <Grid item xs={12} className={classes.bottomButton}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.startNewGame()}
          >
            <FormattedMessage
              id="testResult.startAgain"
              defaultMessage="Start a new game"
            />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TestStudent);
