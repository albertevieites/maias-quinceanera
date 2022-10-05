import React /* { useEffect }  */ from "react";
import { useLocation } from "@reach/router";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "../components/Layout";
import NavbarMobile from "../components/NavbarMobile";
import Finger from "../images/assets/finger.svg";

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

const Rsvp = () => {
  /* useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []) */
  const location = useLocation();

  return (
    <div className="rsvp">
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <NavbarMobile />
        </motion.div>
        <Layout>
          <div className="rsvp__container">
            <form
              name="form"
              action="https://getform.io/f/d68028be-bc9d-45f5-8919-411979ae2a90"
              method="POST"
            >
              <div className="rsvp__top">
                <h3>Please fill one per person</h3>
                <div className="rsvp__name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
              <div className="rsvp__bottom">
                <h3>Please select one</h3>
                <fieldset>
                  <div className="rsvp__input">
                    <input type="radio" name="attendance" value="Attending" />{" "}
                    I'm coming
                  </div>
                  <div className="rsvp__input">
                    <input
                      type="radio"
                      name="attendance"
                      value="Not Attending"
                    />{" "}
                    Sorry, I cannot make it
                  </div>
                </fieldset>
              </div>
              <div class="rsvp__button">
                <Finger />
                <button type="submit">Let me know!</button>
              </div>
            </form>
          </div>
        </Layout>
      </AnimatePresence>
    </div>
  );
};

export default Rsvp;
