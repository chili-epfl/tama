// @flow
import React from "react";
import { FormattedMessage } from "react-intl";

import type { VirtualStudent, ShapeFeatures } from "./types";



class ImprovedMammalAlgorithm implements VirtualStudent {
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

  state = {
      numberOfExamples: 0
  };

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
        ["isFrugivore", 0]
    
    ]// assign to every feature a zero numerical value
    
  }

  answer(shapeFeatures: ShapeFeatures){
    let count = 0;
    const memoryTest = JSON.parse(JSON.stringify(this.memory));// deep copy for not changing the memory state
    memoryTest.sort((a,b) => b[1] - a[1]);// sorting array according to assigned numerical values
    const memoryFeatures = [];
    for (let i=0;i < memoryTest.length ;i++){
        memoryFeatures.push(memoryTest[i][0]);// extracting sorted features
    }
    Object.keys(shapeFeatures).forEach((k)=>{// iterating over received features object
        if (shapeFeatures[k] && memoryFeatures.indexOf(k) < memoryFeatures.length/5){
            count++;// counting number of features that fall into the first half of the sorted array
        }
    });
    if (count >= Object.keys(shapeFeatures).length / 10){
        return true;// if the count is bigger than the 5th of the features then it is a mammal
    }
    return false;
  }

  learnLesson() {}

learn() {
    
}
learnMammal(isMammal: boolean, shapeFeatures: ShapeFeatures){
    this.setState(1);
    if (isMammal !== this.answer(shapeFeatures) && this.state.numberOfExamples > 5){
        Object.keys(shapeFeatures).forEach((k,v)=>{// iterating over received features object
            if (shapeFeatures[k] && this.memory[v][1] >= 0){// if the feature is true and its numerical value is significant
                this.memory[v][1]+=0.5;// we increment it by 0.5 considering that the student started to learn
            }
        });
    }
    else if (isMammal){// we only learn if it is a mammal
        Object.keys(shapeFeatures).forEach((k,v)=>{// iterating over received features object
            if (shapeFeatures[k] && this.memory[v][1] >= 0){// if the feature is true and its numerical value is significant
                this.memory[v][1]+=1;// we increment it
            }else if(this.memory[v][1] > 0){// if the feature is seen to be false after being true
                this.memory[v][1] = -1// we decrement it to -1 and never increment it again(not a main feature for a mammal)
            }
        });
    }
}
  

  alreadyKnowLesson() {
    return Math.random() > 0.5;
  }

  setState(numberOfExamples) {
      this.state.numberOfExamples+= numberOfExamples
  }

  getState() {
    return "empty";
  }
}

export default ImprovedMammalAlgorithm;
