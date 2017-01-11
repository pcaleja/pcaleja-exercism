var Hamming = function() {};

Hamming.prototype.compute = function(str1, str2) {
  var errorMessage = 'DNA strands must be of equal length.';
  var distance = 0;

  if (str1.length === str2.length) {
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        distance++;
      }
    }

    return distance;
  } else {
    throw new Error(errorMessage);
  }

};

module.exports = Hamming;
