import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
// import Projects from './Projects';
// import Play from './Play';
// import About from './About';
import Home from './Home';


function App() {
return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/projects">
                {/* <Projects /> */}
            </Route>
            <Route path="/play">
                {/* <Play /> */}
            </Route>
            <Route path="/about">
                {/* <About /> */}
            </Route>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);
}

export default App