import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">
        {/* content for each page */}
        { children }
      </div>
    </div>
  );
};

export default Layout;
