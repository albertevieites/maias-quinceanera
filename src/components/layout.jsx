import React from "react";
import { Link } from "gatsby";
import { body, nav__list, nav__item, nav__text } from "./layout.module.scss";

const Layout = ({ pageTitle, pageHeading, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul className={nav__list}>
          <li className={nav__item}>
            <Link to="/" className={nav__text}>
              Home
            </Link>
          </li>
          <li className={nav__item}>
            <Link to="/plan" className={nav__text}>
              Plan
            </Link>
          </li>
          <li className={nav__item}>
            <Link to="/rsvp" className={nav__text}>
              RSVP
            </Link>
          </li>
        </ul>
      </nav>
      <h1>MAIA'S QUINCEAÑERA</h1>
      <h2>{pageHeading}</h2>
      {children}
    </div>
  );
};

export default Layout;
