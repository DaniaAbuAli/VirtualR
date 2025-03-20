import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState(false);

  const toggleNav = () => {
    setActiveNav(!activeNav);
  };

  return (
    <nav className="navbar navbar-expand-lg p-3 sticky-top">
      <div className="container">
        <div className="logo">
          <a href="" className="navbar-brand">
            <img src={logo} alt="" />
          </a>
          <a href="" className="logo-name">
            VirtualR
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          {activeNav ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0  ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Workflow
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonials
              </a>
            </li>
          </ul>
          <form className="d-flex gap-4 ms-auto" role="search">
            <button className="btn sign-in" type="submit">
              Sign in
            </button>
            <button className="btn create-account" type="submit">
              Create an account
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
