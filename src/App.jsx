import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import MovieList from './Components/MovieList'
import { useState } from 'react'
import { SearchProvider } from './Components/Context'
import Favourite from './Components/Favourite'
import ViewMore from './Components/ViewMore'


function App() {

  const [searchText, setSearchText] = useState("");


  return (
    <>
      
    <BrowserRouter>

    <SearchProvider>
   
    
    <div>
      <Nav  setSearchText={setSearchText} />
    </div>
    
    <Routes>

      <Route path='/' element = {<Home/>}/>
      <Route path="/MovieList" element={<MovieList/>} />
      <Route path='/Favourite' element = {<Favourite/>}/>
      <Route path='ViewMore' element={<ViewMore/>} />


    </Routes>

    
    

  </SearchProvider>

    </BrowserRouter>

    </>
  )
}

export default App

