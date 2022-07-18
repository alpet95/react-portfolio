import React, { useState, useEffect } from "react";

import PortfolioItem from "./PortfolioItem";
import Pagination from "../interface/Pagination";
import Container from "../interface/Container";
import Error from "./Error";
import LoadingSpinner from "../interface/LoadingSpinner";

import "../../scss/components/_works.scss";

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  // ========== fetch api ==========
  const fetchProjects = async () => {
    setError(null);

    try {
      const url =
        "https://portfolio-alpet95-default-rtdb.europe-west1.firebasedatabase.app/projects.json";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response error!");
      }

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
      console.error(error.message);
      setError(true);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ========== pagination ==========
  const postsPerPage = 4;
  const totalPosts = projects.length;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProjects = projects.slice(indexOfFirstPost, indexOfLastPost);

  // ========== handlers ==========
  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  // ========== conditional output ==========
  let worksContent = <LoadingSpinner />;

  if (error) {
    worksContent = <Error />;
  }

  if (projects.length > 0) {
    worksContent = (
      <section id="#works">
        <Container>
          <div className="portfolio">
            <h1 className="portfolio__heading">Portfolio</h1>
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
        </Container>
      </section>
    );
  }

  return worksContent;
};

export default Works;