import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Navbar from './components/Navbar';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';


<BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/projects' element={<Projects />} />
  </Routes>
</BrowserRouter>;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
