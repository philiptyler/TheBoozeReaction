#!/bin/bash

set -e

rm -rf node_modules
git pull origin master
npm install
npm test
npm run build
npm start -- 9393

