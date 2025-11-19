import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [fetchdata, Setfetchdata] = useState("");
   const [fav,Setfav] = useState([])
  const [type, Settype] = useState("");
  const [value, Setvalue] = useState("");
    const [view, Setview] = useState({});


    const navigate = useNavigate();


  const Fetchdatafunc = async () => {
        try {
          console.log("random");
          
          // Setsearch(e.target.value)
          const response = await axios.get(`https://www.omdbapi.com/?s=${value}&apikey=f9f5e78&type=${type}`);
          if (response.data.Response === "True") {
             Setfetchdata(response.data);
             navigate('/MovieList')
            
          }
         else{
          alert(response.data.Error)
         }
        } catch (error) {
          alert(error)
        }
      };


  return (
    <SearchContext.Provider value={{ type, Settype,fetchdata, Setfetchdata,fav,Setfav,value, Setvalue, Fetchdatafunc,view,Setview }}>
      {children}
    </SearchContext.Provider>
  );
}
