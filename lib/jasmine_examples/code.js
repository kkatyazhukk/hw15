// A class containing method for summing and multiplying parameters.
// @class Calculator

class Calculator {
    constructor() {
    };
    
// @param {Array<Number>} theArgs array of numbers for summing
// @return {Number} sum of numbers
// @memberof Calculator
     
    add(...theArgs) {
        let result = 0;
        for (let i = 0; i < theArgs.length; i++) {
          result += theArgs[i];
        }
  
        return result;
    };
// @param {Array<Number>} theArgs array of numbers for multiplication
// @return {Number}
// @memberof Calculator

    multiply(...theArgs) {
        let result = 1;
        for (let i = 0; i < theArgs.length; i++) {
          result = result * theArgs[i];
        }
        return result;
    };
    
    subtract(reduced, subtrahend) {
        return reduced - subtrahend;
    }

    divide(dividend, divider) {
        return dividend / divider;
    }

    exponent(number) {
        return Math.exp(number);
    }
  };

  
// const obj = new Calculator(); 
// console.log(obj); 
// const string = '10, 4, 5';

// const sum = obj.add(string);
// console.log(sum);


// const multi = obj.multiply(array);
// console.log(multi);

// const subtr = obj.subtraction(8, 5);
// console.log(subtr);

// const div = obj.divide(32, 4);
// console.log(div);

// const exp = obj.exponentiation(4);
// console.log(exp);

  
module.exports = { Calculator };