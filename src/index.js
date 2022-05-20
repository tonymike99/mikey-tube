import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  ThemeProvider,
  VideosAndCategoriesProvider,
  AuthProvider,
  HistoryProvider,
  WatchLaterProvider,
  LikedProvider,
} from "./hooks/context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <VideosAndCategoriesProvider>
          <AuthProvider>
            <HistoryProvider>
              <WatchLaterProvider>
                <LikedProvider>
                  <App />
                </LikedProvider>
              </WatchLaterProvider>
            </HistoryProvider>
          </AuthProvider>
        </VideosAndCategoriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
