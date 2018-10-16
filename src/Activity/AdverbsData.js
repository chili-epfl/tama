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
    /* {
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
	{
		src: "images/examplesAdverbs/3.png",
		thumbnail: "images/examplesAdverbs/3.png",
		itemType: "adverb",
		valid: false,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: true,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/4.png",
		thumbnail: "images/examplesAdverbs/4.png",
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
			 regularForm: false,
			 irregularForm: true
		}
	},
	{
		src: "images/examplesAdverbs/5.png",
		thumbnail: "images/examplesAdverbs/5.png",
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
			 adjectiveEndsInEnt: true,
			 adjectiveEndsInAnt: false,
			 regularForm: true,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/6.png",
		thumbnail: "images/examplesAdverbs/6.png",
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
			 adjectiveEndsInEnt: true,
			 adjectiveEndsInAnt: false,
			 regularForm: true,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/7.png",
		thumbnail: "images/examplesAdverbs/7.png",
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
			 adjectiveEndsInEnt: true,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: true
		}
	},
	{
		src: "images/examplesAdverbs/8.png",
		thumbnail: "images/examplesAdverbs/8.png",
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
			 adjectiveEndsInAnt: true,
			 regularForm: true,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/9.png",
		thumbnail: "images/examplesAdverbs/9.png",
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
			 adjectiveEndsInAnt: true,
			 regularForm: true,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/10.png",
		thumbnail: "images/examplesAdverbs/10.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: true,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/11.png",
		thumbnail: "images/examplesAdverbs/11.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: true,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/12.png",
		thumbnail: "images/examplesAdverbs/12.png",
		itemType: "adverb",
		valid: false,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/13.png",
		thumbnail: "images/examplesAdverbs/13.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: true,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/14.png",
		thumbnail: "images/examplesAdverbs/14.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: true,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/15.png",
		thumbnail: "images/examplesAdverbs/15.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: true,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/16.png",
		thumbnail: "images/examplesAdverbs/16.png",
		itemType: "adverb",
		valid: false,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/17.png",
		thumbnail: "images/examplesAdverbs/17.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: true,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/18.png",
		thumbnail: "images/examplesAdverbs/18.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: true,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/19.png",
		thumbnail: "images/examplesAdverbs/19.png",
		itemType: "adverb",
		valid: true,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: false,
			 groupOfWord: true,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},
	{
		src: "images/examplesAdverbs/20.png",
		thumbnail: "images/examplesAdverbs/20.png",
		itemType: "adverb",
		valid: false,
		shapeFeatures: {
			 adverbOfManner: false,
			 adverbOfDegree: false,
			 adverbOfTime: false,
			 adverbOfPlace: false,
			 adverbOfNegation: false,
			 simpleWord: true,
			 groupOfWord: false,
			 adjectiveEndsInEnt: false,
			 adjectiveEndsInAnt: false,
			 regularForm: false,
			 irregularForm: false
		}
	},

 */

    
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