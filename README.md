# GitHub to PDF
**Convert GitHub or Gist contents to PDF by removing unnecessary elements.**

## How to use development version
First, you need to change into the directory and install all NodeJS dependencies with npm or yarn:
```
npm install
```

Start the continuous build process to transpile the code into something that can run in Firefox or Chrome:
```
npm run build
```
This creates a WebExtension in the extension subdirectory. Any time you edit a file, it will be rebuilt automatically.

In another shell window, run the extension in Firefox using a wrapper around web-ext:

```
npm start
```
Any time you edit a file, web-ext will reload the extension in Firefox.