import getVirtualStudent from '../VirtualStudent/utils';
import parallelogramData from '../Activity/ParallelogramData';


let student = null;

const numberOfTrials = 15;

describe('Simple Testing', ()=>{
    it('tests if it knows that it is not a parallelogram', ()=>{
        student = getVirtualStudent('mahdi');
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
describe('Simple Testing', ()=>{
    it('tests if it know that it is a parallelogram', ()=>{
        student = getVirtualStudent('mahdi');
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

describe('training and testing on same Parallelogram', ()=>{
    it('it should return the same thing as training', ()=>{
        student = getVirtualStudent('mahdi');
        const trainingParallelogram = parallelogramData[parseInt(Math.random() * (parallelogramData.length-1) + 1, 10)];// select a random element from data and teach it to the student
        student.learn(trainingParallelogram.valid, trainingParallelogram.shapeFeatures)
        for(let i = 0; i < numberOfTrials; i++){
            const parallelogram = parallelogramData[parseInt(Math.random() * (parallelogramData.length-1) + 1, 10)] ;
            student.learn(parallelogram.valid, parallelogram.shapeFeatures)
        }
        expect(student.answerParallelogram(trainingParallelogram.shapeFeatures)).toBe(trainingParallelogram.valid)// expect the student to answer correctly he has already seen it
    })
})
describe('training and testing on color of parallelogram', ()=>{
    it('it should return the same thing as testing', ()=>{
        student = getVirtualStudent('mahdi');
        let testingParallelogram;
        for(let i = 0; i < parallelogramData.length; i++){
            if(parallelogramData[i].shapeFeatures.isRed){
                student.learn(parallelogramData[i].valid, parallelogramData[i].shapeFeatures)
            }else if(parallelogramData[i].shapeFeatures.isGreen){
                testingParallelogram = parallelogramData[i];
            }
        }
        expect(student.answerParallelogram(testingParallelogram.shapeFeatures)).toBe(testingParallelogram.valid)// expect the student to answer correctly he has already seen it
    })
})
describe('training only on Squares', ()=>{
    it('it should return if it is a parallelogram or not for testing data', ()=>{
        student = getVirtualStudent('mahdi');
        let testingParallelogram;
        for(let i = 0; i < parallelogramData.length; i++){
            if(parallelogramData[i].shapeFeatures.hasFourEdges && parallelogramData[i].shapeFeatures.hasSameLengthEdges){
                student.learn(parallelogramData[i].valid, parallelogramData[i].shapeFeatures)
            }else if(parallelogramData[i].valid && !parallelogramData[i].shapeFeatures.hasSameLengthEdges){
                testingParallelogram = parallelogramData[i];
            }
        }
        expect(student.answerParallelogram(testingParallelogram.shapeFeatures)).toBe(testingParallelogram.valid)// expect the student to answer correctly he has already seen it
    })
})