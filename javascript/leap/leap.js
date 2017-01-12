'use strict';

var Year = function(input) {
  this.isDivisibleBy400 = input % 400 === 0;
  this.isDivisibleBy4 = input % 4 === 0;
  this.isNotDivisibleBy100 = input % 100 !== 0;
};

Year.prototype.isLeap = function() {
  return this.isDivisibleBy400 ||
         this.isDivisibleBy4 &&
         this.isNotDivisibleBy100;
};

module.exports = Year;
