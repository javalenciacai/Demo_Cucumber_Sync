const Calculator = require('./Claculator')

console.log("Using the calculator...")

console.log("3 + 5 is...")

var calculator = new Calculator()
calculator.enter(3)
calculator.enter(5)
calculator.add()

console.log(calculator.result)

console.log("* 10 is...")
calculator.enter(10)
calculator.multiply()

console.log(calculator.result)

