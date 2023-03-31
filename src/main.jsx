import { render } from "preact";
import { Router, Route } from "preact-router";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import { setThemeFromStorage } from "./utils";
import "./i18n";

import "./styles/index.css";
import "./styles/media.css";
import "./styles/connect.css";
import { routes } from "./routes/publicRoutes";

import { Suspense, lazy } from "preact/compat";

setThemeFromStorage();

render(
 <Suspense>
  <Provider store={store}>
   <Router>
    <App path="/" />
   </Router>
  </Provider>
 </Suspense>,
 document.getElementById("root")
);
