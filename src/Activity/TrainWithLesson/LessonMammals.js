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
      isVertebrate: true,
      isInvertebrate:false
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
      giveBirth: true,
      layEggs: false
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
      isWarmBlooded: true
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
      hasFurOrHair: true,
      isABird: false
    }
  }
];

export default lesson;
