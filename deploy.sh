#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin git@github.com:tlos3r/btlcndpt.git
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tlos3r/btlcndpt.git main:gh-pages
cd -