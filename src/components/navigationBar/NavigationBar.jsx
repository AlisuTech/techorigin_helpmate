import React, { useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header border-yellow">
      <nav className="bg-[#3d52a0] nav nav_containerx border-red">
        <div className="nav__data border-blue">
          <Link to="/" className="nav__logo">
            <i className="ri-home-7-line"></i> HelpMate
          </Link>
        </div>

        <div
          className="nav_toggle"
          id="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`ri-menu-line nav__icon ${
              menuOpen ? "nav__icon--hide" : ""
            }`}
          ></i>
          <i
            className={`ri-close-line nav__icon ${
              menuOpen ? "" : "nav__icon--hide"
            }`}
          ></i>
        </div>

        <div
          className={`${menuOpen ? "nav__menu" : "hidden"} border-green`}
          id="nav-menu"
        >
          <ul className="nav__list border-yellow">
            <li>
              <Link to="/" className="nav__link">Home</Link>
            </li>
            <li>
              <Link className="nav__link">Company</Link>
            </li>

            {/* DROPDOWN 1 */}
            <li className="dropdown__item">
              <div className="nav__link">
                Analytics{" "}
                <i className="ri-arrow-down-s-line dropdown__arrow "></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <Link className="dropdown__link">
                    <i className="ri-pie-chart-line dropdown__arrow "></i>
                    Overview
                  </Link>
                </li>

                <li>
                  <Link className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i>
                    Transactions
                  </Link>
                </li>

                {/* DROPDOWN SUBMENU */}
                <li className="dropdown__subitem">
                  <div className="dropdown__link">
                    <i className="ri-bar-chart-line"></i> Reports <i className="ri-add-line dropdown__add"></i>
                  </div>

                  <ul className="dropdown__submenu">
                    <li>
                      <Link className="dropdown__sublink">
                        <i className="ri-file-list-line"></i> Documents
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown__sublink">
                        <i className="ri-cash-line"></i> Payments
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown__sublink">
                        <i className="ri-refund-2-line"></i> Refunds
                      </Link>
                    </li>

                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link className="nav__link">Products</Link>
            </li>

            {/* DROPDOWN 2 */}
            <li className="dropdown__item">
              <div className="nav__link">
                Users <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <Link className="dropdown__link">
                    <i className="ri-user-line"></i> Profiles
                  </Link>
                </li>

                <li>
                  <Link className="dropdown__link">
                    <i className="ri-lock-line"></i> Accounts
                  </Link>
                </li>

                <li>
                  <Link className="dropdown__link">
                    <i className="ri-message-3-line"></i> Messages
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav__link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
