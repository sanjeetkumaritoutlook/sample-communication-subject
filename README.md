# SampleCommunicationSubject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## microui (web-component)

in local, manually: node package-web-components.js

automatically runs after build in server -> postbuild

https://gist.github.com/coryhouse/b7ff5e6d1e41b762c35b

ng build --configuration production

(in windows local) set NODE_OPTIONS=--openssl-legacy-provider

dir dist\sample-communication-subject\*.js

outputHashing : none in angular.json to remove hash from generate dist files

this  web component is also hosted in Github pages via dist (act like AWS S3 bucket)

## Force a Full GitHub Pages Deployment

GitHub Pages by default uses Jekyll, which ignores files in folders starting with _ and sometimes messes up file serving.
Adding .nojekyll ensures that all files (especially JS files) are served properly.

After adding this step:

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
