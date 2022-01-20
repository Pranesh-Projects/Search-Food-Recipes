import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe} >
            {/* title */}
            <h1>{title}</h1>
            {/* image */}
            <img className={style.image} src={image} alt="" />
            {/* ingredients */}
            <ol>
                <b>Ingredients</b>
                <div className={style.left_align}>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </div>
            </ol>
            {/* calories */}
            <p><b>Calories</b> : {calories}</p>

        </div>
    );
};

export default Recipe;