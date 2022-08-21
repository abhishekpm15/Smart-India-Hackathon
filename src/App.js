import "./App.css";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import MentorPage from "./pages/MentorPage";
import Feeds from "./pages/Feeds";
import Blog from "./pages/Blog";
import Badges from "./pages/Badges";
import Questions from "./pages/Questions";
import Communities from "./pages/Communities";
import Events from "./pages/Events";
import GroupPage from "./pages/GroupPage";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/MentorPage" element={<MentorPage />} />
            <Route path="/Feeds" element={<Feeds />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Badges" element={<Badges />} />
            <Route path="/Questions" element={<Questions/>} />
            <Route path="/Communities" element={<Communities/>} />
            <Route path="/Events" element={<Events/>} />
            <Route path="/GroupPage" element={<GroupPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
