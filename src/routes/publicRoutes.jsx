import { Navigate } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import App from "../App";
import { MainLoader } from "@/components";

export const routes = createHashRouter([
  {
    path: "*",
    element: <Navigate to="/" />,
    loader: MainLoader,
   },
 {
  path: "/",
  element: <App />,
 },

]);
