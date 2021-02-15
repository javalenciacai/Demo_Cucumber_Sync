class Calculator {
    
  constructor() {
      this.operands = []
  }

  enter(operand) {
    this.operands.push(operand)
  }

  add() {
    this.operands.push(this.operands.pop() + this.operands.pop())
  }

  multiply() {
    this.operands.push(this.operands.pop() * this.operands.pop())
  }

  get result() { return this.operands[this.operands.length-1] }
}

module.exports = Calculator;
