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
              <div className="plan__heading">
                <h4>We start the night</h4>
              </div>
              <div className="plan__paragraph">
                <p>Come with your fav outfit</p>
              </div>
              <div className="plan__image">
                <StaticImage
                  src="../images/icons/camera.png"
                  alt="camera icon"
                ></StaticImage>
              </div>
              <div className="plan__paragraph">
                <p>We will eat some food</p>
              </div>
              <div className="plan__paragraph">
                <div className="plan__image">
                  <StaticImage
                    src="../images/icons/dance.png"
                    alt="dance icon"
                  ></StaticImage>
                </div>
              </div>
              <div className="plan__heading">
                <h4>End of party</h4>
              </div>
            </div>

            <div className="plan__details--line"></div>

            <div className="plan__details--right">
              <div className="plan__span">
                <span>6:30 pm</span>
              </div>
              <StaticImage
                src="../images/icons/dress.png"
                alt="camera icon"
                className="photo"
              ></StaticImage>
              <div className="plan__paragraph">
                <p>We will have a chance to take some pictures</p>
              </div>
              <StaticImage
                src="../images/icons/food.png"
                alt="camera icon"
                className="photo"
              ></StaticImage>
              <div className="plan__paragraph">
                <p>We will dance some latin tunes</p>
              </div>
              <span className="plan__details--last-span">9:30 pm</span>
            </div>
          </div>
        </div>

        <div className="plan__mobile">
          <h3>The plan</h3>
          <div className="plan__mobile--container">
            <div className="plan__mobile--start">
              <h4>Night starts</h4>
              <span>6:30 pm</span>
            </div>

            <div className="plan__mobile--dress">
              <p>Wear your fav outfit</p>
              <StaticImage
                src="../images/icons/dress.png"
                alt="camera icon"
              ></StaticImage>
            </div>

            <div className="plan__mobile--camera">
              <StaticImage
                src="../images/icons/camera.png"
                alt="camera icon"
              ></StaticImage>
              <p>Make some memories</p>
            </div>

            <div className="plan__mobile--food">
              <p>Eat some food</p>
              <StaticImage
                src="../images/icons/food.png"
                alt="camera icon"
              ></StaticImage>
            </div>

            <div className="plan__mobile--dance">
              <StaticImage
                src="../images/icons/dance.png"
                alt="dance icon"
              ></StaticImage>
              <p>Party latin style</p>
            </div>

            <div className="plan__mobile--end">
              <h4>End of party</h4>
              <span className="plan__details--last-span">9:30 pm</span>
            </div>
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
              <div className="venue__text--top">
                <p>
                  The party will be at
                </p>
                <p>
                <span>Priory Park Club (Kew) Ltd</span>.
                </p>
              </div>

              <div className="venue__text--bottom">
                <p>
                  Riverside, 92 Forest Road
                  </p>
                <p>
                  Richmond, Surrey, TW9 3BZ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
