import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Projects from "./pages/ProjectPage/Projects";
import Technologies from "./pages/TechPage/Technologies";
import About from "./pages/AboutPage/About";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tech" element={<Technologies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
