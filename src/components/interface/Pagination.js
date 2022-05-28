import React from "react";
// ========== styles ==========
import "../../scss/components/_pagination.scss";

const Pagination = (props) => {
  // ========== variables ==========
  const { postsPerPage, totalPosts, currentPage, onClickChangePage } = props;

  // ========== populate page numbers ==========
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "pagination_item pagination_item__active"
                : "pagination_item"
            }
            onClick={() => onClickChangePage(page)}
          >
            <span>{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;