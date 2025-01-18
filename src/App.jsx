import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LoginPage from "./LoginPage";
import Network from "./Network";
import Mentors from "./Mentors";
import MentorProfile from "./MentorProfile";
import MentorDetails from "./MentorDetails";
import Footer from "./Footer";

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Network />
                <Mentors />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Network" element={<Network />} />
          <Route
            path="/MentorProfile"
            element={
              <>
                <MentorProfile />
                <MentorDetails/>
              </>
            }
          />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
