Feature: Addition

Rules for basic addition:
- Only non-negative numbers
- The operator has to be specified after both operands have been entered

@tc:90651
@basic
Scenario: Add two numbers
	Given I have entered 5 into the calculator
	And I have entered 7 into the calculator
	When I choose add
	Then the result should be 12

@tc:90828
@basic
Scenario: Add two numbers leve 1
	Given I have entered 5 into the calculator
	And I have entered 7 into the calculator
	When I choose add
	Then the result should be 12

@tc:90939
@basic
Scenario: Add two numbers level 2
	Given I have entered 5 into the calculator
	And I have entered 7 into the calculator
	When I choose add
	Then the result should be 12

@tc:91032
@basic
Scenario: Add two numbers level 3
	Given I have entered 5 into the calculator
	And I have entered 7 into the calculator
	When I choose add
	Then the result should be 12


@tc:92058
@basic
Scenario: Add two numbers level 4
	Given I have entered 5 into the calculator
	And I have entered 7 into the calculator
	When I choose add
	Then the result should be 12