var dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function(string) {
  var rna = [];
  var dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  for (var i = 0; i < string.length; i++) {
    rna.push(dnaToRna[string[i]]);
  }

  return rna.join('');
};

module.exports = dnaTranscriber;
