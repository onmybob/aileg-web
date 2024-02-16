#!/bin/bash

VERSION=$(git tag --sort=committerdate | grep -E '[0-9]' | tail -1 | cut -b 2-7)

VERSION_BITS=(${VERSION//./ })

VNUM1=${VERSION_BITS[0]}
VNUM2=${VERSION_BITS[1]}
VNUM3=${VERSION_BITS[2]}

VNUM3=$((VNUM3+1))

NEW_TAG="v$VNUM1.$VNUM2.$VNUM3"

echo "Build new tag $VERSION to $NEW_TAG"

git tag $NEW_TAG
git push --tags
git pull

echo "Successfully"