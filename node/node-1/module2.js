var a = 1;

module.exports.a = a;
// Or exports.a = a; does the same thing

module.exports.b = 2;

// You can export a function and call it with m2();
module.exports = function() {
  console.log('Module 2!');
}