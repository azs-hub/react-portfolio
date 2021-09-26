import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
