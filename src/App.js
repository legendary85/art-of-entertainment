import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/navbar/Navbar.js'
import Landing from './components/landing/Landing.js'
import About from './components/about/About.js'
import Packages from './components/packages/Packages.js'
import Footer from './components/Layout/footer/Footer.js'


import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <section>
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/packages' component={Packages}></Route>

        </Switch>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
