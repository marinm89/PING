import React from 'react';
import logo from './logo.svg';
import dashboard from './dashboard.png';
import './App.css';
import Header from './components/Header';
import Notify from './components/Notify';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Notify />
        <img src={dashboard} className="dashboard" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
