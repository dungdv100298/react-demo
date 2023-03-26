import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import AppProvider from "./contexts/AppProvider";
import App from './App'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import i18n from "./locales/i18n";
import rootReducer from "./apps/redux/reducers";

// import "antd/dist/antd.less";
import "./assets/styles/main.scss";
import { GOOGLE_CLIENT_ID } from "./utils/constants";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...[thunk])),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <AppProvider>
              <App />
            </AppProvider>
          </I18nextProvider>
        </Provider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
