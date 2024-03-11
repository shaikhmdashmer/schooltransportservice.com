import React from 'react'
import { Button } from 'react-bootstrap'

const contactus = () => {
  return (
    <section id="sts-wrap-content">
      <section id="map-wrap">
        <div className="col-sm-12 service-cont wow zoomIn animated">
          <div className="row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15785.355117087673!2d76.94701069999999!3d8.466399050000001!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1502262410146" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
          </div>
        </div>
      </section>
      <section className="contactmain">
        <div className="container">
          <div className="row">
            <article>

              <div className="contactbox row">
                <div className="col-xs-12 col-sm-5">
                  <h2 className="brdrnone contactboxh2 "><strong>Get In</strong> Touch</h2>
                  <div className="row">
                    <div className="col-md-12 col-xs-12">
                      <div className="info-block contacttext">
                        <p className='contacttxt'><strong>Address:</strong></p>
                        <div className="trxt">

                          <p className='contacttxt'>Edsys Towers, Kamaleswaram, Trivandrum – 695009</p>
                          <p>India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="info-block mb-2">
                      <p className='contacttxt'>  <strong>Phone:</strong></p>
                      <div className="trxt">+91 81 1386 0000</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="info-block">
                      <div className="trxt"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-7">
                <div className="page-block-cont-info">
                  <div className="default-form ">

                    <form id="form_subt">
                      <div className="form-group">
                        <input type="text" className="form-control contactinput" placeholder="Name" id="Inputname" name="your_name" required="" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control contactinput" placeholder="Email" name="your_email" required="" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control contactinput" placeholder="Subject" name="your_sub" required="" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control contactinput" rows="6" placeholder="Message" name="your_message"></textarea>
                      </div>
                      <span id="form_error" style={{ color: "#ff940f", float: "left", width: "100%", margin: "5px 0", fontsize: "17px", textalign: "center" }}></span>
                      <span id="form_success" style={{ color: "#478e43", float: "left", width: "100%", margin: "5px 0", fontsize: "17px", textalign: "center" }}></span>
                     
                      <div className="form-group" style={{ position: "relative"  }} >
                        <input type="hidden" id="current_page" value="Contact Us" />
                        <input type="submit" value="SUBMIT" className="btncontact" id="user_submit" />
                        <div className="loader" style={{ padding: "70px" }}></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              </div>
            

            </article>
          </div>
        </div>
      </section>
    </section>
  )
}

export default contactus
