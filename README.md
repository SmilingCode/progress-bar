# progress-bar

## Introduction

This is a progress-bar app with some animation. All the bar status and button values are fetched from endpoint. Therefore, the data will be vanished once refresh the page.

## Discription

The mainly tools have been used in this App are React, Webpack and bootstrap. React remains all the data states, which will be altered when click event is triggering. Webpack helps to pack all the html, css, scss and js file, and compress them to a smaller version. Finally, Bootstrap gives this App a responsive layout.

## ScreenShot

<p align="center"><img src="progress-bar/screenshots/1.png"></p>

<p align="center"><img src="progress-bar/screenshots/2.png"></p>

## Deploy

Firstly, clone this repository to local by running:
```javascript
git clone https://github.com/SmilingCode/progress-bar.git
```

Secondly, make sure you get all the package in the package.json(both dependencies and devDependencies)
```javascript
npm install --save <packageName>
npm install --save-dev <packageName>
```

One way to see the App is to run the command line
```javascript
npm run start
```

Another way you would see the App by running
```javascript
npm run build
```

A dist folder will be generated in the root path, then can see the app with clicking the index.html page under the dist folder.
