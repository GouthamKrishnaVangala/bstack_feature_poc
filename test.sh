#!/bin/bash

test=`echo '<b>TEST</b> <p align="center">  <a href="https://store.mosaiq.one/" target="_blank">      <img alt="mosaiq" src="https://mosaiq-ide-test-automation.s3.amazonaws.com/ide-test-automation/reports/badge/mosaiq-store-logo.png" width="150">  </a></p><h2><b> Mosaiq IDE Test Automation Status</b></h2><p align="center">  <a href="https://github.com/mosaiqone/ide-test-automation/actions?query=workflow%3Amosaiq-ide-test-automation">    <img alt="Overall Test Automation Status" src="https://github.com/mosaiqone/ide-test-automation/workflows/mosaiq-ide-test-automation/badge.svg"></a>  <a href=https://mosaiq-ide-test-automation.s3.amazonaws.com/ide-test-automation/reports/'$1'/319/allure-report/index.html target="_blank">    <img alt="Functional Test Status" src="https://mosaiq-ide-test-automation.s3.amazonaws.com/ide-test-automation/reports/badge/functionalTest.svg"></a>  <a href="https://github.com/mosaiqone/ide-test-automation">    <img alt="Performance Test Status" src="https://mosaiq-ide-test-automation.s3.amazonaws.com/ide-test-automation/reports/badge/performanceTest.svg"></a>  <a href="https://mosaiq-ide-test-automation.s3.amazonaws.com/ide-test-automation/reports/uiReports/report.html">    <img alt="Ui Responsiveness Test Status" src="https://mosaiq-ide-test-automation.s3.amazonaws.com/ide-test-automation/reports/badge/UiResponsiveTest.svg"></a></p>' | iconv -t UTF-8`

# echo $test

encod_data=`echo $test | base64 -w 0`

# echo $encod_data

curl -X PUT -H "Accept: application/vnd.github.v3+json" -H "Authorization: token $2" https://api.github.com/repos/GouthamKrishnaVangala/bstack_feature_poc/contents/readme.md -d '{"message": "testmessage1", "sha": "'"$3"'", "content": "'"$encod_data"'" }'

decode_data=`echo $encod_data | base64 --decode | iconv -f UTF-8`

echo $decode_data
