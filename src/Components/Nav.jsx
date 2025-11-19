import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from './Context';

const Nav = () => {


  const {type,Settype} = useContext(SearchContext)

  // console.log(type)


  return (
    <div>



      <nav className="bg-white border-b-2 border-b-red-600 dark:bg-black">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">


          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2798/2798007.png"
              className="h-22 w-20"
              alt="logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flickster
            </span>
          </Link>

          <div className="flex items-center gap-4 md:order-2">

            <select
              onChange={(e)=>Settype(e.target.value)}
              className="px-4 py-2 rounded-lg bg-black text-white border
                   focus:outline-none  focus:ring-blue-400 
                   focus:border-blue-500 cursor-pointer"
            >
              <option className="bg-black text-white focus:outline-none" value="">-- Filter --</option>
              <option className="bg-black text-white focus:outline-none" value="movie">Movies</option>
              <option className="bg-black text-white focus:outline-none" value="series">Series</option>
            </select>
            <Link to="/Favourite">
            <button
            
              type="button"
              className="text-white bg-black cursor-pointer font-bold tracking-wider rounded-lg text-md
                   px-4 py-2 text-center border-yellow-900 dark:hover:bg-yellow-400
                   hover:text-black hover:border-none">
               ♡ Favorites
            </button>
            </Link>
          </div>

        </div>
      </nav>





    </div>
  );
};

export default Nav;