#!/bin/bash


URL="https://api.github.com/repos/GouthamKrishnaVangala/bstack_feature_poc/contents/readme.md"

sha=`node -pe 'JSON.parse(process.argv[1]).sha' "$(curl -s $URL)"`

test=`echo 'TEST' | iconv -t UTF-8`

# echo $test

encod_data=`echo $test | base64 -w 0`

# echo $encod_data

curl -X PUT -H "Accept: application/vnd.github.v3+json" -H "Authorization: token $3" $URL -d '{"message": "testmessage1", "sha": "'"$sha"'", "content": "'"$encod_data"'" }'

decode_data=`echo $encod_data | base64 --decode | iconv -f UTF-8`

echo $decode_data
