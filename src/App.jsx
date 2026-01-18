import React from "react";
import { Navbar } from "./components/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import { Home } from "./pages/home";
import Projects  from "./pages/Projects/Projects";
import Footer from "./pages/Footer/Footer"
import './index.css';


function App() {
  return (
    <div className="App">
      <Navbar>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
