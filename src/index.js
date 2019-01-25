"use strict";
exports.__esModule = true;
var NameCombiner = (function () {
    function NameCombiner() {
    }
    NameCombiner.prototype.combiner = function (firstname, lastname) {
        return this.name = firstname + ' ' + lastname;
    };
    NameCombiner.prototype.splitName = function (name) {
        var parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
        if (parts.length === 3) {
            this.lastName = this.lastName + ' ' + parts[2];
        }
        else if (parts.length === 1) {
            this.name = parts[0];
        }
    };
    NameCombiner.prototype.toTitleCase = function (name) {
        for (var part = 0; part < name.length; part++) {
            if (name[part].length < 3) {
                name[part].toLowerCase();
            }
            else {
                name[part] = name[part].charAt(0).toUpperCase() + name[part].slice(1);
            }
        }
        return name;
    };
    return NameCombiner;
}());
exports.NameCombiner = NameCombiner;
var Ts3 = (function () {
    function Ts3() {
        this.hasFever = function (temp) { return temp >= 37.5; };
        this.tvHeight = function (width) { return width / 16 * 9; };
    }
    Ts3.prototype.minDateableAge = function (age) {
        return (age / 2 + 7);
    };
    Ts3.prototype.canDate = function (age1, age2) {
        return (age1 < this.minDateableAge(age2) || age2 < this.minDateableAge(age1)) ? false : true;
    };
    Ts3.prototype.darkenArray = function (colors, amount) {
        for (var index = 0; index < colors.length; index++) {
            if (colors[index] - amount < 0) {
                colors[index] = 0;
            }
            else if (colors[index] - amount > 255) {
                colors[index] = 255;
            }
            else {
                colors[index] = colors[index] - amount;
            }
        }
        return colors;
    };
    return Ts3;
}());
exports.Ts3 = Ts3;
//# sourceMappingURL=index.js.map