import "@fortawesome/fontawesome-free/css/all.css";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }
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
      </Head>
      <div className="headermain">
        <div className="brandLogo">
          <Link href="/">
            <img src="/Images/logo.png" className="imgclss" alt="logo" />
          </Link>
        </div>

        <div className="drawerToggle" onClick={toggleDrawer}>
          <i className="material-icons">menu</i>
        </div>

        <div ref={drawerRef} className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="drawerContent">
            <div className="titlehd">
              <div className="" onClick={toggleDrawer}>
                <div className="sidenav-brand">School Transport Services</div>
              </div>
            </div>
            <ul className="sidenav-menu">
              <li className="">
                <a href="/" className="d-flex ">
                  <span className="sidenav-link-icon  ">
                    <i className="material-icons">home</i>
                  </span>
                  <span className="sidenav-link-title">Home</span>
                </a>
              </li>
              <li>
                <a className="d-flex " href="/blog">
                  <span className="sidenav-link-icon">
                    <i className="material-icons">track_changes</i>
                  </span>
                  <span className="sidenav-link-title">Blogs</span>
                </a>
              </li>
              <li>
                <a className="d-flex " href="/features">
                  <span className="sidenav-link-icon">
                    <i className="material-icons">track_changes</i>
                  </span>
                  <span className="sidenav-link-title">Features</span>
                </a>
              </li>
              <li>
                <a className="d-flex " href="/how-it-works">
                  <span className="sidenav-link-icon">
                    <i className="material-icons">track_changes</i>
                  </span>
                  <span className="sidenav-link-title">How It Works</span>
                </a>
              </li>
              <li>
                <a className="d-flex " href="/about-us">
                  <span className="sidenav-link-icon">
                    <i className="material-icons">track_changes</i>
                  </span>
                  <span className="sidenav-link-title">About Us</span>
                </a>
              </li>
              <li>
                <a className="d-flex  " href="/privacy-policy">
                  <span className="sidenav-privacy-icon">
                    <i className="fa fa-list"></i>
                  </span>
                  <span className="sidenav-privacy-title">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a className="d-flex align-items-center  " href="/contact-us">
                  <span className="sidenav-privacy-icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="sidenav-privacy-title">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
