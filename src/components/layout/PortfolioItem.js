import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// ========== styles ==========
import "../../scss/components/_portfolio-item.scss";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio-item">
      <a href={props.url} target="_blank" rel="noreferrer">
        <div className="portfolio-item__showcase">
          <LazyLoadImage
            effect="blur"
            src={props.img}
            alt={`portfolio_${props.id}`}
            className="portfolio-item__image"
          />
        </div>
        <div className="portfolio-item__description">
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;