import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "36f361f5";
  const APP_KEY = "bbe5ba0a1e22ae5027a5b1aab2d0b71e";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");
  
  const updateChange = e => {
    setSearch(e.target.value);
    console.log(search);
  }
  
  const getSearch = e => {
    e.preventDefault();
    console.log("Prevented Reload");
    setQuery(search);
    console.log(search,query);
    setSearch('');
    console.log(search);
  }

  useEffect(() =>{
    getRecipes();
    console.log("Lets see if it works");
  }, [query]);

  const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  setRecipes(data.hits);
  }
  
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateChange} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
