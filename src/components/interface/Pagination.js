import React from "react";
import "../../scss/components/_pagination.scss";

const Pagination = (props) => {
  const { postsPerPage, totalPosts, currentPage, onClickChangePage } = props;

  const pages = [];
  for (
    let number = 1;
    number <= Math.ceil(totalPosts / postsPerPage);
    number++
  ) {
    pages.push(number);
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "pagination_item active"
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