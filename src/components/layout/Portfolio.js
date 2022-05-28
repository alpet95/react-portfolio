// ========== react hooks ==========
import React, { useState, useEffect } from "react";
// ========== components ==========
import PortfolioItem from "./PortfolioItem";
import Pagination from "../interface/Pagination";
// ========== styles ==========
import "../../scss/components/_portfolio.scss";

const Portfolio = () => {
  // ========== state ==========
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // ========== fetch api ==========
  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://portfolio-alpet95-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
      );
      const data = await response.json();
      const loadedProjects = [];

      for (const key in data) {
        if (data[key] !== null) {
          loadedProjects.push({
            id: key,
            img: data[key].img,
            url: data[key].url,
            description: data[key].description,
          });
        }
      }

      setProjects(loadedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ========== variables ==========
  const postsPerPage = 3;
  const totalPosts = projects.length;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProjects = projects.slice(indexOfFirstPost, indexOfLastPost);

  // ========== handlers ==========
  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio">
          <div className="portfolio__line"></div>
          <h1 className="portfolio__heading">My Portfolio</h1>
          <div className="portfolio__list">
            {currentProjects.map((project) => (
              <PortfolioItem
                key={project.id}
                id={project.id}
                img={project.img}
                url={project.url}
                description={project.description}
              />
            ))}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts}
            currentPage={currentPage}
            onClickChangePage={changePageHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;