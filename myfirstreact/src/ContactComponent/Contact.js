import React from 'react'
import './Contact.css';
import emailjs from 'emailjs-com';
export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_d4fw82f', 'template_aqezq1t', e.target, 'user_EdEzZS3bOyGvKyHYmfsNg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
        alert("Email has been Sent");
      }
    return (
        <div>
        <main id="main">
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>If you’d like to chat about a job or project please fill in the form below and I’ll get back within 1-2 days.</p>
                    </div>
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="icofont-google-map" />
                                    <h4>Location:</h4>
                                    <p>Aley, Souk El Ghareb</p>
                                </div>
                                <div className="email">
                                    <i className="icofont-envelope" />
                                    <h4>Email:</h4>
                                    <p>francis.abounader1999@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <i className="icofont-phone" />
                                    <h4>Call:</h4>
                                    <p>+961 70 871 630</p>
                                </div>
                                <iframe title="{uniqueTitle}" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1657.7451481507583!2d35.58309635808614!3d33.79965829516886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f22939a49da1b%3A0xe1ae953ddcbe5f5f!2sAin%20El%20Sayde%20Bakery!5e0!3m2!1sen!2slb!4v1619349613647!5m2!1sen!2slb" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form onSubmit={sendEmail} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" className="form-control" id="name" name="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required/>
                                        <div className="validate" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" required/>
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                    <div className="validate" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" id="message" rows={10} data-rule="required" data-msg="Please write something for us" defaultValue={""} required />
                                    <div className="validate" />
                                </div>
                                <button type="submit" className="submit" value="Send Message">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    
    </div>
    )
}
