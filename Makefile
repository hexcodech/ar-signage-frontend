SHELL := /bin/bash
WEBPACK = node_modules/webpack/bin/webpack.js
BUILD_CONFIG = ./webpack-build.config.js
BUILD = ./build

all:
	rm -rf $(BUILD); \
	mkdir $(BUILD); \
	cp src/index.html $(BUILD)/index.html; \
	cp -r src/css/ $(BUILD)/css/; \
	cp -r src/font/ $(BUILD)/font/; \
	cp -r src/img $(BUILD)/img; \
	$(WEBPACK) --config "$(BUILD_CONFIG)";
clean:
	rm -rf $(BUILD)
