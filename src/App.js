import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
//import Portfolio from './components/Portfolio';
//import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;