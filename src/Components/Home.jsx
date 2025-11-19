import React, { useContext } from 'react';
import { SearchContext } from './Context';


const Home = () => {

  const {value, Setvalue,Setfetchdata,type,Fetchdatafunc}  = useContext(SearchContext)
     

    const handlesearch = (ele)=>{
        Setvalue(ele.target.value)
    }
     console.log(type,"1234");
          
      

  return (
  <div>
  <div className="bg-black text-center text-white min-h-[calc(107.5vh-180px)] flex-col items-center justify-center">

    <h1 className="text-5xl md:text-7xl font-extrabold pt-16">
      Discover Your Next <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 border-b border-white pb-2">
        Favorite Movie
      </span>
    </h1>

    <p className="text-gray-300 mt-9 text-lg max-w-2xl mx-auto">
      Search millions of movies, series, and episodes. Find ratings, cast info, and detailed information.
    </p>

    {/* ⭐ Flex Row for Input + Button */}
    <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        onChange={handlesearch}
        className="w-64 md:w-96 px-4 py-2 rounded-lg border border-yellow-900 
                   focus:outline-none focus:ring-2 focus:ring-yellow-600 
                   bg-black text-white dark:border-yellow-700 transition duration-100"
      />

      {/* Button */}
      <button onClick={Fetchdatafunc}
        className="px-6 py-2 rounded-xl font-bold text-lg tracking-wide text-black 
                   bg-gradient-to-r from-yellow-500 to-orange-600 
                   hover:from-yellow-400 hover:to-orange-500
                   transition duration-300 shadow-lg hover:shadow-yellow-500/30
                   active:scale-95 inline-block" >
        Search
    </button>

    </div>

  </div>
</div>

  );
};

export default Home;