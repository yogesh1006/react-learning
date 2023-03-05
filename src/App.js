import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path:"/about",
    element: <AboutUs />
  }
])

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element or react Functional Component inside root(or in DOM)
root.render(<RouterProvider router={appRouter}/>);
