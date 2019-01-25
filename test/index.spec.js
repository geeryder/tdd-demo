"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
var index_2 = require("../src/index");
var chai_1 = require("chai");
describe('name combiner', function () {
    it('should contain both names', function () {
        var combiner = new index_1.NameCombiner();
        combiner.combiner('Georgina', 'Ryder');
        chai_1.expect(combiner.name).to.equal('Georgina Ryder');
        combiner.combiner('Silly', 'Billy');
        chai_1.expect(combiner.name).to.equal('Silly Billy');
    });
});
describe('Name spilter', function () {
    it('should split names successfully when 2 names', function () {
        var combiner = new index_1.NameCombiner();
        combiner.splitName('Georgina Ryder');
        chai_1.expect(combiner.firstName).to.equal('Georgina');
        chai_1.expect(combiner.lastName).to.equal('Ryder');
    });
    it('should handle names with a weird middle bit', function () {
        var combiner = new index_1.NameCombiner();
        combiner.splitName('Mark de Cates');
        chai_1.expect(combiner.firstName).to.equal('Mark');
        chai_1.expect(combiner.lastName).to.equal('de Cates');
    });
    it('should handle a single name', function () {
        var combiner = new index_1.NameCombiner();
        combiner.splitName('Georgina');
        chai_1.expect(combiner.name).to.equal('Georgina');
    });
});
describe('Capitalise', function () {
    it('should capitalise all names apart names with weird middel bit', function () {
        var combiner = new index_1.NameCombiner();
        var names = combiner.toTitleCase(['georgina', 'de', 'ryder']);
        chai_1.expect(names[0]).to.equal('Georgina');
        chai_1.expect(names[1]).to.equal('de');
        chai_1.expect(names[2]).to.equal('Ryder');
    });
});
describe('MinDateableAge', function () {
    it('should not be able to date someone half your age + 7', function () {
        var ts3 = new index_2.Ts3();
        chai_1.expect(ts3.minDateableAge(22)).to.equal(18);
    });
});
describe('Has a fever', function () {
    it('Should have a fever', function () {
        var ts3 = new index_2.Ts3();
        var temp = ts3.hasFever(34.5);
        chai_1.expect(temp).to.be["false"];
        temp = ts3.hasFever(37.5);
        chai_1.expect(temp).to.be["true"];
    });
    it('Should not have a fever', function () {
        var ts3 = new index_2.Ts3();
        var temp = ts3.hasFever(40);
        chai_1.expect(temp).to.be["true"];
    });
});
describe('Calculate TV height', function () {
    it('Should return height of a 16:9 TV', function () {
        var ts3 = new index_2.Ts3();
        var height = ts3.tvHeight(16);
        chai_1.expect(height).to.equal(9);
    });
});
describe('Could two people date', function () {
    it('Should return whether two people can date', function () {
        var ts3 = new index_2.Ts3();
        chai_1.expect(ts3.canDate(50, 31)).to.be["false"];
        chai_1.expect(ts3.canDate(31, 50)).to.be["false"];
        chai_1.expect(ts3.canDate(50, 32)).to.be["true"];
        chai_1.expect(ts3.canDate(50, 33)).to.be["true"];
    });
});
describe('Darken colours', function () {
    it('should darken a colour by a set amount', function () {
        var ts3 = new index_2.Ts3();
        var darkenedArray = ts3.darkenArray([100, 100, 100], 10);
        chai_1.expect(darkenedArray[0]).to.equal(90);
        chai_1.expect(darkenedArray[1]).to.equal(90);
        chai_1.expect(darkenedArray[2]).to.equal(90);
    });
    it('should lighten a colour by a set amount', function () {
        var ts3 = new index_2.Ts3();
        var darkenedArray = ts3.darkenArray([100, 100, 100], -10);
        chai_1.expect(darkenedArray[0]).to.equal(110);
        chai_1.expect(darkenedArray[1]).to.equal(110);
        chai_1.expect(darkenedArray[2]).to.equal(110);
    });
    it('values should not go below 0', function () {
        var ts3 = new index_2.Ts3();
        var darkenedArray = ts3.darkenArray([0, 5, 100], 10);
        chai_1.expect(darkenedArray[0]).to.equal(0);
        chai_1.expect(darkenedArray[1]).to.equal(0);
        chai_1.expect(darkenedArray[2]).to.equal(90);
    });
    it('values should not go above 255', function () {
        var ts3 = new index_2.Ts3();
        var darkenedArray = ts3.darkenArray([255, 250, 100], -10);
        chai_1.expect(darkenedArray[0]).to.equal(255);
        chai_1.expect(darkenedArray[1]).to.equal(255);
        chai_1.expect(darkenedArray[2]).to.equal(110);
    });
});
//# sourceMappingURL=index.spec.js.map