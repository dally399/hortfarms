import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Banner/>

    <Footer/>
    </div>
  );
}

export default App;
