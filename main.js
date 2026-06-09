// const heading = document.createElement('h2');
// heading.innerText = 'Hello World';
// document.body.appendChild(heading);

const heading = React.createElement(
    "div",
    { id: "parent" },
    ["Hello", React.createElement("span", { style: { color: "red" } }, "World")]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);