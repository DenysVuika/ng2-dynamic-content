# Dynamic Content with Angular (examples)

Contains examples project for the article [Dynamic Content with Angualar 2]()

## Prerequisites

Node.js and npm are essential to Angular development. 

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Running

```bash
git clone https://github.com/DenisVuyka/ng2-dynamic-content
cd ng2-dynamic-content
```

### Install npm packages

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