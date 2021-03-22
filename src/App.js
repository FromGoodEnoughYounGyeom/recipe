import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const App = () => {

  const APP_ID = '4ed5e7a9';
  const APP_KEY = 'c77ddcd71936802c8d2d2c0057649dec';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] =  useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);

  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
       <p className='today'>Today's menu</p>
       <form onSubmit={getSearch} className="search-form">

          <input className="search-bar" type="text" placeholder="ingredients" value={search} onChange={updateSearch}/>

          <Button className="search-button" type="submit" variant="contained" color="primary">Search</Button>
          
       </form>
        {recipes.map(recipe =>(
          <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories= {recipe.recipe.calories} 
            url={recipe.recipe.url} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
        ))}
    </div>
  );
}

export default App;
