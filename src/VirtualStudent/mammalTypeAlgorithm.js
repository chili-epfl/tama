// @flow
import React from "react";
import { FormattedMessage } from "react-intl";

import type { VirtualStudent, ShapeFeatures } from "./types";



class MammalType implements VirtualStudent {
  name: string;
  state: Object;
  memory: Array;

  thinkingAboutExample = (
    <FormattedMessage
      id="dumbStudent.thinkingAboutExample"
      defaultMessage="..."
    />
  );
  questionExample = (
    <FormattedMessage
      id="dumbStudent.questionExample"
      defaultMessage="Is it a parallelogram?"
    />
  );
  questionExampleMammal =(
    <FormattedMessage
      id="dumbStudent.questionExampleMammal"
      defaultMessage = "Is it a mammal ?"
    />
  );
  thinkingAboutExercice = (
    <FormattedMessage
      id="dumbStudent.thinkingAboutExercise"
      defaultMessage="..."
    />
  );
  hasRightAnswerExercise = (
    <FormattedMessage
      id="dumbStudent.hasRightAnswerExercise"
      defaultMessage="Super!"
    />
  );
  hasFalseAnswerExercise = (
    <FormattedMessage
      id="dumbStudent.hasFalseAnswerExercise"
      defaultMessage="Ohh!"
    />
  );
  feedbackLessonAlreadyKnow = (
    <FormattedMessage
      id="dumbStudent.feedbackLessonAlreadyKnow"
      defaultMessage="I already know that"
    />
  );
  feedbackLessonDidntKnow = (
    <FormattedMessage
      id="dumbStudent.feedbackLessonDidntKnow"
      defaultMessage="Oh I didn't know that!"
    />
  );
  thinkingAboutExam = (
    <FormattedMessage id="dumbStudent.thinkingAboutExam" defaultMessage="..." />
  );
  givePositiveAnswer = (
    <FormattedMessage
      id="dumbStudent.givePositiveAnswer"
      defaultMessage="Mmm I think this is a parallelogram"
    />
  );
  giveNegativeAnswer = (
    <FormattedMessage
      id="dumbStudent.giveNegativeAnswer"
      defaultMessage="I don't think this is a parallelogram"
    />
  );
  givePositiveAnswerMammal = (
    <FormattedMessage
      id="dumbStudent.givePositiveAnswerMammal"
      defaultMessage="Mmm I think this is a mammal"
    />
  );
  giveNegativeAnswerMammal = (
    <FormattedMessage
      id="dumbStudent.giveNegativeAnswerMammal"
      defaultMessage="I don't think this is a mammal"
    />
  );

  state = {};

  constructor(name: string) {
    this.name = name;
    this.memory = [
        ["isWild", 0],
        ["isDomisticated", 0],
        ["isABird", 0],
        ["isAFish", 0],
        ["isAReptile", 0],
        ["isAnAmphibian", 0],
        ["isInvertebrate", 0],
        ["isVertebrate", 0],
        ["isTerrestrial", 0],
        ["isAquatic", 0],
        ["layEggs", 0],
        ["giveBirth", 0],
        ["hasWings", 0],
        ["hasFurOrHair", 0],
        ["isWarmBlooded", 0],
        ["isGigantic", 0],
        ["isAverageSized", 0],
        ["isCarnivore", 0],
        ["isOmnivore", 0],
        ["isHerbivore", 0],
        ["isFrugivore", .0]
    
    ]
    
  }

    answer(shapeFeatures: ShapeFeatures){
        let count = 1;
        if(this.memory[17][1] > 0 && this.memory[18][1] > 0 && this.memory[19][1] > 0 && this.memory[20][1] > 0){// if the student learned all types of animals
            const memoryTest = JSON.parse(JSON.stringify(this.memory));// deep copy for not changing the memory state
            memoryTest.sort((a,b) => b[1] - a[1]);// sorting according to numerical values dsc
            const memoryFeatures = [];
            for (let i=0;i < memoryTest.length ;i++){
                memoryFeatures.push(memoryTest[i][0]);// creating features sorted array
            }
            for(let i=0; i < memoryTest.length / 2; i++){
                if (memoryTest[i][1]=== memoryTest[i+1][1]){
                    count++;// counting the first elements that have the same numerical value
                }else{
                  break;
                }
            }
            let anotherCount = 0;
            Object.keys(shapeFeatures).forEach((k)=>{
                if(shapeFeatures[k] && memoryFeatures.indexOf(k) < count){
                    anotherCount+=1;// counting how many features are in the first elements that are with equal numerical values
                }
            })
            if(anotherCount === count){
                return true;// if they have the same count than it is a mammal
            }
        }
        return false;
    }

    learnLesson() {}

    learn() {
    
    }
    learnMammal(isMammal: boolean, shapeFeatures: ShapeFeatures){
    if (isMammal){// we only learn if it is a mammal
        Object.keys(shapeFeatures).forEach((k,v)=>{// iterating over features object
            if (shapeFeatures[k] && this.memory[v][1] >= 0){
                this.memory[v][1]+=1;// increment every true feature by one
            }
        });
    }
    }
  

  alreadyKnowLesson() {
    return Math.random() > 0.5;
  }

  setState() {}

  getState() {
    return "empty";
  }
}

export default MammalType;
