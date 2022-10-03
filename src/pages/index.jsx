import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/style.scss";

import Layout from "../components/Layout";
import Map from "../components/Map";
import { GiBeveledStar } from "react-icons/gi";

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
        <Link className="hero__button" to="/rsvp">
          RSVP
        </Link>
      </section>

      <section id="whats" className="whats">
        <div className="whats__container">
          <div className="whats__text">
            <h3>What is it?</h3>
            <p>
              The "Quinceañera" tradition comes from Mexico in the XIX century.
              Wealthy parents would host a quinceañera party to introduce their
              15-year old daughter to other "high society" families, with the
              intention to arrange a marriage.
            </p>
            <p>
              With time, this tradition extended to other Latinamerican
              countries, including Venezuela where half my family is from. But
              today the quinceañera is just an opportunity to celebrate turning
              15 years old with family and friends - nothing to do with finding
              a husband!
            </p>
            <p>
              <span>
                I would love for you to join me at my quinceañera party. Read on
                for more details!
              </span>
            </p>
          </div>
          <div className="whats__images">
            <div className="whats__images--left">
              <StaticImage src="../images/photos/smile.jpg" alt="smile image" />
            </div>
            <div className="whats__images--central">
              <StaticImage src="../images/photos/pink.jpg" alt="pink image" />
              <StaticImage src="../images/photos/blur.jpg" alt="blur image" />
            </div>
            <div className="whats__images--right">
              <StaticImage
                src="../images/photos/mirror.jpg"
                alt="mirror image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="plan">
        <div className="plan__container">
          <h3>The plan</h3>
          <div className="plan__details">
            <div className="plan__details--left">
              <h4>We start the night</h4>
              <p>Come with your fav outfit</p>
              <StaticImage
                src="../images/icons/camera.png"
                alt="camera icon"
              ></StaticImage>
              <p>We will eat some food</p>
              <StaticImage
                src="../images/icons/dance.png"
                alt="dance icon"
              ></StaticImage>
              <h4>End of party</h4>
            </div>
            <div className="plan__details--line"></div>
            <div className="plan__details--right">
              <span>6:30 pm</span>
              <StaticImage
                src="../images/icons/dress.png"
                alt="camera icon"
              ></StaticImage>
              <p>We will have a chance to take some pictures</p>
              <StaticImage
                src="../images/icons/food.png"
                alt="camera icon"
              ></StaticImage>
              <p>We will dance some latin tunes</p>
              <span className="plan__details--last-span">9:30 pm</span>
            </div>
          </div>
        </div>

        <div className="plan__mobile">
          <div className="plan__mobile--container">
            <h3>The plan</h3>
            <div className="plan__mobile--start">
              <h4>We start the night</h4>
              <GiBeveledStar />
              <span>6:30 pm</span>
            </div>
            <div>
              <p>Come with your fav outfit</p>
              <StaticImage
                src="../images/icons/dress.png"
                alt="camera icon"
              ></StaticImage>
            </div>
            <StaticImage
              src="../images/icons/camera.png"
              alt="camera icon"
            ></StaticImage>
            <p>We will eat some food</p>
            <StaticImage
              src="../images/icons/dance.png"
              alt="dance icon"
            ></StaticImage>
            <h4>End of party</h4>
            <p>We will have a chance to take some pictures</p>
            <StaticImage
              src="../images/icons/food.png"
              alt="camera icon"
            ></StaticImage>
            <p>We will dance some latin tunes</p>
            <span className="plan__details--last-span">9:30 pm</span>
          </div>
        </div>
      </section>

      <section id="venue" className="venue">
        <div className="venue__container">
          <h3>The Venue</h3>
          <div className="venue__content">
            <div className="venue__map">
              <Map />
            </div>
            <div className="venue__text">
              <p>
                The party will be at <span>Priory Park Club (Kew) Ltd</span>.
              </p>
              <p>Riverside, 92 Forest Road</p>
              <p>
                Richmond, Surrey, <span>TW9 3BZ</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
