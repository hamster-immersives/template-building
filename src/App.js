import React, { Component } from 'react';
// import Nav from './components/Nav';
// import Hero from './components/Hero';
// import Section from './components/Section';
// import SectionTwo from './components/SectionTwo';
// import Footer from './components/Footer';
import { Nav, Hero, Section, SectionTwo, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div> 

        <Nav />
        <Hero />
        <Section />
        <SectionTwo />
        <Footer />

      </div>
    );
  }
}

export default App;