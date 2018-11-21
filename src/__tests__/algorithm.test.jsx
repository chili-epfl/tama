import getVirtualStudent from '../VirtualStudent/utils';
import mammalsData from '../Activity/MammalsData';

const numberOfTrials = 15;

let student = null;

describe('not mammal', ()=>{
    it('should return not mammal', ()=>{
        student = getVirtualStudent("mahdi");
        for(let i = 0; i < numberOfTrials; i++){// train the algorithm on random data 
            const mammalData = mammalsData[parseInt(Math.random() * 22 + 1, 10)] ;
            student.learnMammal(mammalData.valid, mammalData.shapeFeatures)
        }
        let notMammal = "";
        mammalsData.forEach((mammal)=>{
            if(!mammal.valid){
                notMammal = mammal;// select one element that is not mammal
            }
        })
        expect(student.answer(notMammal.shapeFeatures)).toBe(false)// expect the student to figure that out

    })
})
describe('it is mammal', ()=>{
    it('should return mammal', ()=>{
        student = getVirtualStudent("mahdi");
        for(let i = 0; i < numberOfTrials; i++){// train student on random sampled data
            const mammalData = mammalsData[parseInt(Math.random() * 22 + 1, 10)] ;
            student.learnMammal(mammalData.valid, mammalData.shapeFeatures)
        }
        let yesMammal = "";
        mammalsData.forEach((mammal)=>{
            if(mammal.valid){
                yesMammal = mammal;// select one element that is mammal
            }
        })
        expect(student.answer(yesMammal.shapeFeatures)).toBe(true)
    })
})

describe('training and testing on same mammal', ()=>{
    it('it should return the same thing as training', ()=>{
        student = getVirtualStudent('mahdi');
        const trainingMammal = mammalsData[parseInt(Math.random() * 22 + 1, 10)];// select a random element from data and teach it to the student
        student.learnMammal(trainingMammal.valid, trainingMammal.shapeFeatures)
        for(let i = 0; i < numberOfTrials; i++){// train the student on different data
            const mammalData = mammalsData[parseInt(Math.random() * 22 + 1, 10)] ;
            student.learnMammal(mammalData.valid, mammalData.shapeFeatures)
        }
        expect(student.answer(trainingMammal.shapeFeatures)).toBe(trainingMammal.valid)// expect the student to answer correctly he has already seen it
    })
})