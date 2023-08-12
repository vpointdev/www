# About

Pablo Barquero here, senior software engineer and solutions consultant. This website offers a collection of information accumulated over the years, with a focus on being supported with the construction, testing, and rewriting of programs using ChatGPT OpenAI.

## WWW

This codebase will be my foundation for displaying the projects for which I have created a solution.

## Folder Structure

The workspace contains two folders by default, where:

- `dist`: the folder to maintain build outputs
- `node_modules`: the folder to maintain npm packages
- `firebase.json`: the file to maintain firebase configuration
- `package.json`: the file to maintain npm dependencies
- `package-lock.json`: the file to maintain npm dependencies
- `README.md`: the file to maintain project documentation
- `tsconfig.json`: the file to maintain typescript configuration
- `tsconfig.app.json`: the file to maintain typescript configuration
- `tsconfig.spec.json`: the file to maintain typescript configuration
- `firestore.rules`: the file to maintain firestore rules
- `firestore.indexes.json`: the file to maintain firestore indexes
- `angular.json`: the file to maintain angular configuration
- `LICENSE`: the file to maintain project license
- `.gitignore`: the file to maintain git configuration
- `.editorconfig`: the file to maintain editor configuration
- `ngsw-config.json`: the file to maintain service worker configuration
- `storage.rules`: the file to maintain storage rules
- `.firebaserc`: the file to maintain firebase configuration
- `src`: the folder to maintain source code

### Source Code Folder Structure

```
|- src
| |- app
| | |- core
| | | |- guards
| | | |- interceptors
| | | |- services
| | | | |- theme
| | | |- validators
| | |- layout
| | | |- components
| | | |- directives
| | | |- pipes
| | |- shared
| | | |- components
| | | | |- carrousels
| | | | | |- marketing-carousel
| | | | |- footers
| | | | |- headers
| | | | |- navbars
| | | | | |- navbar-menu-options
| | | | |- switchers
| | | | | |- language-switcher
| | | | | |- theme-switcher
| | | |- directives
| | | |- pipes
|- .gitignore`: the file to maintain git configuration
|- angular.json`: the file to maintain angular configuration
|- firebase.json`: the file to maintain firebase configuration
|- LICENSE`: the file to maintain project license
|- ngsw-config.json`: the file to maintain service worker configuration
|- package-lock.json`: the file to maintain npm dependencies
|- package.json`: the file to maintain npm dependencies
|- README.md`: the file to maintain project documentation
|- tsconfig.app.json`: the file to maintain typescript configuration
|- tsconfig.json`: the file to maintain typescript configuration
|- tsconfig.spec.json`: the file to maintain typescript configuration
```

- `core`: Contains global application features like guards, interceptors, services, and validators that are used throughout the application.
- `layout`: Contains reusable UI components, directives, and pipes that are used in different parts of the application.
- `shared`: Contains shared UI components, directives, and pipes that are used in different feature modules.

## First time Deployment Guide

This guide will walk through the process of running, inspecting, testing, and deploying an Angular application to Firebase hosting.

### Prerequisites

- Node.js and NPM (Node Package Manager) installed.
- Angular CLI (Command Line Interface) installed.
- Firebase CLI installed.

#### Config the desired bundle sizes

- Open `angular.json` edit the budget settings

```
 {
  "type": "initial",
  "maximumWarning": "5mb",
  "maximumError": "10mb"
},
```

### Git init

- Clone the repository from GitLab.
- Navigate to the project directory.
- Install dependencies.
- Start the application.

```
git clone https://github.com/vanishing-point-dev/www.git
cd [repository-name]
npm i
```

## Plugins used in the app

### FontAwesome

[https://fontawesome.com/icons](https://fontawesome.com/icons)

Install Font Awesome Package

```
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/angular-fontawesome
npm i @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
```

Open `app.module.ts

```
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
```

Usage

```
<fa-icon icon="dot-circle" class="far"></fa-icon>
<fa-icon icon="github" class="fab"></fa-icon>
<fa-icon icon="github" class="fab fa-lg" style="color: red;"></fa-icon>
```

#### Add PWA Support

Run the command

```
ng add @angular/pwa
```

### Add Bootstrap 5

Install Bootstrap

```
npm install bootstrap
```

Import Bootstrap Styles

```
/* src/styles.scss */
@import '~bootstrap/dist/css/bootstrap.min.css';
```

### Add NGX Bootstrap

Install Angular Bootstrap

```
npm install ngx-bootstrap
```

Open `app.module.ts` import the necessary modules for the Carousel

```
import { CarouselModule } from 'ngx-bootstrap/carousel'; // Import the CarouselModule
imports: [BrowserModule, CarouselModule.forRoot()], // Add CarouselModule here
```

### Add Fav Icon Generator

Install `cli-real-favicon`:

```
npm install -g cli-real-favicon
real-favicon generate faviconDescription.json faviconData.json outputDir
```

## Update package.json project dependencies

Updating Dependencies with npm-check-updates
The npm-check-updates package allows you to easily update your project's dependencies to their latest available versions.

```
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

## Run, Test, Build & deploy Scripts

```
"scripts": {
    "ng": "ng",
    "serve": "npm run build && ng serve",
    "serve-testing": "npm run build && ng serve --configuration=testing",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "clean": "rm -rf dist/ && rm -rf node_modules/ && npm cache clean --force && rm -f package-lock.json && npm i && npm run build",
    "build-prod": "ng build --configuration production",
    "deploy-staging": "npm run build && firebase deploy --only hosting --project default",
    "deploy-prod": "npm run build-prod && firebase deploy --only hosting --project production"
  },
```

Run the following npm commands to run, build, test or deploy the app

```

npm run [script name]

```

## Tips to improve prod bundle

### Follow semantic versioning

<https://docs.npmjs.com/about-semantic-versioning>

### Analyze bundle

Run the source-map-explorer to analyze the bundle:

```
npx source-map-explorer dist/[your-app-name]/main.*.js
```

Remove Unused Code and Dependencies:
After analyzing your bundle, identify and remove any unused code or dependencies that are not essential for your application. This might involve removing unused components, services, or external libraries that you don't need.

Code Splitting and Lazy Loading:
Consider using Angular's code splitting and lazy loading features to load parts of your application only when they are needed. This can significantly reduce the initial bundle size and improve the application's loading speed. Use lazy loading for feature modules to load them on-demand instead of including them in the initial bundle.

Optimize Images and Assets:
Optimize images and other assets to reduce their size. Use tools like imagemin to compress images without losing quality.

Tree Shaking:
Ensure that tree shaking is properly working in your Angular project. Tree shaking eliminates unused code from the final bundle during the production build. Make sure you're not importing entire modules when you only need specific components or functions from them.

Minimize External Libraries:
Be cautious with external libraries and dependencies. Some libraries might bring additional dependencies that you don't need, which can increase the bundle size. Opt for smaller alternatives or custom solutions when possible.

Enable Gzip Compression:
Configure your web server to enable Gzip compression for your Angular application. This can significantly reduce the size of your bundles during transmission over the network.

Set Lower Budgets:
If your application is still not meeting the desired bundle size, consider setting lower budgets in your angular.json file to force stricter constraints on the bundle size.

Remember to re-run the ng build --prod command after making changes to see the updated bundle size and ensure it meets the specified budget. By optimizing your application's code and assets, you should be able to reduce the bundle size and meet the budget requirements.

## Deploying the Application to Firebase Hosting

- Run the build command.
- Initialize a firebase project in angular app directory.
- Select Hosting from the list of Firebase features.
- Choose the Firebase project to deploy the application to.
- Set the public directory to dist/[repository-name].
- Configure as a single-page app.
- Run the deploy command.

```

ng build --prod
firebase init
firebase deploy

```

## Setting up, testing, and deploying Firebase hosting

Firebase Hosting is a fast and secure way to serve static and dynamic content to your users. In this section, we will go through the steps to set up, test, and deploy Firebase hosting for the GeaNext Angular application.

- Node.js and NPM (Node Package Manager) installed.
- Firebase CLI installed.

## Setting up Firebase Hosting

- Navigate to the project directory.
- Install dependencies.
- Initialize a firebase project in angular app directory.
- Select Hosting from the list of Firebase features.
- Choose the Firebase project to deploy the application to.
- Set the public directory to dist/[repository-name].
- Configure as a single-page app.

```

cd [repository-name]
npm install
firebase init

```

### Testing Firebase Hosting

- Run the serve command.

```

firebase serve

```

### Deploying Firebase Hosting

- Run the deploy command.

```

firebase deploy --only hosting

```

## Setting up Firebase Emulators

- Navigate to the project directory.
- Install dependencies.
- Initialize a firebase project in angular app directory.
- Select Emulators from the list of Firebase features.
- Choose the Firebase project to deploy the application to.
- Select Yes to install dependencies with npm.
- Select Yes to overwrite any files.

```

cd [repository-name]
npm install
firebase init

```

### Testing Firebase Emulators

- Run the serve command.

```

firebase emulators:start

```

## License

This project is licensed under the [Apache License](https://github.com/vanishing-point-dev/www/blob/main/LICENSE).
