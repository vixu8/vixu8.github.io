import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";

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
