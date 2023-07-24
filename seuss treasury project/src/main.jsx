import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SeussHome from "./views/SeussHome.jsx";
import Quote from "./views/quote.jsx";
import Books from "./views/books.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SeussHome />,
      },
      {
        path: "/quote",
        element: <Quote />,
      },
      {
        path: "/books/:id",
        element: <Books />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
