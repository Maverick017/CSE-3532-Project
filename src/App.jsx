import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LoginPage from "./LoginPage";
import Network from "./Network";
import Mentors from "./Mentors";
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
          <Route path="/network" element={<Network />} />
        </Routes>
        </main>
      </div>
    </Router>
  );

export default App;
