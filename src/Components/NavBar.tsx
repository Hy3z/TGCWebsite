import { Link, Outlet } from "react-router-dom";
//import logo from "../Assests/tgc_logo_orange_png.png";
import Video from "../Assests/background-Logo_gradient_1.mp4";
import Styles from "./css/NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top nav-underline">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img
              src={logo}
              width="50"
              height="50"

            /> */}
            <div className={Styles.navHeader}>
              <video className={Styles.video} loop autoPlay>
                <source src={Video} type="video/mp4" />
              </video>
            <div>Telecom Gaming Club</div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/event"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/event/cssl">
                      CSSL
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/event/ipptournament">
                      IPP Tournament
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/event/lanfoyer">
                      Lan Foyer
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Constact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
