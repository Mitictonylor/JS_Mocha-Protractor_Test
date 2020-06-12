var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

 it('it can add', function(){
   calculator.previousTotal = 4
   calculator.add(1)
   assert.equal(5, calculator.runningTotal)
 });
 it('it can subtract', function() {
   calculator.previousTotal = 7;
   calculator.subtract(4);
   assert.equal(3,calculator.runningTotal);
 })
 it('it can multiply', function() {
   calculator.previousTotal = 3;
   calculator.multiply(5);
   assert.equal(15, calculator.runningTotal);
 })
});
