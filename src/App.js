import logo from './logo.svg';
import './App.scss';
import Navigation from "./components/Navigation"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Languages from "./components/Languages"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Languages />
      <Contact />
    </div>
  );
}

export default App;
