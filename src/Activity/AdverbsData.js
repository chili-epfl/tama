const adverbsData = [
  {
		sentence1: "Jean joue",
		adverb: "sagement",
		sentence2:"",
		itemType: "adverb",
		id: 1,
		valid: true,
		shapeFeatures: {
			canBeAResponseToHowQuestion: true,
			canBeAResponseToWhereQuestion: false,
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
			canBeAResponseToHowQuestion: false,
			canBeAResponseToWhereQuestion: false,
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
    
].sort(() => 0.5 - Math.random());


export default adverbsData;