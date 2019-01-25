"use strict";
exports.__esModule = true;
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.returnValue = function (string) {
        var trimmedInput = string.replace(/\s+/g, '');
        if (trimmedInput === '')
            return 0;
        else if (Number(trimmedInput))
            return Number(trimmedInput);
        var stringArray = this.splitNumbers(trimmedInput);
        var numberArray = this.convertToNumber(stringArray);
        return numberArray;
    };
    Calculator.prototype.splitNumbers = function (string) {
        var splitNumber = string.split(',');
        return splitNumber;
    };
    Calculator.prototype.addNumbers = function (numberArray) {
        var countNumbers = 0;
        for (var index = 0; index < numberArray.length; index++) {
            countNumbers += numberArray[index];
        }
        return countNumbers;
    };
    Calculator.prototype.convertToNumber = function (string) {
        var numberArray = string.map(Number);
        return numberArray;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=ts10.js.map