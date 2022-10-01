import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/style.scss";

import Layout from "../components/Layout";
import Map from "../components/Map";

const HomePage = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero__title">
          <h1>Maia's</h1>
          <h1>Quinceañera</h1>
        </div>
        <div className="hero__date">
          <span>19th of November</span>
          <span>Kew, Richmond</span>
        </div>
        <div className="hero__button">
          <Link to="/rsvp">RSVP</Link>
        </div>
      </section>

      <section id="whats" className="whats">
        <div className="whats__text">
          <h3>What is it?</h3>
          <p>
            This birthday is celebrated differently from any other as it marks
            the transition from childhood to young womanhood. Historically, in
            the years prior to their 15th birthdays, girls were taught cooking,
            weaving, and about childbearing by the elder women in their
            communities in preparation for their future roles as wives and
            during the celebration the girl's father would present her to
            potential suitors.
          </p>
          <p>
            But today "quinceañera" party is a celebration for turning 15 years
            old in Latinamerican countries.
          </p>
          <p>
            <span>
              I would love for you to join me at my quinceañera, to party
              venezuelan style!
            </span>
          </p>
        </div>

        <div className="whats__images">
          <div className="whats__images--left">
            <StaticImage src="../images/photos/smile.jpg"></StaticImage>
          </div>
          <div className="whats__images--central">
            <StaticImage src="../images/photos/pink.jpg"></StaticImage>
            <StaticImage src="../images/photos/blur.jpg"></StaticImage>
          </div>
          <div className="whats__images--right">
            <StaticImage src="../images/photos/mirror.jpg"></StaticImage>
          </div>
        </div>
      </section>

      <section id="plan" className="plan">
        <h3>The plan</h3>
        <div className="plan__left">
          <h4>We start the night</h4>
          <p>Come with your fav outfit</p>
          <StaticImage src="../images/icons/camera.png" alt="camera icon"></StaticImage>
          <p>We will eat some food</p>
          <StaticImage src="../images/icons/dance.png" alt="dance icon"></StaticImage>
          <h4>End of party</h4>
        </div>
        <div className="plan__right">
          <span>6:30 pm</span>
          <StaticImage src="../images/icons/dress.png" alt="camera icon"></StaticImage>
          <p>We will have a chance to take some pictures</p>
          <StaticImage src="../images/icons/food.png" alt="camera icon"></StaticImage>
          <p>We will dance some latin tunes</p>
          <span>9:30 pm</span>
        </div>
      </section>

      <section id="venue" className="venue">
        <h3>The Venue</h3>
        <Map />
        <p>The party will be at Priory Park Club (Kew) Ltd.</p>
        <p>Address:</p>
        <p>Riverside, 92 Forest Road</p>
        <p>Richmond, Surrey, TW9 3BZ</p>
      </section>
    </Layout>
  );
};

export default HomePage;
