import React from "react";
// ========== data ==========
import { technologies } from "../../data/introduction";
import { social } from "../../data/social";
import { languages } from "../../data/languages";
// ========== assets ==========
import avatar from "../../images/profile.png";
// ========== components ==========
import ContactButton from "../interface/ContactButton";
// ========== styles ==========
import "../../scss/components/_about.scss";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        {/* ========== left block ========== */}
        <div className="left">
          <div className="avatar">
            <img className="avatar__image" src={avatar} />
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
        {/* ========== right block ========== */}
        <div className="right">
          <div className="introduction">
            <div className="introduction__text">
              <h1>Alex Petrov</h1>
              <h3>Front-End Developer</h3>
              <p>
                Hi! I'm a front-end developer with over 2 years of experience
                based in Poland.
                <br /> I create responsive websites, landing pages, and
                mobile-first applications using modern web technologies.
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
                  <img src={technology.icon} />
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
            {/* ========== language items ========== */}
            <div className="languages">
              {languages.map((language) => (
                <div
                  className="languages__item"
                  key={language.id}
                  id={language.id}
                >
                  <img src={language.icon} />
                  <span>{language.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
