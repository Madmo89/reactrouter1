

import './App.css'
import './Red.jsx';
import './Blue.jsx';
import './Home.jsx';
import { Routes, Route, Link } from "react-router-dom";
import Red from './Red.jsx';
import Home from './Home.jsx';

function App() {
  

  return (
    <>
          <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <link to= {"/blue"}>Blue</link>
        <link to=   {"/red"}>Red</link>
        <link to= {"/"} >Home</link>
        
        
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={Blue()} />
          <Route path="/red" element={Red()} />
          <Route path="/" element={Home()} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
