const { Given, When, Then, Before } = require('cucumber')
var expect = require('chai').expect

const Calculator = require('../../lib/Claculator')

Before(function () {
  this.calculator = new Calculator()
});

Given('I have entered {int} into the calculator', function (operand) {
  this.calculator.enter(operand)
});

Given('I have entered the following numbers', function (dataTable) {
  for (const row of dataTable.hashes()) {
    this.calculator.enter(Number(row.number))
  }
});

When('I choose add', function () {
  this.calculator.add()
});

Then('the result should be {int}', function (expectedResult) {
  expect(this.calculator.result).to.equal(expectedResult)
});