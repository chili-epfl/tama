import React from "react";

import { FormattedMessage } from "react-intl";

const lesson = [
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item1"
        defaultMessage="Un adverbe est une réponse à une question de manière
        "
      />
    ),
    shapeFeatures: {
        canBeAResponseToHowQuestion: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item2"
        defaultMessage="Un adverbe est une réponse à une question de lieu
        "
      />
    ),
    shapeFeatures: {
        canBeAResponseToWhereQuestion: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item3"
        defaultMessage="Un adverbe est une réponse à une question de temps
        "
      />
    ),
    shapeFeatures: {
        canBeAResponseToWhenQuestion: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item4"
        defaultMessage="Un adverbe peut-être une affirmation"
      />
    ),
    shapeFeatures: {
        isAnAffirmation: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item5"
        defaultMessage="Un adverbe peut-être une négation"
      />
    ),
    shapeFeatures: {
        isANegation: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item6"
        defaultMessage="Un adverbe peut se terminer par amment"
      />
    ),
    shapeFeatures: {
        endingWithAmment: true,
    }
  },  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item7"
        defaultMessage="Un adverbe peut se terminer par emment"
      />
    ),
    shapeFeatures: {
        endingWithEmment: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item8"
        defaultMessage="Un adverbe peut se terminer par ement"
      />
    ),
    shapeFeatures: {
        endingWithEment: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item9"
        defaultMessage="Un adverbe peut se terminer par ment"
      />
    ),
    shapeFeatures: {
        endingWithMent: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item10"
        defaultMessage="Un adverbe affecte un verbe"
      />
    ),
    shapeFeatures: {
        AffectingTheVerb: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item11"
        defaultMessage="Un adverbe affecte une proposition"
      />
    ),
    shapeFeatures: {
        AffectingAllTheProposition: true,
    }
  },
  {
    title: (
      <FormattedMessage
        id="lessonAdverb.item12"
        defaultMessage="Un adverbe affecte un adjective"
      />
    ),
    shapeFeatures: {
        AffectingTheAdjective: true,
    }
  }
];

export default lesson;
