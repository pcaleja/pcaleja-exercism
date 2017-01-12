//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  function isSilent(input) {
    return (input.replace(/\s/g, '') === '');
  }

  function isExclamation(input) {
    return (input.match(/[a-z]/i) && input === input.toUpperCase());
  }

  function isQuestion(input) {
    return (input.slice(-1) === '?');
  }

  switch (true) {
    case(isSilent(input)):
      return 'Fine. Be that way!';
    case(isExclamation(input)):
      return 'Whoa, chill out!';
    case(isQuestion(input)):
      return 'Sure.';
    default:
      return 'Whatever.';
  }
};

module.exports = Bob;
