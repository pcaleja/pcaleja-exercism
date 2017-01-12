var Gigasecond = function(date) {
  this.inputTime = date.getTime();
  this.addedTime = 1e12;
};

Gigasecond.prototype.date = function() {
  return new Date(this.inputTime + this.addedTime);
}

module.exports = Gigasecond;
