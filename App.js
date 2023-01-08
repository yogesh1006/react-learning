import React from "react";
import ReactDOM from "react-dom/client";

// JSX =>  React.createElement => object => object converted into HTML(DOM) using ReactDOM library

//creating react element h2
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {Title()}
      <h2>This is React live Course</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element or react Functional Component inside root(or in DOM)
root.render(<HeaderComponent />);
