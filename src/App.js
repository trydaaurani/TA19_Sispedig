import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PustakaBaru from './components/kelola_data/BahanPustakaBaru';
import Data from './components/kelola_data/Data';
import Pemberitahuan from './components/pages/Pemberitahuan';
import Perpus from './components/pages/Perpus';
import Login from './components/pages/Login';
import Buku from './components/bahan_pustaka/Buku.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/bahanpustakabaru' component={PustakaBaru} />
          <Route path='/data' component={Data} />
          <Route path='/pemberitahuan' component={Pemberitahuan} />
          <Route path='/perpus' component={Perpus} />
          <Route path='/login' component={Login} />
          <Route path='/buku' component={Buku} />
        </Switch>
      </Router>
    </>
  );
}

export default App;