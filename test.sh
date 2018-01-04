set -e

yes "" | ./node_modules/.bin/vue init . test-project

cd test-project
npm install
npm run lint
npm test
npm run build
