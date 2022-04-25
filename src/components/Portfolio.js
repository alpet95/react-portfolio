import React from "react";
// ========== components ==========
import PortfolioItem from "./PortfolioItem";
// ========== data ==========
import { projects } from "../data/projects";
// ========== styles ==========
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section>
      <div className="container">
        <div className="content">
          <h1>My Portfolio</h1>
          <div className="portfolio-list">
            {projects.map((project) => (
              <PortfolioItem
                key={project.id}
                id={project.id}
                img={project.img}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
