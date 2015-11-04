// Generated from Calculator.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CalculatorParser.
function CalculatorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CalculatorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CalculatorListener.prototype.constructor = CalculatorListener;

// Enter a parse tree produced by CalculatorParser#calculator.
CalculatorListener.prototype.enterCalculator = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#calculator.
CalculatorListener.prototype.exitCalculator = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#Parenthesis.
CalculatorListener.prototype.enterParenthesis = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#Parenthesis.
CalculatorListener.prototype.exitParenthesis = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#Number.
CalculatorListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#Number.
CalculatorListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#Negate.
CalculatorListener.prototype.enterNegate = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#Negate.
CalculatorListener.prototype.exitNegate = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#MultiplyDivide.
CalculatorListener.prototype.enterMultiplyDivide = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#MultiplyDivide.
CalculatorListener.prototype.exitMultiplyDivide = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#AddSubtract.
CalculatorListener.prototype.enterAddSubtract = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#AddSubtract.
CalculatorListener.prototype.exitAddSubtract = function(ctx) {
};



exports.CalculatorListener = CalculatorListener;