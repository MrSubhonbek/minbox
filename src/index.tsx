import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "$/store/store";

import { Home } from "./pages/Home";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
);
