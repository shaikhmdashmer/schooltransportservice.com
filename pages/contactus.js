import React from 'react'
import { Button } from 'react-bootstrap'

const contactus = () => {
  return (
    <section id="_02cont_wrap" className="_0pdng">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3946.300104421824!2d76.94763531432922!3d8.470170493909716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEdsys+Towers%2C+Near+ICICI+Bank+ATM+Kamaleswaram%2C+Trivandrum!5e0!3m2!1sen!2sin!4v1515575883103"
      width="100%"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      title="Google Maps"
    ></iframe>
    <div className="">
      {/* _03_blk_info map overlapping classname */}
      <div className="container colourWhite mb-2">
        <div className="_03_blk_wrap">
          <div className="row">
            <div className="_02_hd mt-4">
              <span aria-hidden="true" className=""></span>
              <h2>Get In Touch</h2>
            </div>
          </div>
          <div className="_01colm_wrap">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-12">
                    <div className="_03colm_wrap _15mngBtm _03_bdrBtm">
                      <h4>Pune</h4>
                      <ul>
                        <li>
                          <i className="fa fa-home"></i> Kalas road,
                          Vishrantwadi, Pune, Maharashtra-411015,
                        </li>
                        <li>
                          <i className="fa fa-phone"></i> +91 81 1386 1000
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>
                          info@probytes.net{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-12">
                    <div className="_03colm_wrap">
                      <h4>Trivandrum</h4>
                      <ul>
                        <li>
                          <i className="fa fa-home"></i> Edsys Towers,
                          Near ICICI Bank ATM Kamaleswaram, Trivandrum,
                          Kerala, PIN – 695009
                        </li>
                        <li>
                          <i className="fa fa-phone"></i> +91 81 1386 1000
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>
                          info@probytes.net{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 ">
                <div className="_otr_white_colour  _20pdng">
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default contactus
