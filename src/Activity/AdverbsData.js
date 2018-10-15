import React from "react";

const thumbnailWidth = 300;
const thumbnailHeight = 300;


const adverbsData = [
    {
		src: "images/examplesAdverbs/1.png",
		thumbnail: "images/examplesAdverbs/1.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: true,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: true,
			 irregularForm: false
		}
    },
    {
		src: "images/examplesAdverbs/2.png",
		thumbnail: "images/examplesAdverbs/2.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: true,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: true,
			 irregularForm: false
		}
	},


    
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