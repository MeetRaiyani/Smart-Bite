import React from "react";
import "./contact.css"
const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="bg-poster"></div>
        <div className="container">
          <div className="row">
            <div className="border flex">
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
            </div>
            <div className="content">

              <div className="heading flex">
                <h1>contact us</h1>
              </div>
              <div className="main-box flex">
                <div className="box flex">
                  <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119019.76571275343!2d72.88699274999999!3d21.217263799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723463216309!5m2!1sen!2sin" width="600" height="450" style={{ "border": "0" }} allowfullscreen="" title="Googlemap Location" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
                <div className="box">
                  <div className="form-box">
                    <form action="#">
                      <span>write to us</span>
                      <h2>contact us</h2>
                      <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="name" required />
                      </div>
                      <div className="input-box">
                        <label htmlFor="password">Email</label>
                        <input type="email" placeholder="e-mail" required />
                      </div>
                      <div className="textarea-box">
                        <label htmlFor="address">Message</label>
                        <textarea name="message" id="address" required rows={2} placeholder=" message"></textarea>
                      </div>
                      <div className="btn flex">
                        <button type="submit">send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;