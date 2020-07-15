import React, { useState } from "react";
import "./App.css";
import InfoCard from "./components/Cards/InfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faChevronCircleRight,
  faChessPawn,
  faChessQueen,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
import TestimonialCard from "./components/Cards/TestimonialCard";
import userPicture from "./img/user.jpg";
import PriceCard from "./components/Cards/PriceCard";

function App() {
  const basicFeatures = [
    { featureDesc: "Secure your account" },
    { featureDesc: "Up to 2 credit cards" },
    { featureDesc: "Customer support" },
  ];

  const userData = {
    name: "Simon Stevens",
    jobTitle: "Freelancer",
    photo: userPicture,
  };

  return (
    <div>
    <div className="container">
      <InfoCard>
          <FontAwesomeIcon className="info-card__icon" icon={faCube} />
          <h1 className="title-black__w700">Start saving</h1>
          <h1 className="title-blue__w400">your money</h1>
          <p className="info-paragraph">
            Choose plan that works best
            <br />
            for you, feel free to contact us
            <br /> if you need more details.
          </p>
          <TestimonialCard
            userPhoto={userData.photo}
            userName={userData.name}
            jobTitle={userData.jobTitle}
            className="card-testimonial"
          >
            <p className="testimonial">
              "Fantastic totally blown
              <br /> away with my savings"
            </p>
          </TestimonialCard>
        </InfoCard>
        <div className="price-container">
          <h1 className="title-trial">Start 14 day free trial</h1>
          <p>Get started, no credit card required.</p>
          <div className="price-card__container">
            <PriceCard
              cardIcon={
                <FontAwesomeIcon
                  className="price-card__icon"
                  icon={faChessPawn}
                />
              }
              className="card-price__basic"
              planTitle="Basic"
              period="/ month"
              price="18"
            >
              <div className="feature-container">
                <div className="feature">
                  <ul>
                    {basicFeatures.map((feature) => (
                      <li key={feature.id}>
                        <span>
                          <FontAwesomeIcon
                            className="checkbox"
                            icon={faCheckSquare}
                          />
                        </span>
                        <span className="featureName">
                          {feature.featureDesc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="button-container">
                <button onClick="" className="button-primary">
                  Start Trial
                  <FontAwesomeIcon
                    className="button-icon"
                    icon={faChevronCircleRight}
                  />
                </button>
              </div>
            </PriceCard>
            <PriceCard
              cardIcon={
                <FontAwesomeIcon
                  className="price-card__icon"
                  icon={faChessQueen}
                />
              }
              className="card-price__pro"
              planTitle="Basic"
              period="/ month"
              price="18"
            >
              <div className="feature-container">
                <div className="feature">
                  <ul>
                    {basicFeatures.map((feature) => (
                      <li key={feature.id}>
                        <span>
                          <FontAwesomeIcon
                            className="checkbox-alt"
                            icon={faCheckSquare}
                          />
                        </span>
                        <span className="featureName">
                          {feature.featureDesc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="button-container">
                <button onClick="" className="button-secondary">
                  Start Trial
                  <FontAwesomeIcon
                    className="button-icon__alt"
                    icon={faChevronCircleRight}
                  />
                </button>
              </div>
            </PriceCard>
          </div>
        </div>
      </div>
      <footer>
        <span>
          I don't own this design. Based on template originally made by{" "}
          <a href="https://dribbble.com/shots/12233339-Pricing-Page">
            Vishnu Prasad
          </a>
        </span>
        <div id="contact-me">
            <a href="https://www.linkedin.com/in/jeansantana/">Você tem um trabalho para mim? (Do you have a job for me?)</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
