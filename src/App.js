
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Jobs from "./Jobs";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
         {"   "}
        <Link to="/about">About</Link>
        {"   "}
        <Link to="/Jobs">Jobs</Link>
        {"   "}
        <Link to="/contact">Contact</Link>
        {"   "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      
      </Routes>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="copyright-box">
                <p class="copyright">
                  &copy; Copyright 2022 <strong>Dushyanth</strong>
                </p>
                <div class="credits"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;