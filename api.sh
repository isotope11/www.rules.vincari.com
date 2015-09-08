#!/bin/bash
request_uri="/api/procedures"
key_id="cd8f0c4eb0c3c917389972f0b8c0a180"
key_secret="7cc599034bc5d8999b6a2253ad93091d"
date="$(LC_ALL=C date -u +"%a, %d %b %Y %X GMT")"
content_type="application/json"
echo $date
sig="$(printf "$content_type,,$request_uri,$date" | openssl sha1 -binary -hmac "$key_secret" | base64)"
echo $sig
#curl https://app.complymd.com$request_uri \
    #-H "Date: $date" \
    #-H "Authorization: APIAuth $key_id:$sig" \
    #-H "Content-Type: $content_type"
curl --header "Authorization: APIAuth $api_key:$(echo -n "application/json,,$request_uri,$(date -u "+%a, %d %b %Y %T %Z")" | openssl dgst -sha1 -binary -hmac "$api_secret" "$@" | base64)" --header "Date: $(date -u "+%a, %d %b %Y %T %Z")" https://app.complymd.com/$request_uri
