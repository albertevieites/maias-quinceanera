import React from "react";
import { useLocation } from "@reach/router";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
};

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <div className="content">
        {/* content for each page */}
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Navbar />
          </motion.div>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
          <motion.div
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
