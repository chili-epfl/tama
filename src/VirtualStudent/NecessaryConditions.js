// @flow
import React from "react";
import { FormattedMessage } from "react-intl";

import type { VirtualStudent, ShapeFeatures } from "./types";

class QuickLearnerStudent implements VirtualStudent {
  name: string;
  state: Object;

  // A weight > 0 correspond to a necessary condition
  // Each subarray is a disjonction of conditions
  knowledgeParallelogram = [
    [
      ["hasThreeEdges", 0],
      ["hasFourEdges", 0],
      ["hasFiveEdges", 0],
      ["hasSixEdges", 0]
    ],
    [["hasSameLengthEdges", 0]],
    [["hasSameLengthEveryPairOppositeEdges", 0]],
    [["hasSameLengthOnePairOppositeEdges", 0]],
    [["hasEveryPairOppositeEdgesParallel", 0]],
    [["hasAtLeastOnePairOppositeEdgesParallel", 0]],
    [["isRed", 0], ["isGreen", 0], ["isBlue", 0]],
    [["isRotated", 0]],
    [["isThin", 0]],
    [["hasEveryRightAngles", 0]],
    [["hasAtLeastOneRightAngle", 0]]
  ];
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
  questionExampleMammal =(
    <FormattedMessage
      id="dumbStudent.questionExampleMammal"
      defaultMessage = "Is it a mammal ?"
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
  }

  // At least one necessary feature (> 0) in each subarray should match
  // to identify the shape as a parallelogram
  answerParallelogram(shapeFeatures: ShapeFeatures) {
    let trigger = false;
    const res = this.knowledgeParallelogram.reduce((acc, feature) => {
      trigger = false;
      return (
        acc &&
        feature.reduce((acc2, [subfeature, weight]) => {
          if (weight > 0) {
            if (trigger) {
              return shapeFeatures[subfeature] || acc2;
            }
            trigger = true;
            return shapeFeatures[subfeature];
          }
          return acc2;
        }, true)
      );
    }, true);
    return res;
  }

  learn(isParallelogram: boolean, shapeFeatures: ShapeFeatures) {
    if (!isParallelogram) {
      this.knowledgeParallelogram.forEach(features => {
        features.forEach(subfeature => {
          subfeature[1] += !shapeFeatures[subfeature[0]] ? 0.1 : -0.1;
        });
      });
    }
    if (isParallelogram) {
      this.knowledgeParallelogram.forEach(features => {
        features.forEach(subfeature => {
          subfeature[1] += shapeFeatures[subfeature[0]] ? 0.1 : -0.1;
        });
      });
    }
  }

  // The lesson is the truth (weight of 1 or -1)
  learnLesson(shapeFeatures: ShapeFeatures) {
    this.knowledgeParallelogram.forEach(features => {
      features.forEach(subfeature => {
        if (Object.keys(shapeFeatures).includes(subfeature[0])) {
          subfeature[1] = shapeFeatures[subfeature[0]] ? 1 : -1;
        }
      });
    });
  }

  // check if there is a feature he didn't know it was necessary or not
  // return true even if it increased his certainty
  alreadyKnowLesson(shapeFeatures: ShapeFeatures) {
    return this.knowledgeParallelogram.reduce(
      (acc, feature) =>
        acc &&
        feature.reduce(
          (acc2, [subfeature, weight]) =>
            acc2 &&
            !(weight > 0
              ? !shapeFeatures[subfeature]
              : shapeFeatures[subfeature]),
          true
        ),
      true
    );
  }

  setState() {}

  getState() {
    return this.knowledgeParallelogram;
  }
}

export default QuickLearnerStudent;
