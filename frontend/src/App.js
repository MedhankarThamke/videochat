import logo from "./logo.svg";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Landing from "./pages/Landing";
import Landing from "./pages/Landing.jsx";

import Authentication from "./pages/Authentication";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";
import HomeComponent from "./pages/HomeComponent";
import History from "./pages/History";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            {/* <Route path="/home"></Route> */}
            <Route path="/" element={<Landing />}></Route>
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
