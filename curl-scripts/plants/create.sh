#!/bin/bash

API="http://localhost:4741"
URL_PATH="/plants"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "plant": {
      "type": "'"${TYPE}"'",
      "stage": "'"${STAGE}"'",
      "light": "'"${LIGHT}"'",
      "water": "'"${WATER}"'",
      "soil": "'"${SOIL}"'"
    }
  }'

echo
