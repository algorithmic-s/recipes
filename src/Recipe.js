import React from 'react';

import style from "./recipe.module.css";

const Recipe = ({ title,calories,image, ingredients  }) => {
 return(
   
<div className = {style.recipe}>
    <h1 className={style.title}>{title}</h1>
    <ol>
        {ingredients.map(ingredient => (
            <li  className = {style.listItems}>
                    {ingredient.text}
            </li>
        ))}
    </ol>
    <p  className = {style.calories}>Calories: {Math.round(calories)}</p>
    <img className = {style.image} alt = "image" src = {image}></img>


</div>

 );

 /* rather than adding title, calories, and image, can change function,
 and pull info from app.js, taking things from that Usestate, and passing it
 down into the function and placing in this document
return
<div>
    <h1>Title</h1>
    <p>Calories</p>
    <img src = ""></img>
</div>

react needs a unique identfier ,
unique 'key prop



 */

}
export default Recipe;