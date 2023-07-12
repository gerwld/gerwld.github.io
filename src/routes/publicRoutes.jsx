import { route } from "preact-router";
import App from "../App";
import { MainLoader, RootBoundary } from "@/components";
import IndexInsta from "../pages/instaplus/indexInsta";

export const routes = [
  {
    path: "*",
    element: () => route("/"),
    loader: MainLoader,
    errorElement: <RootBoundary />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <RootBoundary />,
  },
  {
    path: "/extensions/instaplus",
    element: <IndexInsta />,
    errorElement: <RootBoundary />,
  },
];
