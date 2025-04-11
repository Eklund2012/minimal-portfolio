import React from 'react';

import Header from './components/header';
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="App scroll-smooth">
      <section id="home"><Header /></section>
      <section id="intro"><Intro /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="timeline"><Timeline /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
