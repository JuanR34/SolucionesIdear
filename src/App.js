import logo from './logo.svg';
import './App.css';
import React from "react";
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import LineChart from './components/LineChart';
import Grafico from './components/Grafico';
import Grafico2 from './components/Grafico2';
//import Cabezal from './img/Cabezal.jpg'

function App() {
  return (
    <div className="App">
       {/* <img src={Cabezal} alt="henry-movies-logo"></img> */}
    <Logo/>
    <Navbar/>
    <LineChart/>
    <Grafico/>
    <Grafico2/>
    </div>
  );
}

export default App;
