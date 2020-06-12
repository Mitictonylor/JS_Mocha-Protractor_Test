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

 it('it should add', function(){
   calculator.previousTotal = 4
   calculator.add(1)
   assert.equal(5, calculator.runningTotal)
 });
 it('it should subtract', function() {
   calculator.previousTotal = 7;
   calculator.subtract(4);
   assert.equal(3,calculator.runningTotal);
 });
 it('it should multiply', function() {
   calculator.previousTotal = 3;
   calculator.multiply(5);
   assert.equal(15, calculator.runningTotal);
 });
 it('it should divide', function() {
   calculator.previousTotal = 21;
   calculator.divide(7);
   assert.equal(3,calculator.runningTotal);
 });
 it('it should concatenate the clicked numbers to the running total', function() {
   calculator.numberClick(6);
   calculator.numberClick(9);
   assert.equal(69,calculator.runningTotal);
 });
 it('it should click on the operator', function() {
   calculator.operatorClick('+');
   assert.equal(true, calculator.newTotal);
 })
 it('it should  clear total when clearClick is pushed', function() {
   calculator.runningTotal = 99;
   calculator.clearClick();
   assert.equal(0, calculator.runningTotal);
 })

 it('it should clear previousOperator', function(){
 calculator.previousOperator = '-';
 calculator.clearClick();
 assert.equal(null, calculator.previousOperator);
})

});
