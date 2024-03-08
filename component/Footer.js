import "@fortawesome/fontawesome-free/css/all.css";
import Head from "next/head";

export default function Footer() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-FBGB6hBE4b+7P1VV0lo2UWf4z5AepD9/dvnnFAntY5iY5JmiLzqo9Q+L4tV8dRii2o4Mn0Bz7vT3XEaBUj02GQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="node_modules/@fortawesome/fontawesome-free/css/all.css"
        />
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
      </Head>
      <footer id="footer">
        <div className="footer-top">
          <div className="container footer-container ">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-blk">
                  <h2>Using School Transport Services</h2>

                  <ul>
                    <li>
                      <a href="/how-it-works">How It Works</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="footer-blk">
                  <ul>
                    <li>
                      <a href="https://www.schooltransportservice.com/features">
                        Our Features
                      </a>
                    </li>
                    <li>
                      <a href="https://www.schooltransportservice.com/contact-us">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <h2>Our company</h2>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="footer-blk">
                  <h2>Legal</h2>

                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="https://www.schooltransportservice.com/privacy-policy">
                        Privacy policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="footer-blk">
                  <h2>Language</h2>

                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="English (India) ₹"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" footer-btn">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p>
                  Copyright 2017 School Transport Services. All Rights Reserved.
                </p>
              </div>

              <div class="col-sm-6">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-googe-plus"></i>
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
