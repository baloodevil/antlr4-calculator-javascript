Uses ANTLR4 Javascript runtime to lex and parse input using rules from a grammar.
It is derived from <a href='https://github.com/shmatov/antlr4-calculator'>this Java example</a>.

The Calculator grammar is in Calculator.g4.
A compiled grammar that targets Javascript (instead of the default Java) generates .js and .token files (contained in 'js' folder).  
To make changes to the grammar and recompile it, see <a href='https://theantlrguy.atlassian.net/wiki/display/ANTLR4/JavaScript+Target'>here</a>.
To run the project, simply serve index.html from a web server.  The easiest way to do that is to install http-server (an npm package) and run 'http-server' from the project folder and then open 'http://localhost:8080'.

Calculation is done as a user types.  This is done by overriding functions from the generated Calculator...js files.
Specifically, an listeners are attached to parser error events and listeners attached to rule matching events (to push entries onto the stack to do the actual math).

