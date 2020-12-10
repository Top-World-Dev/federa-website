#!/usr/bin/env bash
set -e

BASE_DIR="$(pwd)/federa-app"
SSR_DIR="$BASE_DIR/nuxt-ssr"
FUNCTIONS_DIR="$BASE_DIR/functions"

rm -rf "$SSR_DIR/.nuxt" "$BASE_DIR/functions/.nuxt" "$BASE_DIR/functions/static"

cd "$SSR_DIR"
cp "$SSR_DIR/.env.example" "$SSR_DIR/.env"
sed -i -E 's/BASIC_AUTH_PASSWORD=.*/BASIC_AUTH_PASSWORD=m8KFSEkt625JYom2hxhX/g' .env
yarn install
yarn build
yarn test

cd "$FUNCTIONS_DIR"
cp ".env.example" ".env"
sed -i -E 's/BASIC_AUTH_PASSWORD=.*/BASIC_AUTH_PASSWORD=m8KFSEkt625JYom2hxhX/g' .env
yarn install

cd "$BASE_DIR"
cp -r "$SSR_DIR/.nuxt" "$BASE_DIR/functions"
cp -r "$SSR_DIR/static" "$BASE_DIR/functions"
