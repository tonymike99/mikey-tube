import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components/index";
import {
  Login,
  Signup,
  Home,
  Videos,
  History,
  WatchLater,
  Playlists,
  PageNotFound,
} from "./pages/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/history" element={<History />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
