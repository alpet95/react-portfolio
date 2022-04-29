import React from "react";
// ========== components ==========
import PortfolioItem from "./PortfolioItem";
// ========== data ==========
import { projects } from "../../data/projects";
// ========== styles ==========
import "../../scss/components/_portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio">
          <div className="portfolio__line"></div>
          <h1 className="portfolio__heading">My Portfolio</h1>
          <div className="portfolio__list">
            {projects.map((project) => (
              <PortfolioItem
                key={project.id}
                id={project.id}
                img={project.img}
                link={project.link}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
