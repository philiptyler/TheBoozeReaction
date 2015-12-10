#!/bin/bash

echo "Running the build"

# Wrangle paths
# Set $DIR to this directory, so we can run this script from anywhere.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# Add node_modules executables to our PATH
PATH=$PATH:$DIR/node_modules/.bin
SRC=$DIR/src

# make our build directory if it doesn't exist yet
mkdir -p build

# compile javascript
browserify $SRC/js/main.js > $DIR/build/script.js

# straight-up copy the html file
cp $SRC/index.html $DIR/build/index.html 

# copy the css (for now)
cp $SRC/css/application.css $DIR/build/style.css

