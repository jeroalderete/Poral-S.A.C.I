// React Imports

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components Imports

import Root from "./routes/Root";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./routes/ErrorPage";

// Pages Imports

import About from "./pages/About/About";
import Obras from "./pages/Obras/Obras";
import Contact from "./pages/Contact/Contact";
import Store from "./pages/Store/Store";

// CSS Imports

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/obras",
        element: <Obras />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
