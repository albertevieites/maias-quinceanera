import React from "react";
import { useLocation } from "@reach/router";

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
        <h3>Made by Alberte</h3>
      </footer>
    </div>
  );
};

export default Footer;
