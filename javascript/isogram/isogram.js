var Isogram = function(string) {
  this.wordArray = string
    .toLowerCase()
    .split('')
    .sort()
    .filter(n => n.match(/(?!\s|\-)\W|[a-z]/g));
}

Isogram.prototype.isIsogram = function() {
  console.log(this.wordArray);
  var value = true;
  for (var i = 0; i < this.wordArray.length - 1; i++) {
    if (this.wordArray[i] === this.wordArray[i + 1]) {
      value = false;
    }
  }
  return value;
}

module.exports = Isogram;
