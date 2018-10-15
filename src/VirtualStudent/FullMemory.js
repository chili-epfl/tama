// @flow
import React from "react";
import { FormattedMessage } from "react-intl";

import type { VirtualStudent, ShapeFeatures } from "./types";

const featureList = [
  "hasThreeEdges",
  "hasFourEdges",
  "hasFiveEdges",
  "hasSixEdges",
  "hasSameLengthEdges",
  "hasSameLengthEveryPairOppositeEdges",
  "hasSameLengthOnePairOppositeEdges",
  "hasEveryPairOppositeEdgesParallel",
  "hasAtLeastOnePairOppositeEdgesParallel",
  "isRed",
  "isGreen",
  "isBlue",
  "isRotated",
  "isThin",
  "hasEveryRightAngles",
  "hasAtLeastOneRightAngle"
];

class FullMemory implements VirtualStudent {
  state: { model: Function, features: string };
  name: string;
  models = [];
  memory = [];

  thinkingAboutExample = (
    <FormattedMessage
      id="quickLearnerStudent.thinkingAboutExample"
      defaultMessage="..."
    />
  );
  questionExample = (
    <FormattedMessage
      id="quickLearnerStudent.questionExample"
      defaultMessage="Is it a parallelogram?"
    />
  );
  questionExampleMammal = (
    <FormattedMessage
      id="dumbStudent.questionExampleMammal"
      defaultMessage="Is it a mammal ?"
    />
  );
  thinkingAboutExercice = (
    <FormattedMessage
      id="quickLearnerStudent.thinkingAboutExercise"
      defaultMessage="..."
    />
  );
  hasRightAnswerExercise = (
    <FormattedMessage
      id="quickLearnerStudent.hasRightAnswerExercise"
      defaultMessage="Super!"
    />
  );
  hasFalseAnswerExercise = (
    <FormattedMessage
      id="quickLearnerStudent.hasFalseAnswerExercise"
      defaultMessage="Ohh!"
    />
  );
  feedbackLessonAlreadyKnow = (
    <FormattedMessage
      id="quickLearnerStudent.feedbackLessonAlreadyKnow"
      defaultMessage="I already know that"
    />
  );
  feedbackLessonDidntKnow = (
    <FormattedMessage
      id="quickLearnerStudent.feedbackLessonDidntKnow"
      defaultMessage="Oh I didn't know that"
    />
  );
  thinkingAboutExam = (
    <FormattedMessage
      id="quickLearnerStudent.thinkingAboutExam"
      defaultMessage="..."
    />
  );
  givePositiveAnswer = (
    <FormattedMessage
      id="quickLearnerStudent.givePositiveAnswer"
      defaultMessage="Mmm I think this is a parallelogram"
    />
  );
  giveNegativeAnswer = (
    <FormattedMessage
      id="quickLearnerStudent.giveNegativeAnswer"
      defaultMessage="I don't think this is a parallelogram"
    />
  );

  constructor(name: string) {
    this.name = name;

    featureList.forEach((f1, idx1) => {
      this.models.push([(x: ShapeFeatures) => x[f1], f1]);
      this.models.push([(x: ShapeFeatures) => !x[f1], `!${f1}`]);
      featureList.forEach((f2, idx2) => {
        if (idx1 < idx2) {
          this.models.push([
            (x: ShapeFeatures) => x[f1] && x[f2],
            `${f1}&${f2}`
          ]);
          this.models.push([
            (x: ShapeFeatures) => !x[f1] && x[f2],
            `!${f1}&${f2}`
          ]);
          this.models.push([
            (x: ShapeFeatures) => x[f1] && !x[f2],
            `${f1}&!${f2}`
          ]);
          this.models.push([
            (x: ShapeFeatures) => !x[f1] && !x[f2],
            `!${f1}&!${f2}`
          ]);
        }
      });
    });
    const [model, features] = this.models[
      Math.floor(this.models.length * Math.random())
    ];
    this.state = { model, features };
  }

  // All necessary features should correspond to identify the shape as a parallelogram
  answer(shape: ShapeFeatures) {
    return this.state.model(shape);
  }

  learn(isParallelogram: boolean, shape: ShapeFeatures) {
    if (Math.random() < 0.3) return;
    this.memory.push([isParallelogram, shape]);
    if (isParallelogram !== this.answer(shape)) {
      let minErrors = this.memory.length;

      const [model, features] =
        this.models
          .map(([m, f]) => {
            const nErrors = this.memory.reduce(
              (acc, [b, s]) => (m(s) === b ? acc : acc + 1),
              0
            );
            minErrors = minErrors < nErrors ? minErrors : nErrors;
            return [m, f, nErrors];
          })
          .sort(() => 0.5 - Math.random())
          .find(([, , e]) => e === minErrors) || [];
      this.state = { model, features };
    }
  }

  // The lesson is the truth (weight of 1 or -1)
  learnLesson(shape: ShapeFeatures) {
    const reverseShape = Object.keys(shape).reduce(
      (acc, val) => ({ ...acc, [val]: !shape[val] }),
      {}
    );
    this.learn(true, shape);
    this.learn(false, reverseShape);
  }

  // check if there is a feature he didn't know it was necessary or not
  // return true even if it increased his certainty
  alreadyKnowLesson(shape: ShapeFeatures) {
    return !!this.state.model(shape);
  }

  setState() {}

  getState() {
    const { features } = this.state;
    return `FULL_MEMORY:${features}`;
  }
}

export default FullMemory;
