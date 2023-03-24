import { Navigate } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import App from "../App";
import { MainLoader, RootBoundary} from "@/components";

export const routes = createHashRouter([
 {
  path: "*",
  element: <Navigate to="/" />,
  loader: MainLoader,
  errorElement: <RootBoundary/>,
 },
 {
  path: "/",
  element: <App />,
  errorElement: <RootBoundary/>,
 },
]);
