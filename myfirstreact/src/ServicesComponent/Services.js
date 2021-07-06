import React, {Component} from 'react'
import './Services.css'
export default class Services extends Component {
  render() {
    return (
      <div>
        <main id="main">
          <section id="services" className="services">
            <div className="container">
              <div className="section-title">
                <h2>Services</h2>
                <p>Freelance Web Designer &amp; Developer based in Beirut, Lebanon.
                 Highly experienced in designing &amp; developing custom Wordpress websites.</p>
              </div>
              <div className="row" style={{ paddingBottom: 100 }}>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                  <div className="icon"><i className="icofont-computer" /></div>
                  <h4 className="title">Web Design</h4>
                  <p className="description">My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                  <div className="icon"><i className="icofont-image" /></div>
                  <h4 className="title">Photography</h4>
                  <p className="description"> All types of photography can be created for your website.</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                  <div className="icon"><i className="icofont-dashboard-web" /></div>
                  <h4 className="title">Web Developer</h4>
                  <p className="description">The web development process involves taking the graphical elements defined in the design process and coding them into a custom Wordpress theme.</p>
                </div>
              </div>
              <div id="row2"className="row">
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                  <div className="icon"><i className="icofont-video-cam" /></div>
                  <h4 className="title">Video Editing</h4>
                  <p className="description">My approch to video editing is to edit and create any kind of video using different platform</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                  <div className="icon"><i className="icofont-game" /></div>
                  <h4 className="title">Game Programming</h4>
                  <p className="description">My goal is to create a professional game that's leave a lasting, memorable effect</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                  <div className="icon"><i className="icofont-paint" /></div>
                  <h4 className="title">Logo Designing</h4>
                  <p className="description">My goal is to design a professional yet creative logo that reflects your company’s spirit and leaves a lasting, memorable effect.</p>
                </div>
              </div>
            </div>
          </section>

            
        </main>
      </div>
    )
  }
}

