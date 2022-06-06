import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../asset/img/logo.svg";

const Header = () => {
  const [activeClass, setClass] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="columns is-multiline is-mobile">
          <div className="column is-2-desktop is-4-tablet pb-0 custome-logo">
            <div className="logo">
              <a href="/" className="logo__content" >
                <Image src={Logo} alt="" />
              </a>
            </div>
          </div>
          <div className="column pb-0 is-10-desktop is-8-tablet custome-nav">
            <nav className="navbar flex-wrap" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <Link
                  href="/"
                  role="button"
                  className="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                </Link>
                <a
                  role="button"
                  className="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={() => setClass(!activeClass)}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div id="navbarBasicExample"  className={`${activeClass ? "is-active": ""} navbar-menu`}>
                <div className="navbar-end flex-wrap">
                  <a className="navbar-item">Home</a>
                  <a className="navbar-item">Water Request</a>
                  <a className="navbar-item">Donation</a>
                  <a className="navbar-item">My Request</a>
                  <a className="navbar-item">Corporations </a>
                  <a className="navbar-item">Corporate details </a>
                </div>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button btn__sign">
                            SIGN IN
                        </a> 
                    </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
