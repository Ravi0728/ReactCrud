//Here usd is rafc --> React arrow function component
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './compnents/Navbar';
import Home from './compnents/Home';
import About from './compnents/About';
import NoteState from './context/notes/NoteState'

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
