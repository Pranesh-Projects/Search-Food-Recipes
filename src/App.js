import { useEffect, useState } from 'react';

const App = () => {

  const APP_ID = "36f361f5";
  const APP_KEY = "bbe5ba0a1e22ae5027a5b1aab2d0b71e";

  useEffect(() =>{
    getRecipes();
  }, []);

  const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data);
  }
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
