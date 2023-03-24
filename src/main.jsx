import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/publicRoutes";
import "./styles/index.css";
import "./styles/media.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <RouterProvider router={routes} />
 </React.StrictMode>
);
