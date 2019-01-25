import { Calculator } from '../src/ts10'
import { expect } from 'chai';

describe('An empty string should return zero', () =>{
    it('Should return zero when the string is empty', ()=>{
        let stringCalculator = new Calculator();
        let emptyString = stringCalculator.returnValue('');
        expect(emptyString).to.equal(0);
        let spaceString = stringCalculator.returnValue('    ');
        expect(spaceString).to.equal(0);
    })

  
    // it('Should return zero when letters are passed in', ()=>{
    //     let stringCalculator = new Calculator();
    //     let letterString = stringCalculator.returnValue('a');
    //     expect(letterString).to.equal(0);
    // })
});
describe ('A single number returns the value', () =>{
    it('Should return a value of a single number', () =>{
        let value = new Calculator().returnValue('7');
        expect(value).to.equal(7);
        let value2 = new Calculator().returnValue('1');
        expect(value2).to.equal(1);
    })
});

describe('Spilt the string of numbers', () =>{
    it('Should spilt the string of numbers by comma', ()=>{
        let split:string[] = new Calculator().splitNumbers('1,2,3,4');
        expect(split[0]).to.equal('1');
        expect(split[1]).to.equal('2');
        expect(split[2]).to.equal('3');
        expect(split[3]).to.equal('4');
    })
})

describe('Add two numbers', () =>{
    it('Should return a calculated sum of two numbers', ()=>{
        let sum = new Calculator().addNumbers([5, 5, 5, 5]);
        expect(sum).to.equal(20);
    })
})

describe('Convert string to numvber', ()=>{
    it('Should convert string array to a number array', ()=>{
        let converter = new Calculator().convertToNumber(['1','5','7'])
        expect(converter[0]).to.equal(1);
        expect(converter[1]).to.equal(5);
        expect(converter[2]).to.equal(7);
    })
})

