var Gigasecond = function(date) {
  this.inputDate = date;
};

Gigasecond.prototype.date = function() {
  const ms = Date.parse(this.inputDate) + 1e12;
  return new Date(ms);
}

module.exports = Gigasecond;
