var Gigasecond = function(date) {
  this.inputDate = date;
};

Gigasecond.prototype.date = function() {
  return new Date(this.inputDate.getTime() + 1e12);
}

module.exports = Gigasecond;
