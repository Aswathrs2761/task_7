import React, { useContext, useState } from 'react';
import { SearchContext } from './Context';

const Favourite = () => {
  const { fav } = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Pagination Logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFavs = fav.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(fav.length / itemsPerPage);

  return (
    <div>
      <div className="movie-container">
        {currentFavs.map((Favorite) => (
          <div className="movie-card" key={Favorite.imdbID}>
            <h3>{Favorite.Title}</h3>
            <p>{Favorite.Year}</p>
            <img src={Favorite.Poster} alt={Favorite.Title} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active-page" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Favourite;
