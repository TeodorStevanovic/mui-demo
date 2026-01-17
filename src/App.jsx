import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import Layout from "./Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "users", element: <User /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
