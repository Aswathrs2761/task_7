import React, { useContext } from "react";
import { SearchContext } from "./Context";

const ViewMore = () => {
  const { view } = useContext(SearchContext);

  if (!view) return <p className="text-center text-white mt-10">No movie selected</p>;

  return (
    <div className="min-h-60 bg-black flex items-center justify-center p-6 py-22.5">
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-2xl shadow-lg p-6 gap-8 max-w-4xl w-full text-white">

        {/* Poster */}
        <img
          src={view.Poster}
          alt={view.Title}
          className="w-full md:w-72 h-auto rounded-xl shadow-lg object-cover"
        />

        {/* Info Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{view.Title}</h1>

            <p className="text-lg mb-2">
              <span className="font-semibold">Year:</span> {view.Year}
            </p>

            <p className="text-lg mb-2">
              <span className="font-semibold">Type:</span> {view.Type}
            </p>

            <p className="text-lg mb-2">
              <span className="font-semibold">IMDB ID:</span> {view.imdbID}
            </p>
          </div>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-white text-lg font-medium"
          >
            ⬅ Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
