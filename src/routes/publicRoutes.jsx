import { route } from 'preact-router';
import App from "../App";
import { MainLoader, RootBoundary} from "@/components";

export const routes = [
 {
  path: "*",
  element: () => route('/'),
  loader: MainLoader,
  errorElement: <RootBoundary/>,
 },
 {
  path: "/",
  element: <App />,
  errorElement: <RootBoundary/>,
 },
];
