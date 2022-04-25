import React from "react";
// ========== styles ==========
import "./portfolio-item.scss";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio-item">
      <a href={props.link} target="_blank">
        <img
          src={props.img}
          alt={`portfolio_${props.id}`}
          className="portfolio-image"
        />
      </a>
    </div>
  );
};

export default PortfolioItem;
