import React from "react";
// ========== data ==========
import { technologies } from "../data/introduction";
import { social } from "../data/social";
import { mail } from "../data/social";
// ========== assets ==========
import image from "../image.png";
import eng from "../images/eng.png";
import ukr from "../images/ukr.png";
import rus from "../images/rus.png";
import pol from "../images/pol.png";
// ========== components ==========
import ContactButton from "./UI/ContactButton";
// ========== styles ==========
import "./about.scss";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="left">
          <div className="circle">
            <img src={image} className="image" />
          </div>
          <div className="contacts">
            {/* <div className="email">
              <ContactButton key={mail.id} id={mail.id} image={mail.src} />
              <span className="email_address">alexpetrov0895@gmail.com</span>
            </div> */}
            <div className="social">
              {social.map((item) => (
                <ContactButton key={item.id} id={item.id} image={item.src} />
              ))}
              {/* <div className="social_button">
                <img src={github} />
              </div>
              <div className="social_button">
                <img src={facebook} />
              </div>
              <div className="social_button">
                <img src={linkedin} />
              </div> */}
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="right">
          <div className="introduction">
            <div className="introduction_text">
              <h1>Alex Petrov</h1>
              <h3>Front-End Developer</h3>
              <p>
                Hi! I'm a front-end developer with over 2 years of experience
                based in Poland. I create responsive websites, landing pages,
                and mobile-first applications using modern web technologies.
              </p>
            </div>
            <div className="stack">
              {technologies.map((technology) => (
                <div
                  className="stack-item"
                  key={technology.id}
                  id={technology.id}
                >
                  <img src={technology.icon} />
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
            <div className="languages">
              <div>
                <img src={eng} />
                <span>Fluent English</span>
              </div>
              <div>
                <img src={ukr} />
                <span>Native Ukrainian</span>
              </div>
              <div>
                <img src={rus} />
                <span>Fluent Russian</span>
              </div>
              <div>
                <img src={pol} />
                <span>Intermediate Polish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
