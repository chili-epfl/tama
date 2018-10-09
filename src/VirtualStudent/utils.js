// @flow

import { VirtualStudent } from "./types";
import DumbStudent from "./DumbStudent";
// import NoMemory from "./NoMemory";
// import WeightModel from "./WeightModel";
// import FullMemory from "./FullMemory";
// import FixedMemory from "./FixedMemory";

export const featureList = [
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

const getVirtualStudent = (name: string): VirtualStudent => {
  // let RandModel = DumbStudent;
  // const studentModels = [
  //   [WeightModel, 0.15],
  //   [NoMemory, 0.15],
  //   [FixedMemory, 0.3],
  //   [FullMemory, 1]
  // ];

  // studentModels.reduce((x, [studentModel, p]) => {
  //   RandModel = x > 0 && x - p < 0 ? studentModel : RandModel;
  //   return x - p;
  // }, Math.random());

  // return new RandModel(name);
  return new DumbStudent(name);
};

export default getVirtualStudent;
