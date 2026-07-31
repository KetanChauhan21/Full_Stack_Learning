// import React from "react";
// import { createRoot } from "react-dom/client";


// const heading = React.createElement(
//     "div",
//     {id:"div"},
//     "Hello World from React",
//     React.createElement("h1",{id:"span"}," this is span tag"),
//     React.createElement("h2",null," this is h2 tag")
// );

// const root = createRoot(document.getElementById("root"));

// root.render(heading);

import React from 'react';
import ReactDom from 'react-dom/client';



const heading = React.createElement("h1",{"id":"heading1"}, "this is react app 😆");

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);