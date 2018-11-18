import getVirtualStudent from '../VirtualStudent/utils';
import mammalsData from '../Activity/MammalsData';

const numberOfTrials = 15;

let student = null;

describe('not mammal', ()=>{
    it('should return not mammal', ()=>{
        student = getVirtualStudent("mehdi");
        for(let i = 0; i < numberOfTrials; i++){
            const mammalData = mammalsData[parseInt(Math.random() * 22 + 1, 10)] ;
            student.learnMammal(mammalData.valid, mammalData.shapeFeatures)
        }
        let notMammal = "";
        mammalsData.forEach((mammal)=>{
            if(!mammal.valid){
                notMammal = mammal;
            }
        })
        expect(student.answer(notMammal.shapeFeatures)).toBe(false)

    })
})
describe('it is mammal', ()=>{
    it('should return mammal', ()=>{
        student = getVirtualStudent("mehdi");
        for(let i = 0; i < numberOfTrials; i++){
            const mammalData = mammalsData[parseInt(Math.random() * 22 + 1, 10)] ;
            student.learnMammal(mammalData.valid, mammalData.shapeFeatures)
        }
        let yesMammal = "";
        mammalsData.forEach((mammal)=>{
            if(mammal.valid){
                yesMammal = mammal;
            }
        })
        expect(student.answer(yesMammal.shapeFeatures)).toBe(true)
    })
})

describe('training and testing on same mammal', ()=>{
    it('it should return the same thing as training', ()=>{
        student = getVirtualStudent('mehdi');
        const trainingMammal = mammalsData[parseInt(Math.random() * 22 + 1, 10)];
        student.learnMammal(trainingMammal.valid, trainingMammal.shapeFeatures)
        for(let i = 0; i < numberOfTrials; i++){
            const mammalData = mammalsData[parseInt(Math.random() * 22 + 1, 10)] ;
            student.learnMammal(mammalData.valid, mammalData.shapeFeatures)
        }
        expect(student.answer(trainingMammal.shapeFeatures)).toBe(trainingMammal.valid)
    })
})