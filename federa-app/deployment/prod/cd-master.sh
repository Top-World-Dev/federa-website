#!/usr/bin/env bash
set -e

BASE_DIR="$(pwd)/federa-app"
SSR_DIR="$BASE_DIR/nuxt-ssr"
FUNCTIONS_DIR="$BASE_DIR/functions"

rm -rf "$SSR_DIR/.nuxt" "$BASE_DIR/functions/.nuxt" "$BASE_DIR/functions/static" "$BASE_DIR/public"

cd "$SSR_DIR"
cp ".env.example" ".env"
sed -i "s~__BASIC_AUTH_PASSWORD__~m8KFSEkt625JYom2hxhX~g" ./.env
sed -i "s~__BASE_URL_API__~https://api.federa.com~g" ./.env
yarn install
yarn build
yarn test

cd "$FUNCTIONS_DIR"
cp ".env.example" ".env"
sed -i "s~__BASIC_AUTH_PASSWORD__~m8KFSEkt625JYom2hxhX~g" ./.env
sed -i "s~__BASE_URL_API__~https://api.federa.com~g" ./.env
yarn install

cd "$BASE_DIR"
cp -r "$SSR_DIR/.nuxt" "$BASE_DIR/functions"
cp -r "$SSR_DIR/static" "$BASE_DIR/functions"
cp -a "$SSR_DIR/static/." "$BASE_DIR/public"
