//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Products";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/countries",
        element: <Countries></Countries>
      },
      {
        path: "/countryDetails/:cname/:cap/:pop",
        element: <CountryDetails></CountryDetails>
      }
    ]
  }
]);
root.render(<RouterProvider router={router}></RouterProvider>);
