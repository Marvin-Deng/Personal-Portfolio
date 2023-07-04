import "./index.css";
import Home from "./pages/HomePage/Home";
import Projects from "./pages/ProjectPage/Projects";
import Technologies from "./pages/TechPage/Technologies";
import About from "./pages/AboutPage/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
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
