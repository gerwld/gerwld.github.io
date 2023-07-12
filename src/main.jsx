import { render } from "preact";
import { Router } from "preact-router";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import { setThemeFromStorage } from "./utils";
import "./i18n";

import "./styles/index.css";
import "./styles/media.css";
import "./styles/connect.css";

import { Suspense, lazy } from "preact/compat";
import { DeleteInsta, IndexInsta, WelcomeInsta } from "./pages";

setThemeFromStorage();

render(
  <Suspense>
    <Provider store={store}>
      <Router>
        <App path="/" />

        <IndexInsta path="/extensions/instaplus" />
        <WelcomeInsta path="/extensions/instaplus/welcome" />
        <DeleteInsta path="/extensions/instaplus/feedback" />
      </Router>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
