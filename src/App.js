import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { PrivateRoute, RestrictedRoute } from "./auth/index";
import {
  Auth,
  Home,
  Explore,
  History,
  WatchLater,
  Playlists,
  Liked,
  PageNotFound,
} from "./pages/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/*" element={<PageNotFound />} />

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/history" element={<History />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/liked" element={<Liked />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
