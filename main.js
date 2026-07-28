import React from "react";
import { createRoot } from "react-dom/client";


const heading = React.createElement(
    "div",
    {id:"div"},
    "Hello World from React",
    React.createElement("h1",{id:"span"}," this is span tag"),
    React.createElement("h2",null," this is h2 tag")
);

const root = createRoot(document.getElementById("root"));

root.render(heading);