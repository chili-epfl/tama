import React from "react";

import { FormattedMessage } from "react-intl";

const lesson = [
  {
    title: (
      <FormattedMessage
        id="lessonMammal.item1"
        defaultMessage="A mammal is vertebrate"
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
        defaultMessage="A mammal have glands that give milk"
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
        defaultMessage="A mammal is warm-blooded"
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
        defaultMessage="A mammal have fur or hair"
      />
    ),
    shapeFeatures: {
      hasSameLengthEdges: false
    }
  }
];

export default lesson;
