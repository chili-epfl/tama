// @flow
import React from "react";
import { FormattedMessage } from "react-intl";

import type { VirtualStudent, ShapeFeatures } from "./types";

class GodStudent implements VirtualStudent {
  name: string;
  state: Object;

  knowledgeParallelogram = {};
  thinkingAboutExample = (
    <FormattedMessage
      id="godStudent.thinkingAboutExample"
      defaultMessage="Too easy!"
    />
  );
  questionExample = (
    <FormattedMessage
      id="godStudent.questionExample"
      defaultMessage="Is it a parallelogram?"
    />
  );
  questionExampleMammal =(
    <FormattedMessage
      id="dumbStudent.questionExampleMammal"
      defaultMessage = "Is it a mammal ?"
    />
  );
  thinkingAboutExercice = (
    <FormattedMessage
      id="godStudent.thinkingAboutExercise"
      defaultMessage="Too easy!"
    />
  );
  hasRightAnswerExercise = (
    <FormattedMessage
      id="godStudent.hasRightAnswerExercise"
      defaultMessage="I was sure about that!"
    />
  );
  hasFalseAnswerExercise = (
    <FormattedMessage
      id="godStudent.hasFalseAnswerExercise"
      defaultMessage="You're lying!"
    />
  );
  feedbackLessonAlreadyKnow = (
    <FormattedMessage
      id="godStudent.feedbackLessonAlreadyKnow"
      defaultMessage="I already know that (as always)"
    />
  );
  feedbackLessonDidntKnow = (
    <FormattedMessage
      id="godStudent.feedbackLessonDidntKnow"
      defaultMessage="Impossible!"
    />
  );
  thinkingAboutExam = (
    <FormattedMessage
      id="godStudent.thinkingAboutExam"
      defaultMessage="Too easy!"
    />
  );
  givePositiveAnswer = (
    <FormattedMessage
      id="godStudent.givePositiveAnswer"
      defaultMessage="This is a parallelogram"
    />
  );
  giveNegativeAnswer = (
    <FormattedMessage
      id="godStudent.giveNegativeAnswer"
      defaultMessage="This is not a parallelogram"
    />
  );

  constructor(name: string) {
    this.name = name;
  }

  answerParallelogram(shape: ShapeFeatures) {
    return shape.hasFourEdges && shape.hasEveryPairOppositeEdgesParallel;
  }

  learn() {
    // Nothing to learn, he is God
  }

  learnLesson() {
    // Nothing to learn, he is God
  }

  alreadyKnowLesson() {
    return true;
  }

  setState() {}

  getState() {
    return "god";
  }
}

export default GodStudent;
