import React, {Component} from 'react'
import './About.css';
export default class About extends Component{
  componentDidMount() {
  

  }
  render(){
    return (
<div>
  <main id="main">
<section id="about" className="about">
  <div className="container">
    <div className="section-title">
      <h2>About</h2>
      <p>Multimedia Engineer,looking for an interesting job at your company, which will help me utilize my past knowledge and experience
        and to enhance them further more with time. Working with this organization will be a great opportunity for me.</p>
    </div>
    <div className="row">
      <div className="col-lg-4" data-aos="fade-right">
        <img id="myImg" src="/img/e80c1d7a-e85e-4e47-ae71-2fc5bf702cd4.jpg" className="img-fluid" alt="" />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>Full Stack Developer.</h3>
        <p className="font-italic">
          I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul> 
              <li><i className="icofont-rounded-right" /> <strong>Birthday:</strong> 16 Septembre 1999</li>
              <li><i className="icofont-rounded-right" /> <strong>Website:</strong> www.example.com</li>
              <li><i className="icofont-rounded-right" /> <strong>Phone:</strong> +70 871 630</li>
              <li><i className="icofont-rounded-right" /> <strong>City:</strong>  Beirut, Lebanon</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li><i className="icofont-rounded-right" /> <strong>Age:</strong> 22</li>
              <li><i className="icofont-rounded-right" /> <strong>Degree:</strong> Master</li>
              <li><i className="icofont-rounded-right" /> <strong>PhEmailone:</strong> email@example.com</li>
              <li><i className="icofont-rounded-right" /> <strong>Freelance:</strong> Available</li>
            </ul>
          </div>
        </div>
        <p>
          I have worked on a multitude of web and print based projects for a range of clients providing Web Design (Photoshop, Illustrator, InDesign) and Development (PHP, HTML, CSS, LESS, JS, jQuery, WordPress, WooCommerce, Bootstrap, Responsive Layouts), eCommerce Solutions, Corporate Branding and Graphic Design
        </p>
        <button type="button" id="ModalActive" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Preview Resumé</button> {''}
        <button type="button" id="btnContact" className="btn btn-primary"><a href="#contact" style={{color: 'white'}}>Hire me</a></button> 
      </div>
    </div>
    <div className="container">
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <embed src="/img/portfolio/Francis's Resume.pdf" type="application/pdf" style={{width: '100%', height: 500}} /> 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" value="close">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          
  </main>
</div>
    )
  }
}


