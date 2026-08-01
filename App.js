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

import React from "react";
import ReactDom from "react-dom/client";
// this is the the react element
const element1 = <h1>this is react element</h1>;

// this it the react component
const ReactComponent = () => {
  return (
    <div>
      {element1}
      <p>this is ReactComponent ❤️❤️❤️❤️❤️</p>
    </div>
  );
};

// const Heading = () => {
//     return <h2>this is react app 😆</h2>
// }
// // this is the function components
// // this component composition
// const Func1 = () => {
//   return (
//     <div>
//       <Heading />
//       <p>this is function</p>
//     </div>
//   );
// };
// const Func2 = () => <p>this is the func1</p>

const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<Func1/>);
root.render(<ReactComponent />);
