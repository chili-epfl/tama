import mammalsData from "../Activity/MammalsData";
import MammalType from "../VirtualStudent/mammalTypeAlgorithm";

const numberOfTrials = 30;

const STUDENT_MODEL = MammalType;

let student = null;

describe("not mammal", () => {
  it("Learning with all the examples should give perfect results", () => {
    student = new STUDENT_MODEL("test");
    mammalsData.forEach(mammal => {
      student.learn(mammal.valid, mammal.shapeFeatures);
    });
    mammalsData.forEach(mammal => {
      expect(student.answer(mammal.shapeFeatures)).toBe(mammal.valid);
    });
  });
});

describe("it is mammal", () => {
  it("should return mammal", () => {
    student = new STUDENT_MODEL("test");
    for (let i = 0; i < numberOfTrials; i++) {
      // train student on random sampled data
      const mammalData = mammalsData[parseInt(Math.random() * 22 + 1, 10)];
      student.learn(mammalData.valid, mammalData.shapeFeatures);
    }
    let yesMammal = "";
    mammalsData.forEach(mammal => {
      if (mammal.valid) {
        yesMammal = mammal; // select one element that is mammal
      }
    });
    expect(student.answer(yesMammal.shapeFeatures)).toBe(true);
  });
});

describe("training and testing on same mammal", () => {
  it("it should return the same thing as training", () => {
    mammalsData.forEach(mammal => {
      student = new STUDENT_MODEL("test");
      student.learn(false, mammal.shapeFeatures);
      expect(student.answer(mammal.shapeFeatures)).toBe(false);

      student = new STUDENT_MODEL("test");
      student.learn(true, mammal.shapeFeatures);
      expect(student.answer(mammal.shapeFeatures)).toBe(true);
    });
  });
});
describe("trainig the student and then adding one mammal that is not valid", () => {
  it("it should figure out that it was not a mammal and try not to learn it", () => {
    student = new STUDENT_MODEL("test")
    mammalsData.forEach(mammal => {
      if(mammal.valid){
        student.learn(true, mammal.shapeFeatures)
      }
    });
    mammalsData.forEach(mammal => {
      if(!mammal.valid){
        student.learn(true, mammal.shapeFeatures)
      }
      expect(student.answer(mammal.shapeFeatures)).toBe(false)
    });
  });
});
