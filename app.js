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
