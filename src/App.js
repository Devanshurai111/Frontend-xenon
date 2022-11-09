import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/homepage/Home';
import Contact from './components/contact/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [flag, setFlag] = useState(false);
  const Logout = () => {
    setFlag(false);
  }
  return (
    <div className="App">
      {flag ?  <button onClick={Logout}>Logout</button>: <a href='login'>login</a>}
      <Router>
      <Routes>
        <Route exact path="/" element={<Home flag={flag} changeflag={setFlag}/>}/>
        <Route exact path="/login" element={<Login flag={flag} changeflag={setFlag}/>}/>
        <Route exact path="/signup" element={<Signup flag={flag} changeflag={setFlag}/>}/>
        <Route exact path="/contact" element={<Contact flag={flag} changeflag={setFlag}/>}/>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
