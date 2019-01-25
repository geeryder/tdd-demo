
/*
    String Calculator
*/

// An empty string returns zero
// A single number returns the value

// Two numbers, comma delimited, returns the sum

// Two numbers, newline delimited, returns the sum
// Three numbers, delimited either way, returns the sum
// Negative numbers throw an exception
// Numbers greater than 1000 are ignored
// A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)
// A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)
// Many single or multi-char delimiters can be defined (each wrapped in square brackets)

export class Calculator {

    constructor(){}

    returnValue(string:string){
        let trimmedInput = string.replace(/\s+/g,'')
        if(trimmedInput === '' ) return 0;
        else if (Number(trimmedInput)) return Number(trimmedInput);
        
        let stringArray:string[] = this.splitNumbers(trimmedInput);
        let numberArray = this.convertToNumber(stringArray);
        return numberArray;

    }

    splitNumbers(string:string){
        let splitNumber = string.split(',');
        return splitNumber;   
    }

    addNumbers(numberArray: number[]){
        let countNumbers: number = 0;
        for (let index = 0; index < numberArray.length; index++) {
            countNumbers += numberArray[index];
        }
        return countNumbers;
    }
    
    convertToNumber(string: string[]):number[]{
        let numberArray = string.map(Number);
        return numberArray;
    }
    



}