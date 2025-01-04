import "./App.css";
import  About  from './About/About'
import  Contact  from "./Contact/Contact";
import  Experience  from "./Experience/Experience";
import  Hero  from "./Hero/Hero";
import  Navbar  from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
     
      <Projects />
      <Contact />
    </div>
  );
}

export default App;