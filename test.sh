#!/bin/bash

npm install base-64
npm install utf8
npm install yargs
encode = $(node ./test.js --link=https://mosaiq-ide-test-automation.s3.amazonaws.com/ide-test-automation/reports/QA-343/319/allure-report/index.html)

echo "$encode"

update = $(curl -X PUT -u gouthamkrishnavangala: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 -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/GouthamKrishnaVangala/bstack_feature_poc/contents/readme.md -d '{"message": "testmessage", "content": encode, "sha": "4a39fc723ac698bab9a40560db4f027bf269cbe5"}')
