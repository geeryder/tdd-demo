"use strict";
exports.__esModule = true;
var ts10_1 = require("../src/ts10");
var chai_1 = require("chai");
describe('An empty string should return zero', function () {
    it('Should return zero when the string is empty', function () {
        var stringCalculator = new ts10_1.Calculator();
        var emptyString = stringCalculator.returnValue('');
        chai_1.expect(emptyString).to.equal(0);
        var spaceString = stringCalculator.returnValue('    ');
        chai_1.expect(spaceString).to.equal(0);
    });
});
describe('A single number returns the value', function () {
    it('Should return a value of a single number', function () {
        var value = new ts10_1.Calculator().returnValue('7');
        chai_1.expect(value).to.equal(7);
        var value2 = new ts10_1.Calculator().returnValue('1');
        chai_1.expect(value2).to.equal(1);
    });
});
describe('Spilt the string of numbers', function () {
    it('Should spilt the string of numbers by comma', function () {
        var split = new ts10_1.Calculator().splitNumbers('1,2,3,4');
        chai_1.expect(split[0]).to.equal('1');
        chai_1.expect(split[1]).to.equal('2');
        chai_1.expect(split[2]).to.equal('3');
        chai_1.expect(split[3]).to.equal('4');
    });
});
describe('Add two numbers', function () {
    it('Should return a calculated sum of two numbers', function () {
        var sum = new ts10_1.Calculator().addNumbers([5, 5, 5, 5]);
        chai_1.expect(sum).to.equal(20);
    });
});
describe('Convert string to numvber', function () {
    it('Should convert string array to a number array', function () {
        var converter = new ts10_1.Calculator().convertToNumber(['1', '5', '7']);
        chai_1.expect(converter[0]).to.equal(1);
        chai_1.expect(converter[1]).to.equal(5);
        chai_1.expect(converter[2]).to.equal(7);
    });
});
//# sourceMappingURL=ts10.spec.js.map