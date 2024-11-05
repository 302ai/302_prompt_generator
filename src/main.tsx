import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";
import { Theme } from "@radix-ui/themes";

import App from "./App.tsx";
import "./index.css";
import '@radix-ui/themes/styles.css';
import ScriptLoader from "./ScriptLoader.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Theme>
      <React.StrictMode>
        <ScriptLoader />
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </Theme>
  </Provider>
);
