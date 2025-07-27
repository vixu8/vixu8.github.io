import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Projects from "./Projects";
// import Play from './Play';
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/projects" element={<Projects />}></Route> */}
        <Route path="/play">{/* <Play /> */}</Route>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
