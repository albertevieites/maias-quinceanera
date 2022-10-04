import React from "react";

import { Link } from "gatsby";

const NavbarMobile = () => {

  return (
    <div>
      <nav className="navbar-mobile">
          <span>
            <Link to="/">
              Home
            </Link>
          </span>
      </nav>
    </div>
  );
};

export default NavbarMobile;