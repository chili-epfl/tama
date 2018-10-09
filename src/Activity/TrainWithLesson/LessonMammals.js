import React from "react";

import { FormattedMessage } from "react-intl";

const lesson = [
  {
    title: (
      <FormattedMessage
        id="lessonMammal.item1"
        defaultMessage="A parallelogram is a quadrilateral"
      />
    ),
    shapeFeatures: {
      hasFourEdges: true
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonMammal.item2"
        defaultMessage="A parallelogram has both pairs of opposite sides parallel"
      />
    ),
    shapeFeatures: {
      hasEveryPairOppositeEdgesParallel: true
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonMammal.item3"
        defaultMessage="The opposite sides of a parallelogram are of equal length"
      />
    ),
    shapeFeatures: {
      hasSameLengthEveryPairOppositeEdges: true
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonMammal.item4"
        defaultMessage="A parallelogram doesn't necessarily have all its sides equal"
      />
    ),
    shapeFeatures: {
      hasSameLengthEdges: false
    }
  }
];

export default lesson;