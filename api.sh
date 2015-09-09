#!/bin/bash
request_uri="/api/procedures?user_id=79d747ee-ba80-47be-a6ce-38a6009c198a"
api_key="80be3a4b60c3b74be59aa6a20b8caccf"
api_secret="649e4ab643936880038d16b1f611d269"
date="$(TZ=GMT date "+%a, %d %b %Y %T %Z")"
content_type="application/json"
echo $date
sig="$(printf "$content_type,,$request_uri,$date" | openssl dgst -sha1 -binary -hmac "$api_secret" "$@" | base64)"
echo $sig
curl -k -H "Authorization: APIAuth $api_key:$sig" \
     -H "Date: $date" \
     -H "Content-Type: $content_type" \
     https://rules-cors.testing.complymd.com$request_uri

# curl 'https://rules-cors.testing.complymd.com/api/procedures?user_id=79d747ee-ba80-47be-a6ce-38a6009c198a' -H 'Origin: http://www.rules.vincari.dev:3333' -H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en-US,en;q=0.8' -H 'Authorization: APIAuth 80be3a4b60c3b74be59aa6a20b8caccf:DyNSES552WugxaIHDIxd/yGT8/I=' -H 'Accept: application/json' -H 'Referer: http://www.rules.vincari.dev:3333/' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2503.0 Safari/537.36' -H 'Connection: keep-alive' -H 'Cache-Control: max-age=0' --compressed