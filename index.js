/*
Install babel to translate the ES6 and newer version back to 
to the older version so every browser can read it.
-Open the folder in the terminal and add these lines to apply babel.

npm init

npm install babel-plugin-add-module-exports --save-dev 

npm install --save-dev babel-preset-es2015-node5

npm install --save-dev @babel/core @babel/cli @babel/preset-env

npm install --save-dev nodemon
*/



import { Dashboard } from './dashboard/dashboard.js';

const dashboard = new Dashboard();

console.log(dashboard.loadDashboard());