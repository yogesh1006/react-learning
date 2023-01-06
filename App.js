/*
* HMR - hot module replacement
* File watcher algorithm - written in C++
* Bundling 
* Minifying
* Cleaning our code
* DEV and prod build
* superfast build algorithm
* Image optimization
* Caching while development
* compression
* compatible with older versions of browser
* HTTPS on dev
* port number chnages automatically if we run more than 1 project simentaneously
* consistent hashing algorithm
* zero config
*
*
*
* Transitive dependencies (dependency tree)- only react and parcel is not make your app performent, 
* parcel itself also depend or use other packages through it does minification,bundling, compression etc.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

//creating react element h1
const heading1 = React.createElement("h1", {
    className: 'heading1'
}, "Namaste Javascript!");

//creating react element h2
const heading2 = React.createElement("h2", {
    className: 'heading2'
}, "Hello");

//creating react element container-div which contains childrens as heading1 and heading2
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside root(or in DOM)
root.render(container);
