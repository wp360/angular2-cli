[![Build Status](https://travis-ci.org/madhusudhand/angular2-cli.svg?branch=master)](https://travis-ci.org/madhusudhand/angular2-cli)

* [Angular 2][angular] with [Typescript][ts]
* [Pug] (was Jade)
* [SASS]/[LESS]
* Generate scaffolds
  * component
  * directive
  * route
  * service
  * pipe

**Note**

This is very much a work in progress.
Currently it is supported for Mac and Linux.
Much more scaffolds are yet to come.

## Setup

> Install [Node.js].
(Requires **Node 4 or greater**)

```sh
$ npm install -g angular2-cli
```

#### Creating your angular2 app

```sh
$ ng2 create <app-name> [options]
```

#### Running your app

```sh
$ cd <app-folder>
$ ng2 init
$ ng2 serve
```

#### Generating scaffolds

```sh
$ ng2 make <scaffold-type> <scaffold-name>
or
$ ng2 make <scaffold-type> <path/to/scaffold/scaffold-name>
```

#### Running tests

```sh
$ ng2 test
```

#### Lint

```sh
$ npm run lint
```

#### Dev and Production builds

```sh
$ ng2 build --dev
$ ng2 build --prod

$ ng2 serve --dev
$ ng2 serve --prod
```

## Help

```sh
$ ng2 --help
$ ng2 <command> --help
```

#### placeholder for API references

Add environment specific **api** service urls `config/environment.[dev/prod].ts`
import `src/app/environment.ts` to your component and use the service variables for your HTTP requests.

#### Copy files/folders to build folder

If you need any files/folders (such as `CNAME`) needs to be copied to build folder
add those entries to `angular-build.js` which is located in the project folder.

## License
----

[MIT]


   [angular]: <angular.io>
   [ut]: <https://docs.angularjs.org/guide/unit-testing>
   [ts]: <http://www.typescriptlang.org>
   [pug]: <http://jade-lang.com>
   [SASS]: <http://sass-lang.com>
   [LESS]: <http://lesscss.org>
   [node.js]: <http://nodejs.org>
   [MIT]: <https://github.com/madhusudhand/angular2-cli/blob/master/LICENSE>
