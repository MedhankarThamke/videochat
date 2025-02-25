import logo from "./logo.svg";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Authentication from "./pages/authentication";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";
import HomeComponent from "./pages/HomeComponent";
import History from "./pages/history";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            {/* <Route path="/home"></Route> */}
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/auth" element={<Authentication />}></Route>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/:url" element={<VideoMeetComponent />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}
export default App;
