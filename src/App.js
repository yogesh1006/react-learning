import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
     },
    ],
  },
]);

//creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element or react Functional Component inside root(or in DOM)
root.render(<RouterProvider router={appRouter} />);
