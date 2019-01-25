import { NameCombiner } from '../src/index';
import { Ts3 } from '../src/index';
import { expect } from 'chai';


describe('name combiner', () => {
    it('should contain both names', () => {
        let combiner = new NameCombiner();
        combiner.combiner('Georgina', 'Ryder');
        expect(combiner.name).to.equal('Georgina Ryder');

        combiner.combiner('Silly', 'Billy');
        expect(combiner.name).to.equal('Silly Billy');
    })
})

describe('Name spilter', () => {
    it('should split names successfully when 2 names', () => {
        let combiner = new NameCombiner();
        combiner.splitName('Georgina Ryder');
        expect(combiner.firstName).to.equal('Georgina');
        expect(combiner.lastName).to.equal('Ryder');
    });
    it('should handle names with a weird middle bit', () => {
        let combiner = new NameCombiner();
        combiner.splitName('Mark de Cates');
        expect(combiner.firstName).to.equal('Mark');
        expect(combiner.lastName).to.equal('de Cates');
    })
    it('should handle a single name', () => {
        let combiner = new NameCombiner();
        combiner.splitName('Georgina');
        expect(combiner.name).to.equal('Georgina');
    } )
})


describe('Capitalise', () => {
    it('should capitalise all names apart names with weird middel bit', () => {
        let combiner = new NameCombiner();
        let names = combiner.toTitleCase(['georgina','de', 'ryder'])
        expect(names[0]).to.equal('Georgina');
        expect(names[1]).to.equal('de');
        expect(names[2]).to.equal('Ryder');
    })
})

//Ts3
describe('MinDateableAge', () => {
    it('should not be able to date someone half your age + 7', () =>{
        let ts3 = new Ts3();
        expect(ts3.minDateableAge(22)).to.equal(18);
    })
})

describe('Has a fever', () => {
    it('Should have a fever', ()=>{
        let ts3 = new Ts3();
        let temp = ts3.hasFever(34.5);
        expect(temp).to.be.false;
        temp = ts3.hasFever(37.5);
        expect(temp).to.be.true;
        })
    it('Should not have a fever', () => {
        let ts3 = new Ts3();
        let temp = ts3.hasFever(40);
        expect(temp).to.be.true;
    })
})

describe('Calculate TV height', () => { 
    it('Should return height of a 16:9 TV', () =>{
        let ts3 = new Ts3();
        let height = ts3.tvHeight(16);
        expect(height).to.equal(9);
    })
})

describe('Could two people date', ()=>{
    it('Should return whether two people can date', () =>{
        let ts3 = new Ts3();
        expect(ts3.canDate(50, 31)).to.be.false;
        expect(ts3.canDate(31, 50)).to.be.false;
        expect(ts3.canDate(50, 32)).to.be.true;
        expect(ts3.canDate(50, 33)).to.be.true;
    })
})

describe('Darken colours', () => {
    it('should darken a colour by a set amount', () => {
        let ts3 = new Ts3();
        let darkenedArray = ts3.darkenArray([100, 100, 100], 10);
        expect(darkenedArray[0]).to.equal(90);
        expect(darkenedArray[1]).to.equal(90);
        expect(darkenedArray[2]).to.equal(90);
    })
    it('should lighten a colour by a set amount', () => {
        let ts3 = new Ts3();
        let darkenedArray = ts3.darkenArray([100, 100, 100], -10);
        expect(darkenedArray[0]).to.equal(110);
        expect(darkenedArray[1]).to.equal(110);
        expect(darkenedArray[2]).to.equal(110);
    })
    it('values should not go below 0', () => {
        let ts3 = new Ts3();
        let darkenedArray = ts3.darkenArray([0, 5, 100], 10);
        expect(darkenedArray[0]).to.equal(0);
        expect(darkenedArray[1]).to.equal(0);
        expect(darkenedArray[2]).to.equal(90);
    })
    it('values should not go above 255', () => {
        let ts3 = new Ts3();
        let darkenedArray = ts3.darkenArray([255, 250, 100], -10);
        expect(darkenedArray[0]).to.equal(255);
        expect(darkenedArray[1]).to.equal(255);
        expect(darkenedArray[2]).to.equal(110);
    })
})

//Ts4



