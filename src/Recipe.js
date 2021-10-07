import React from "react";

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <ol><b>Ingredients</b>
            <div className="ingredients">
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </div>
            </ol>
            <p><b>Calories</b> : {calories}</p>
        </div>
    );
};

export default Recipe;