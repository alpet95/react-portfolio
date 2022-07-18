import React from "react";
import Container from "../interface/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { technologies } from "../../data/introduction";
import { social } from "../../data/social";
import { languages } from "../../data/languages";

import avatar from "../../images/profile.png";

import ContactButton from "../interface/ContactButton";

import "../../scss/components/_about.scss";

const About = () => {
  return (
    <section id="#about">
      <Container>
        {/* ========== portrait block ========== */}
        <div className="portrait-block">
          <div className="avatar">
            <LazyLoadImage
              className="avatar__image"
              effect="blur"
              src={avatar}
              alt="avatar"
            />
          </div>

          <div className="contacts">
            <div className="contacts__items">
              {social.map((item) => (
                <ContactButton
                  key={item.id}
                  id={item.id}
                  image={item.src}
                  link={item.link}
                />
              ))}
            </div>
            <div className="contacts__line"></div>
          </div>
        </div>
        <div className="splitter splitter-hidden"></div>
        {/* ========== right/bottom block ========== */}
        <div className="info-block">
          <div className="introduction">
            <div className="introduction__text">
              <h1>Alex Petrov</h1>
              <h3>Front-End Developer</h3>
              <p>
                Hi! I'm a front-end developer with over 2 years of experience. I
                create responsive websites, landing pages, and mobile-first
                applications using modern web technologies.
                <br />
                <br /> I will be glad to discuss with you new job opportunities.
                Just contact me via LinkedIn or send an email to
                <span className="email">alexpetrov0895@gmail.com</span>
              </p>
            </div>
            {/* ========== stack items ========== */}
            <div className="stack">
              {technologies.map((technology) => (
                <div
                  className="stack__item"
                  key={technology.id}
                  id={technology.id}
                >
                  <img src={technology.icon} alt={technology.id} />
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
            <div className="splitter"></div>
            {/* ========== language items ========== */}
            <div className="languages">
              {languages.map((lang) => (
                <div className="languages__item" key={lang.id} id={lang.id}>
                  <img src={lang.icon} alt={lang.id} />
                  <span>
                    {lang.text.slice(0, lang.text.indexOf(" "))}
                    <br />
                    {lang.text.slice(lang.text.indexOf(" ") + 1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;