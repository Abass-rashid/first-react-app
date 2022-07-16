import React from 'react'
import { useEffect } from 'react';
import './App.css'
import serachIcon from "./search.svg"

const API_URL = "http://www.omdapi.com?apikey=cde17c65";

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}$s=${title}`)
    const data = await response.json()

    console.log(data.search)
  }
 useEffect(() =>{
    searchMovies("spiderman");
 }, [])
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value="superman"
          onChange={() => {}}
        />
        <img src={serachIcon} alt="search" onClick={()=> {}} />
      </div>

      <div className="container"></div>
    </div>
  );
}

export default App
