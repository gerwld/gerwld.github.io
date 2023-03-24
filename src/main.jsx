import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { routes } from "./routes/publicRoutes";

import { withDarkmodeStorage } from "./hoc/withDarkmodeStorage";
import "./i18n";

import "./styles/index.css";
import "./styles/media.css";


withDarkmodeStorage();

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <Provider store={store}>
   <RouterProvider router={routes} />
  </Provider>
 </React.StrictMode>
);
