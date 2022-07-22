import React from "react";
import ReactDOM from "react-dom";
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
  PlaylistProvider,
} from "./hooks/context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <VideosAndCategoriesProvider>
          <AuthProvider>
            <PlaylistProvider>
              <HistoryProvider>
                <WatchLaterProvider>
                  <LikedProvider>
                    <App />
                  </LikedProvider>
                </WatchLaterProvider>
              </HistoryProvider>
            </PlaylistProvider>
          </AuthProvider>
        </VideosAndCategoriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
