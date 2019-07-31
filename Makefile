##
##
##	reducer-patterns
##
##



NPM=pnpm

TASKS=./tasks


default: help

##		make help - display the help
##
help:
	@grep "^##.*" ./Makefile

##

##		make build - build the src and the docs
##
build:
	bash $(TASKS)/build.bash

##

##		make test - run all tests
##		- use MOCHA to pass args to mocha,
##		  e.g. `make test MOCHA="--bail"`
##		- use ESLINT to pass args to eslint,
##		  e.g. `make test ESLINT="..."`
##
test: test-mocha test-eslint

test-eslint:
	ESLINT="$(ESLINT)" sh $(TASKS)/test-eslint.sh

test-mocha:
	MOCHA="$(MOCHA)" sh $(TASKS)/test-mocha.sh

##

##		make package-check - print out a pre-publish package check
##
package-check:
	sh $(TASKS)/package-check.sh

##		make package-publish - publish package on npm
##
package-publish:
	sh $(TASKS)/package-publish.sh

##
##
