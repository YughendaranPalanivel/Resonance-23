import './App.css';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import Workshops from "./Pages/Workshops/Workshops";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import Appbar from './Components/Appbar/Appbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Appbar/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/workshops' element={<Workshops/>} />
          <Route path="/team/:teamId" element={<Team/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
