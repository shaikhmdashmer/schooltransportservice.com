import "@fortawesome/fontawesome-free/css/all.css";
import Head from "next/head";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa";

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
          <div className="  container  footer-container ">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-blk">
                  <h2 className="footerh2">Using School Transport Services</h2>

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
                  <h2 className="footerh2">Our company</h2>
                  <ul>
                    <li>
                      <a href="/features">Our Features</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="footer-blk">
                  <h2 className="footerh2">Legal</h2>

                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="footer-blk">
                  <h2 className="footerh2">Language</h2>

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
          <div className="container-md">
            <div className="row">
              <div className="col-sm-8 txt-cntr">
                <p className="copy">
                  Copyright 2017 School Transport Services. All Rights Reserved.
                </p>
              </div>

              <div class="col-sm-4 icon-cntr">
                <ul>
                  <a href="#">
                    <i>
                      <FaFacebookF className="icon-style" />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <CiTwitter className="icon-style" />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FaGooglePlusG className="icon-style" />
                    </i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
