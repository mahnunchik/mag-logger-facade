NODE_BIN ?= node_modules/.bin

MOCHA ?= $(NODE_BIN)/mocha
JSHINT ?= $(NODE_BIN)/jshint

TEST_DIR := test
LIB := index.js


.SUFFIXES:
.PHONY: all test lint

all: lint test

test:
	@$(MOCHA) --reporter spec

lint:
	@$(JSHINT) $(TEST_DIR) $(LIB)
