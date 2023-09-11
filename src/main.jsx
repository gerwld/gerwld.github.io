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
import {
  DeleteInsta,
  Deleteec,
  Deletemt,
  Deletespotify,
  IndexInsta,
  Indexec,
  Indexmt,
  Indexspotify,
  WelcomeInsta,
  Welcomeec,
  Welcomemt,
  Welcomespotify,
} from "./pages";

setThemeFromStorage();

render(
  <Suspense>
    <Provider store={store}>
      <Router>
        <App path="/" />

        <IndexInsta path="/extensions/ip" />
        <WelcomeInsta path="/extensions/ip/welcome" />
        <DeleteInsta path="/extensions/ip/uninstall" />

        <Indexmt path="/extensions/mt" />
        <Welcomemt path="/extensions/mt/welcome" />
        <Deletemt path="/extensions/mt/uninstall" />

        <Indexec path="/extensions/ec" />
        <Welcomeec path="/extensions/ec/welcome" />
        <Deleteec path="/extensions/ec/uninstall" />

        <Indexspotify path="/extensions/spte" />
        <Welcomespotify path="/extensions/spte/welcome" />
        <Deletespotify path="/extensions/spte/uninstall" />
      </Router>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
