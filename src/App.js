import "./index.css";
import Home from "./pages/Home";
import Projects from "./Projects/Projects";
import Technologies from "./pages/Technologies";
import About from "./pages/About";
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
