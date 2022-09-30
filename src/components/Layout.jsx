import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">
        <Navbar />
        {/* content for each page */}
        { children }
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
