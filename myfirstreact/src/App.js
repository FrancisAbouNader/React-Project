import React, { Component } from 'react';
import './Particles.css';

import Particles from 'react-particles-js';
import particlesConfig from './config/configParticles';
import Header from './HeaderComponent/Header';
import About from './AboutComponent/About';
import Skills from './SkillsComponent/Skills';
import Services from './ServicesComponent/Services';
import Contact from './ContactComponent/Contact';
import Footer from './FooterComponent/Footer';
import Jquery from './JqueryComponent/Jquery';




class App extends Component {
  render() {
    return (
      <div className="App">
        
         
      
       <Jquery/>
      
        <div style={{ position: 'absolute'  }}>
          <Particles className="particles" height="100vh" width="100vw" params={particlesConfig} />
        </div>
        
        <Header />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
        
      </div>
    );
  }
}

export default App;
