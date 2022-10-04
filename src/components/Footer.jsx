import React from "react";
import { useLocation } from "@reach/router";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div
      className="footer"
      style={
        pathname === "/"
          ? { backgroundColor: "hsl(339, 81%, 85%" }
          : { backgroundColor: "hsl(177, 100%, 34%", position: "fixed" }
      }
    >
      <footer>
        <h3>Made by Alberte</h3>
      </footer>
    </div>
  );
};

export default Footer;
