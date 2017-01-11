var Year = function(input) {
  this.year = input;
};

Year.prototype.isLeap = function() {
  var leapBoolean;

  switch (true) {
    case (this.year % 400 === 0):
      leapBoolean = true;
      break;
    case (this.year % 4 === 0 && this.year % 100 !== 0):
      leapBoolean = true;
      break;
    default:
      leapBoolean = false;
  }

  return leapBoolean
}

module.exports = Year;
