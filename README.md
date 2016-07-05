My fork of @alamgird's angular-starter project.  

**Things I've added / changed:**

* Changed directory structure and components declarations to better align with Todd Motto's [style guide](https://github.com/toddmotto/angular-styleguide)
* Switched to using [ui-router](https://github.com/angular-ui/ui-router)
* Added a more advanced example of a component and service, with testing (see `home` component)
* Using [ng-annotate](https://github.com/olov/ng-annotate/)
* Added uglification and minification to production build
* Added linting
* Changed karma reporting to 'spec' style
* Added ability to debug tests in firefox
 
See below for the original project's list of features:  

# Introduction

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo from git

```bash
# clone repo
$ git clone https://github.com/sJhonny-e/extended-angular-starter.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

Go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `clone` this repo
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`
* live mode in firefox (for debugging): `npm run test:firefox`
