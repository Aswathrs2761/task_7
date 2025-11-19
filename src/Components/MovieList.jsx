import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import { SearchContext } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
  const { fetchdata, fav, Setfav, type, Setview,view, Fetchdatafunc } = useContext(SearchContext);
      const navigate = useNavigate();


  const [currentPage, setCurrentPage] = useState(1); // <-- pagination state
  const itemsPerPage = 8; // <-- how many movies per page

  useEffect(() => {
    if (type === "movie" || type === "series") {
      Fetchdatafunc();
    }
  }, [type]);

  useEffect(() => {
    if (!fetchdata?.Search?.length) {
      window.location.pathname = "/";
    }
  }, [fetchdata]);

  const handlefav = (info) => {
    Setfav((prev) => {
      console.log(prev)
      const isFav = prev.some((item) => item.imdbID === info.imdbID);
      return isFav
        ? prev.filter((item) => item.imdbID !== info.imdbID)
        : [...prev, info];
    });
  };


  const handleview = (list) => {
      Setview(list) 
      navigate('/ViewMore')
        
  }

 console.log(view) 
 
  // -----------------------------
  // ⭐ PAGINATION LOGIC
  // -----------------------------
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = fetchdata?.Search?.slice(startIndex, startIndex + itemsPerPage) || [];
  const totalPages = Math.ceil((fetchdata?.Search?.length || 0) / itemsPerPage);
  // -----------------------------

  return (
    <div className="movie-container">
      {!fetchdata ? (
        <div className="load">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {/* Show only movies of current page */}
          {currentMovies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />

              <div className="flex items-center gap-3 mt-3">
                <button
                  onDoubleClick={() => handlefav(movie)}
                  className="relative w-10 h-10 flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faHeartRegular}
                    className={`absolute text-gray-500 ${fav.some((item) => item.imdbID === movie.imdbID)
                      ? "opacity-0"
                      : "opacity-100"
                      }`}
                    size="2x"
                  />

                  <FontAwesomeIcon
                    icon={faHeartSolid}
                    className={`absolute text-red-500 ${fav.some((item) => item.imdbID === movie.imdbID)
                      ? "scale-125 opacity-100"
                      : "scale-0 opacity-0"
                      }`}
                    size="2x"
                  />
                </button>
              <button
              onClick = {()=> handleview(movie) }
              className="px-4 py-2 text-amber-50 bg-blue-800 rounded-lg hover:bg-blue-700 transition">
             View More
              </button>

              </div>
            </div>
          ))}

          {/* ----------------------------- */}
          {/* ⭐ PAGINATION BUTTONS */}
          {/* ----------------------------- */}
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "active-page" : ""}
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
        </>
      )}
    </div>
  );
};

export default MovieList;
