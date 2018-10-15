// @flow
import React from "react";
import { FormattedMessage } from "react-intl";

import type { VirtualStudent } from "./types";

class DumbStudent implements VirtualStudent {
  name: string;
  state: Object;

  thinkingAboutExample = (
    <FormattedMessage
      id="dumbStudent.thinkingAboutExample"
      defaultMessage="..."
    />
  );
  questionExample = (
    <FormattedMessage
      id="dumbStudent.questionExample"
      defaultMessage="Is it a parallelogram?"
    />
  );
  questionExampleMammal =(
    <FormattedMessage
      id="dumbStudent.questionExampleMammal"
      defaultMessage = "Is it a mammal ?"
    />
  );
  questionExampleAdverb =(
    <FormattedMessage
      id="dumbStudent.questionExampleAdverb"
      defaultMessage = "Is it an adverb ?"
    />
  );
  thinkingAboutExercice = (
    <FormattedMessage
      id="dumbStudent.thinkingAboutExercise"
      defaultMessage="..."
    />
  );
  hasRightAnswerExercise = (
    <FormattedMessage
      id="dumbStudent.hasRightAnswerExercise"
      defaultMessage="Super!"
    />
  );
  hasFalseAnswerExercise = (
    <FormattedMessage
      id="dumbStudent.hasFalseAnswerExercise"
      defaultMessage="Ohh!"
    />
  );
  feedbackLessonAlreadyKnow = (
    <FormattedMessage
      id="dumbStudent.feedbackLessonAlreadyKnow"
      defaultMessage="I already know that"
    />
  );
  feedbackLessonDidntKnow = (
    <FormattedMessage
      id="dumbStudent.feedbackLessonDidntKnow"
      defaultMessage="Oh I didn't know that!"
    />
  );
  thinkingAboutExam = (
    <FormattedMessage id="dumbStudent.thinkingAboutExam" defaultMessage="..." />
  );
  givePositiveAnswer = (
    <FormattedMessage
      id="dumbStudent.givePositiveAnswer"
      defaultMessage="Mmm I think this is a parallelogram"
    />
  );
  giveNegativeAnswer = (
    <FormattedMessage
      id="dumbStudent.giveNegativeAnswer"
      defaultMessage="I don't think this is a parallelogram"
    />
  );
  givePositiveAnswerMammal = (
    <FormattedMessage
      id="dumbStudent.givePositiveAnswerMammal"
      defaultMessage="Mmm I think this is a mammal"
    />
  );
  giveNegativeAnswerMammal = (
    <FormattedMessage
      id="dumbStudent.giveNegativeAnswerMammal"
      defaultMessage="I don't think this is a mammal"
    />
  );

  state = {};

  constructor(name: string) {
    this.name = name;
  }

  answer(){
    return Math.random() > 0.5;
  }

  learnLesson() {}

  learn() {}

  alreadyKnowLesson() {
    return Math.random() > 0.5;
  }

  setState() {}

  getState() {
    return "empty";
  }
}

export default DumbStudent;
