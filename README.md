# v-template-soup

> A full-featured Webpack setup with hot-reload, lint/format-on-save, unit testing, css extraction, vue-router, vuex, vue-i18n, support for sass & PWA support.

## Documentation

- This template is built on top of the main webpack template & pwa template, so please refer to the [webpack template docs](http://vuejs-templates.github.io/webpack).

- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init nash403/v-template-soup my-project
$ cd my-project
$ npm install
$ npm run dev
```

:warning: **This template was built on top of the develop branch of the webpack template which is not considered stable and can contain bugs or not build at all, so use at your own risk.**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint + format with Prettier when used with standard config
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

## Formatter / Linter

This template provide Prettier and StandardJS setup to format / lint javascript code. Below are the ways to setup this with you favorite editor.

### VS Code
- Install these vscode plugins :

  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

  - [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Set user parameters :
``` json
  // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
  "editor.formatOnSave": true,
  // Disable default JavaScript formatter
  "javascript.format.enable": false,
  // Prettier
  "prettier.eslintIntegration": true,
```

## TODO

[] edit eslint config to use at least plugin:vue/recommended
[] add prettier to airbnb config also
[] make this template fully compliant with [poi](https://poi.js.org)

## Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
