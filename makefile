SOURCE=$(wildcard src/*.js)
OBJECTS=$(SOURCE:src/%.js=lib/%.js)

$(info $(OBJECTS))

init:
	mkdir lib

lib/%.js: src/%.js
	./node_modules/babel-cli/bin/babel.js $< -o $@

index.js:
	./node_modules/browserify/bin/cmd.js -d -r react lib/index.js -o $@

worker.js:
	./node_modules/browserify/bin/cmd.js -d lib/worker.js -o $@

compile: init $(OBJECTS) worker.js index.js

clean:
	rm -rf index.js worker.js lib
