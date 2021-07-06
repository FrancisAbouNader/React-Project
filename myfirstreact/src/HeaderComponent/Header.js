import React, { Component } from 'react';
import './Header.css';
import Typical from 'react-typical';
export default class Header extends Component {
  render() {
    return (
      <div>
        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src="img/new1.jpeg" alt="" className="img-fluid rounded-circle" />
              <div className="social-links mt-3 text-center">
                <a href="https://twitter.com/fran99_AB" className="twitter"><i className="bx bxl-twitter" /></a>
                <a href="https://www.facebook.com/sisso.abinader" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="https://www.instagram.com/francis.abounader/" className="instagram"><i className="bx bxl-instagram" /></a>
                {/* <a href="https://www.linkedin.com/in/francis-abou-nader-8b10691b8/" className="google-plus"><i className="bx bxl-skype" /></a> */}
                <a href="https://www.linkedin.com/in/francis-abou-nader-8b10691b8/" className="linkedin"><i className="bx bxl-linkedin" /></a>
              </div>
            </div>
            <nav className="nav-menu">
              <ul>
                <li className="active"><a href="#particles-js"><i className="bx bx-home" /> <span>Home</span></a></li>
                <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
                <li><a href="#skills"><i className="bx bx-file-blank" /> <span>Skills</span></a></li>
                <li><a href="#services"><i className="bx bx-server" /> Services</a></li>
                <li><a href="#contact"><i className="bx bx-envelope" /> Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="particles-js" className="d-flex flex-column justify-content-center align-items-center">
          
          <div className="hero-container" data-aos="fade-in">
            <h1>Francis Abou Nader</h1>
            <p>I'm a {''}


              <Typical className="span"
                loop={Infinity}
                wrapper="b"
                steps={[
                  'Web Developer',
                  1000,
                  'FreeLancer',
                  1000,
                  'Full Stack Developer',
                  1000
                ]}
              />
            </p>
          </div>
        </section>
      </div>
    )
  }
}


