// Generated from Calculator.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalculatorListener = require('./CalculatorListener').CalculatorListener;
var grammarFileName = "Calculator.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000b\u001f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0012\n",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003\u001a\n\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003",
    "\u0003\u0003\u0002\u0003\u0004\u0004\u0002\u0004\u0002\u0004\u0003\u0002",
    "\u0005\u0006\u0003\u0002\u0007\b \u0002\u0006\u0003\u0002\u0002\u0002",
    "\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002",
    "\u0007\b\u0007\u0002\u0002\u0003\b\u0003\u0003\u0002\u0002\u0002\t\n",
    "\b\u0003\u0001\u0002\n\u000b\u0007\b\u0002\u0002\u000b\u0012\u0005\u0004",
    "\u0003\u0005\f\u0012\u0007\u0003\u0002\u0002\r\u000e\u0007\t\u0002\u0002",
    "\u000e\u000f\u0005\u0004\u0003\u0002\u000f\u0010\u0007\n\u0002\u0002",
    "\u0010\u0012\u0003\u0002\u0002\u0002\u0011\t\u0003\u0002\u0002\u0002",
    "\u0011\f\u0003\u0002\u0002\u0002\u0011\r\u0003\u0002\u0002\u0002\u0012",
    "\u001b\u0003\u0002\u0002\u0002\u0013\u0014\f\u0007\u0002\u0002\u0014",
    "\u0015\t\u0002\u0002\u0002\u0015\u001a\u0005\u0004\u0003\b\u0016\u0017",
    "\f\u0006\u0002\u0002\u0017\u0018\t\u0003\u0002\u0002\u0018\u001a\u0005",
    "\u0004\u0003\u0007\u0019\u0013\u0003\u0002\u0002\u0002\u0019\u0016\u0003",
    "\u0002\u0002\u0002\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u0019\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u0005\u0003",
    "\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u0005\u0011\u0019",
    "\u001b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', 'null', 'null', "'*'", "'/'", "'+'", "'-'", 
                     "'('", "')'" ];

var symbolicNames = [ 'null', "Number", "WS", "MULTIPLY", "DIVIDE", "ADD", 
                      "SUBTRACT", "LEFT", "RIGHT", "ErrorCharacter" ];

var ruleNames =  [ "calculator", "expression" ];

function CalculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CalculatorParser.prototype = Object.create(antlr4.Parser.prototype);
CalculatorParser.prototype.constructor = CalculatorParser;

Object.defineProperty(CalculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.Number = 1;
CalculatorParser.WS = 2;
CalculatorParser.MULTIPLY = 3;
CalculatorParser.DIVIDE = 4;
CalculatorParser.ADD = 5;
CalculatorParser.SUBTRACT = 6;
CalculatorParser.LEFT = 7;
CalculatorParser.RIGHT = 8;
CalculatorParser.ErrorCharacter = 9;

CalculatorParser.RULE_calculator = 0;
CalculatorParser.RULE_expression = 1;

function CalculatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_calculator;
    return this;
}

CalculatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CalculatorContext.prototype.constructor = CalculatorContext;

CalculatorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CalculatorContext.prototype.EOF = function() {
    return this.getToken(CalculatorParser.EOF, 0);
};

CalculatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterCalculator(this);
	}
};

CalculatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitCalculator(this);
	}
};




CalculatorParser.CalculatorContext = CalculatorContext;

CalculatorParser.prototype.calculator = function() {

    var localctx = new CalculatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CalculatorParser.RULE_calculator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.expression(0);
        this.state = 5;
        this.match(CalculatorParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ParenthesisContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesisContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesisContext.prototype.constructor = ParenthesisContext;

CalculatorParser.ParenthesisContext = ParenthesisContext;

ParenthesisContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesisContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterParenthesis(this);
	}
};

ParenthesisContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitParenthesis(this);
	}
};


function NumberContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberContext.prototype = Object.create(ExpressionContext.prototype);
NumberContext.prototype.constructor = NumberContext;

CalculatorParser.NumberContext = NumberContext;

NumberContext.prototype.Number = function() {
    return this.getToken(CalculatorParser.Number, 0);
};
NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitNumber(this);
	}
};


function NegateContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateContext.prototype = Object.create(ExpressionContext.prototype);
NegateContext.prototype.constructor = NegateContext;

CalculatorParser.NegateContext = NegateContext;

NegateContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NegateContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterNegate(this);
	}
};

NegateContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitNegate(this);
	}
};


function MultiplyDivideContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.operator = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyDivideContext.prototype = Object.create(ExpressionContext.prototype);
MultiplyDivideContext.prototype.constructor = MultiplyDivideContext;

CalculatorParser.MultiplyDivideContext = MultiplyDivideContext;

MultiplyDivideContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MultiplyDivideContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterMultiplyDivide(this);
	}
};

MultiplyDivideContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitMultiplyDivide(this);
	}
};


function AddSubtractContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.operator = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubtractContext.prototype = Object.create(ExpressionContext.prototype);
AddSubtractContext.prototype.constructor = AddSubtractContext;

CalculatorParser.AddSubtractContext = AddSubtractContext;

AddSubtractContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AddSubtractContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterAddSubtract(this);
	}
};

AddSubtractContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitAddSubtract(this);
	}
};



CalculatorParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, CalculatorParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        switch(this._input.LA(1)) {
        case CalculatorParser.SUBTRACT:
            localctx = new NegateContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 8;
            this.match(CalculatorParser.SUBTRACT);
            this.state = 9;
            this.expression(3);
            break;
        case CalculatorParser.Number:
            localctx = new NumberContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 10;
            this.match(CalculatorParser.Number);
            break;
        case CalculatorParser.LEFT:
            localctx = new ParenthesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 11;
            this.match(CalculatorParser.LEFT);
            this.state = 12;
            this.expression(0);
            this.state = 13;
            this.match(CalculatorParser.RIGHT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 25;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 23;
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyDivideContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 17;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 18;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.MULTIPLY || _la===CalculatorParser.DIVIDE)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 19;
                    this.expression(6);
                    break;

                case 2:
                    localctx = new AddSubtractContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 20;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 21;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.ADD || _la===CalculatorParser.SUBTRACT)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 22;
                    this.expression(5);
                    break;

                } 
            }
            this.state = 27;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


CalculatorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalculatorParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalculatorParser = CalculatorParser;
