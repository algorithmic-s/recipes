import React,{useEffect, useState} from 'react';

import Recipe from './Recipe';
//removed logo
import './App.css';

const App = () => {
   
const APP_ID = "f120c8a1";
const APP_KEY =  "cbcff5edc6727679f971a06c725e642b";

//all recipes in state
const [recipes, setRecipes] = useState([]);
const[search, setSearch] = useState('');
const [ query, setQuery] = useState('');
//query runs after hit submit button
//const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

useEffect( () => {
getRecipes();
//gets info needed
//console.log('fetching testing');
}, [query]);
//add query to array only runs when click on 'submit'
//use effect only runs when query changes

//make sync calls
const getRecipes = async () => {
const response = await fetch(
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//once response comes back  from externa api
const data = await response.json();
//console.log(data.hits);
setRecipes(data.hits);
console.log(data.hits);

}

const updateSearch = e => {
setSearch( e.target.value);
//console.log(search);
};

const getSearch = e => {
//whenever submit form, want to run getsearch
//stop page refesh
e.preventDefault();
setQuery(search);
setSearch(''); //set search back empty string
};

return (
<div className = "App">
  <form 
  onSubmit = {getSearch}
  className = "search-form">
    <input className = "search-bar" type = "text" value = {search}  
    onChange = {updateSearch}
    />
    <button className = "search-button" type="submit">
      Search
    </button>
  </form>


  <div className = "recipes">
    {recipes.map( recipe => (
    <Recipe 
    //adding unique key prop, whch needs to be something unique, using title
    key = {recipe.recipe.label}
    title = {recipe.recipe.label}
    calories = {recipe.recipe.calories}
    image = {recipe.recipe.image}
    ingredients = {recipe.recipe.ingredients}
    //have to loop through ingred array
    />

    ))}
  </div>

</div>
);

};

/*
useEffect(() => {
console.log("effect run");
}, []);
 // <h1 onClick={() => setCounter(counter+1)} >{counter}</h1>


*/

export default App;
