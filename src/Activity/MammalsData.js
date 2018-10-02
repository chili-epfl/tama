import React from "react";

const thumbnailWidth = 300;
const thumbnailHeight = 300;


const mammalsData = [
  {
    src: "images/examplesMammals/1.jpeg",
    thumbnail: "images/examplesMammals/1.jpeg",
    itemType: "mammal",
    valid: true,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: false,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: false,
      layEggs: false,
      giveBirth: true,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/2.jpeg",
    thumbnail: "images/examplesMammals/2.jpeg",
    itemType: "reptile",
    valid: false,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: false,
      isAFish: false,
      isAReptile: true,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: true,
      layEggs: true,
      giveBirth: false,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/3.jpeg",
    thumbnail: "images/examplesMammals/3.jpeg",
    itemType: "amphibian",
    valid: false,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: false,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: true,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: true,
      layEggs: true,
      giveBirth: false,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/4.jpeg",
    thumbnail: "images/examplesMammals/4.jpeg",
    itemType: "fish",
    valid: false,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: false,
      isAFish: true,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: false,
      isAquatic: true,
      layEggs: false,
      giveBirth: true,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/5.jpeg",
    thumbnail: "images/examplesMammals/5.jpeg",
    itemType: "mammal",
    valid: true,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: false,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: false,
      layEggs: false,
      giveBirth: true,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/6.jpeg",
    thumbnail: "images/examplesMammals/6.jpeg",
    itemType: "mammal",
    valid: true,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: false,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: false,
      isAquatic: true,
      layEggs: false,
      giveBirth: true,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/7.jpeg",
    thumbnail: "images/examplesMammals/7.jpeg",
    itemType: "mammal",
    valid: true,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: false,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: false,
      layEggs: false,
      giveBirth: true,
      hasWings: true
    }
  },
  {
    src: "images/examplesMammals/8.jpeg",
    thumbnail: "images/examplesMammals/8.jpeg",
    itemType: "bird",
    valid: false,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: true,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: false,
      layEggs: true,
      giveBirth: false,
      hasWings: true
    }
  },
  {
    src: "images/examplesMammals/9.jpeg",
    thumbnail: "images/examplesMammals/9.jpeg",
    itemType: "mammal",
    valid: true,
    shapeFeatures: {
      isWild: false,
      isDomisticated: true,
      isABird: false,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: false,
      layEggs: false,
      giveBirth: true,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/10.jpeg",
    thumbnail: "images/examplesMammals/10.jpeg",
    itemType: "mammal",
    valid: true,
    shapeFeatures: {
      isWild: false,
      isDomisticated: true,
      isABird: false,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: false,
      layEggs: false,
      giveBirth: true,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/11.jpeg",
    thumbnail: "images/examplesMammals/11.jpeg",
    itemType: "bird",
    valid: false,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: true,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: true,
      layEggs: true,
      giveBirth: false,
      hasWings: false
    }
  },
  {
    src: "images/examplesMammals/12.jpeg",
    thumbnail: "images/examplesMammals/12.jpeg",
    itemType: "mammal",
    valid: true,
    shapeFeatures: {
      isWild: true,
      isDomisticated: false,
      isABird: false,
      isAFish: false,
      isAReptile: false,
      isAnAmphibian: false,
      isInvertebrate: false,
      isVertebrate: true,
      isTerrestrial: true,
      isAquatic: false,
      layEggs: false,
      giveBirth: true,
      hasWings: false
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

export default mammalsData;
