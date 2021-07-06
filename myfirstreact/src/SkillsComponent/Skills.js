import React, {Component} from 'react'
import './Skills.css'
export default class Skills extends Component {
  render() {
    return (
      <div>
        <main id="main">
          <section id="skills" className="skills section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Skills</h2>
                <p> Hard skills are technical knowledge or training that i have gained through any life experience, including my career and education.</p>
              </div>
              <div className="row skills-content">
                <div className="col-lg-6" data-aos="fade-up">
                  <div className="progress">
                    <span className="skill">HTML <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}/>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">CSS <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">JavaScript <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}  style={{ width: '75%' }}/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                  <div className="progress">
                    <span className="skill">PHP <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">Bootstrap <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">animating <i className="val">70%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}/>
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


