'use strict';

var Isogram = function(string) {
  this.wordArray = string
    .toLowerCase()
    .split('')
    .sort()
    .filter(lettersOnly);

  function lettersOnly(char) {
    return char.match(/(?!\s|\-)\W|[a-z]/g);
  }
};

Isogram.prototype.isIsogram = function() {
  for (var i = 0; i < this.wordArray.length - 1; i++) {
    if (this.wordArray[i] === this.wordArray[i + 1]) {
      return false;
    }
  }
  return true;
};

module.exports = Isogram;
