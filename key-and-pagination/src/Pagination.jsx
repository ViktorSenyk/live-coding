import React from 'react';

export default function Pagination({ currentPage, totalItems, itemsPerPage, goPrev, goNext }) {
  const isPrevPageAvailable = currentPage !== 1;
  const isNextPageAvailable = currentPage !== Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" disabled={!isPrevPageAvailable} onClick={goPrev}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" disabled={!isNextPageAvailable} onClick={goNext}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
}
