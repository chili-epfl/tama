import React from "react";

const thumbnailWidth = 300;
const thumbnailHeight = 300;


const adverbsData = [
  {
		sentence1: "Jean joue",
		adverb: "sagement",
		sentence2:"",
		itemType: "adverb",
		id: 1,
		valid: true,
		shapeFeatures: {
			canBeARespondToHowQuestion: true,
			canBeARespondToWhereQuestion: false,
			showingIntensity: false,
			showingManner: true,
			isANegation: false,
			isAnAffirmation: false,
			isAGroupOfWords: false,
			isASimpleWord: true,
			endingWithAmment: false,
			endingWithEmment: false,
			endingWithEment: true,
			endingWithMent: true,
			AffectingTheVerb: true,
			AffectingAllTheProposition: false,
			AffectingTheAdjective: false,
		}
	},
		{
			sentence1:"Jeanne est",
			adverb: "très",
			sentence2:"mignonne",
			itemType: "adverb",
			id: 2,
			valid: true,
			shapeFeatures: {
				canBeARespondToHowQuestion: false,
				canBeARespondToWhereQuestion: false,
				showingIntensity: true,
				showingManner: false,
				isANegation: false,
				isAnAffirmation: false,
				isAGroupOfWords: false,
				isASimpleWord: true,
				endingWithAmment: false,
				endingWithEmment: false,
				endingWithEment: false,
				endingWithMent: false,
				AffectingTheVerb: false,
				AffectingAllTheProposition: false,
				AffectingTheAdjective: true,
			}
		}
    
].sort(() => 0.5 - Math.random())
.map(entry => {
  entry.customOverlay = (
    <div
      style={{
        opacity: 1,
        position: "absolute",
        height: "100%",
        width: "100%",
        background:
          "linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)"
      }}
    />
  );
  entry.thumbnailHeight = thumbnailHeight;
  entry.thumbnailWidth = thumbnailWidth;
  return entry;
});
/* eslint-enable no-param-reassign */

export default adverbsData;