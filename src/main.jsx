import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProvider from "./Components/ContextProvider";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./Store/store";
import ScrollToTop from './ScrollToTop'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ContextProvider>
                      <ScrollToTop/>
                        <App />
                    </ContextProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
