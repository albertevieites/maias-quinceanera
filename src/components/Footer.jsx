import React from "react";
import { useLocation } from "@reach/router";

import link from "../images/icons/link.svg";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div
      className="footer"
      style={
        pathname === "/"
          ? { }
          : { position: "fixed" }
      }
    >
      <footer>
        <a href="https://www.albertevieites.com">
          <h3>Made by Alberte Vieites</h3>
          <img src={link} alt="link icon" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;