import React from 'react'
import style from '../components/recipe.module.css';
function RecipeLists({title,image,ingredients,calories}) {
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <h5>{calories} Calories</h5>
            <img src = {image} alt='' />
            <ol>
                {ingredients.map((ingredient,index)=>(
                    <li key={index}>{ingredient}</li>
                ))}
            </ol>
            
        </div>
    )
}

export default RecipeLists
