// Import Styles
import "../css/styles.css";
// Import Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
// Import Pages
import Home from "./../pages/Home";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import ProjectItem from "../pages/ProjectItem";
// Import dependencies
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects/:id" element={<ProjectItem />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
