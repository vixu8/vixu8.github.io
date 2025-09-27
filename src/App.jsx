import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Projects from "./Projects";
// import Play from './Play';
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/play">{/* <Play /> */}</Route>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
