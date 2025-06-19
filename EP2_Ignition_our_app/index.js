import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "hello react here...");
// console.log(heading);

// const jsxHeading = (
//   <h1 tabIndex="5" className="heading">
//     Hello JSX
//   </h1>
// );

// use below this is better
const HeadingComponent = <h1>This is from react element</h1>;
console.log(HeadingComponent);

const Title = () => (
  <div>
    <h4>This is title</h4>
  </div>
);

const HeadingComponent2 = () => (
  <div>
    {console.log("Bhushan js inside JSX")}
    <h1>Bhushan from h1 in div ddfdfdf dfgdgdfg</h1>
  </div>
);

const App = () => (
  <>
    <Title />
    <HeadingComponent2 />
  </>
);

console.log(HeadingComponent2());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
