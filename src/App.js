import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/navbar/Navbar.js'
import Footer from './components/Layout/footer/Footer.js'


import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <section>
        {/* <Landing /> */}
      </section>
      <Footer />
    </Router>
  );
}

export default App;
