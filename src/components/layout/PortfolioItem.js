import React from "react";
// ========== styles ==========
import "../../scss/components/_portfolio-item.scss";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item__showcase">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img
            src={props.img}
            alt={`portfolio_${props.id}`}
            className="portfolio-item__image"
          />
        </a>
      </div>
      <div className="portfolio-item__description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;