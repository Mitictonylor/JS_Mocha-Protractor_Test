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
   calculator.previousTotal = 1
   calculator.add(4)
   assert.equal(5, calculator.runningTotal)
 });

});
