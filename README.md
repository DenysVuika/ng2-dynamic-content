# Blank Angular2 project template

This repository holds basic project that can be used as a quick start template when learning and prototyping with Angular 2 and TypeScript. 

_Inspired by [Angular 2 Quickstart](https://github.com/angular/quickstart) project and Angular [5 min quickstart](https://angular.io/docs/ts/latest/quickstart.html) article._

## Prerequisites

Node.js and npm are essential to Angular 2 development. 

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Create a new project based on the template

Clone this repo into new project folder (e.g., `ng2-app`).
```bash
git clone https://github.com/DenisVuyka/ng2samples-blank ng2-app
cd ng2-app
```

Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  // non-Windows
rd .git /S/Q // windows
```

### Create a new git repo

If you'd rather preserve your work under source control, consider taking the following steps.
Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/ng2-app.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `wsrv` web server.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [wsrv](https://www.npmjs.com/package/wsrv), a light-weight, static file server with excellent support for Angular apps that use routing.
