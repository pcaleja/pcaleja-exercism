var Words = function() {};

Words.prototype.count = function(string) {
  var count = {};
  var words = string
    .toLowerCase()
    .replace(/\!|\¡|\?|\¿|\&|\@|\$|\%|\^|\:|\.|\s\'|\'\s/g, ' ')
    .split(/\s|\,/)
    .filter(n => n !== '');

  for (var i = 0; i < words.length; i++) {
    count[words[i]] && typeof count[words[i]] === 'number' ?
      count[words[i]] += 1 :
      count[words[i]] = 1;
  }

  return count;
}

module.exports = Words;
