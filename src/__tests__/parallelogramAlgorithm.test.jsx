import getVirtualStudent from '../VirtualStudent/utils';
import parallelogramData from '../Activity/ParallelogramData';
import FixedMemory from "../VirtualStudent/FixedMemory";


const STUDENT_MODEL = FixedMemory;


let student = null;

const numberOfTrials = 15;

describe('train the student on a set of shapes and test him on an invalid parallelogram', ()=>{
    it('should guess that the parallelogram is invalid', ()=>{
        student = new STUDENT_MODEL('test');
        for(let i = 0; i < numberOfTrials; i++){
            const parallelogram = parallelogramData[parseInt(Math.random() * (parallelogramData.length-1) + 1, 10)] ;
            student.learn(parallelogram.valid, parallelogram.shapeFeatures)
        }
        let isParallelogram = "";
        parallelogramData.forEach((parallelogram)=>{
            if(!parallelogram.valid){
                isParallelogram = parallelogram;
            }
        })
        expect(student.answerParallelogram(isParallelogram.shapeFeatures)).toBe(false)
    })
})
describe('train the student on a set of shapes and test him on a valid parallelogram', ()=>{
    it('should guess that the parallelogram is valid', ()=>{
        student = new STUDENT_MODEL('test');
        for(let i = 0; i < numberOfTrials; i++){
            const parallelogram = parallelogramData[parseInt(Math.random() * (parallelogramData.length-1)+ 1, 10)] ;
            student.learn(parallelogram.valid, parallelogram.shapeFeatures)
        }
        let isParallelogram = "";
        parallelogramData.forEach((parallelogram)=>{
            if(parallelogram.valid){
                isParallelogram = parallelogram;
            }
        })
        expect(student.answerParallelogram(isParallelogram.shapeFeatures)).toBe(true)
    })
})

describe('training the student on a set of parallelograms and ask him about one of them', ()=>{
    it('should return the same thing as training', ()=>{
        student = getVirtualStudent('mahdi');
        const trainingParallelogram = parallelogramData[parseInt(Math.random() * (parallelogramData.length-1) + 1, 10)];
        student.learn(trainingParallelogram.valid, trainingParallelogram.shapeFeatures)
        for(let i = 0; i < numberOfTrials; i++){
            const parallelogram = parallelogramData[parseInt(Math.random() * (parallelogramData.length-1) + 1, 10)] ;
            student.learn(parallelogram.valid, parallelogram.shapeFeatures)
        }
        expect(student.answerParallelogram(trainingParallelogram.shapeFeatures)).toBe(trainingParallelogram.valid)
    })
})
describe('training the student on a set of red parallelograms and asking him on a green one', ()=>{
    it('it should return false', ()=>{
        student = new STUDENT_MODEL('test');
        let testingParallelogram;
        for(let i = 0; i < parallelogramData.length; i++){
            if(parallelogramData[i].shapeFeatures.isRed){
                student.learn(parallelogramData[i].valid, parallelogramData[i].shapeFeatures)
            }else if(parallelogramData[i].shapeFeatures.isGreen){
                testingParallelogram = parallelogramData[i];
            }
        }
        expect(student.answerParallelogram(testingParallelogram.shapeFeatures)).toBe(false)
    })
})
describe('give only green parallelograms', ()=>{
    it("it should return the same true if a shape is green", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.isGreen){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.isGreen){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }
        });
    });
})
describe('give only red parallelograms', ()=>{
    it("it should return the same true if a shape is red", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.isRed){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.isRed){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }
        });
    });
})
describe('give only blue parallelograms', ()=>{
    it("it should return the same true if a shape is blue", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.isBlue){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.isBlue){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }
        });
    });
})
describe('give only hasEveryRightAngles parallelograms', ()=>{
    it("it should return the same true if a shape is hasEveryRightAngles", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.hasEveryRightAngles){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.hasEveryRightAngles){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }
        });
    });
})
describe('give only hasFourEdges parallelograms', ()=>{
    it("it should return the same true if a shape is hasFourEdges", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.hasFourEdges){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.hasFourEdges){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }
        });
    });
})
describe('give only hasFourEdges and green parallelograms', ()=>{
    it("it should return the same true if a shape is hasFourEdges and is green", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.hasFourEdges && parallelogram.shapeFeatures.isGreen){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.hasFourEdges && parallelogram.shapeFeatures.isGreen){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }
        });
    });
})
describe('give only hasEveryPairOppositeEdgesParallel and green parallelograms', ()=>{
    it("it should return the same true if a shape is hasEveryPairOppositeEdgesParallel and is green", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.hasEveryPairOppositeEdgesParallel){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.hasEveryPairOppositeEdgesParallel){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }
        });
    });
})
describe('give only hasThreeEdges or hasFourEdges parallelograms', ()=>{
    it("it should return the false if a shape is hasThreeEdges and true if a shape hasFourEdges", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.hasThreeEdges){
            student.learn(false, parallelogram.shapeFeatures);
          }else if(parallelogram.shapeFeatures.hasFourEdges){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.hasThreeEdges){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }else if(parallelogram.shapeFeatures.hasFourEdges){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)

            }
        });
    });
})
describe('give only hasSameLengthOnePairOppositeEdges parallelograms', ()=>{
    it("it should return the true if a shape is hasSameLengthOnePairOppositeEdges ", () => {
        student = new STUDENT_MODEL("test");
        parallelogramData.forEach(parallelogram => {
          if(parallelogram.shapeFeatures.hasSameLengthOnePairOppositeEdges){
            student.learn(true, parallelogram.shapeFeatures);
          }
        });
        parallelogramData.forEach(parallelogram => {
            if(parallelogram.shapeFeatures.hasSameLengthOnePairOppositeEdges){
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(true)
            }else{
                expect(student.answerParallelogram(parallelogram.shapeFeatures)).toBe(false)
            }
        });
    });
})