import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RecipeLists from './RecipeLists';
function RecipeFinder() {
    const API_ID = process.env.REACT_APP_API_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [recipes, setRecipes] = useState([]);
    const [label, setLabel] = useState('');
    const [query, setQuery] = useState('chicken');
    const URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

    async function getData() {
        try {
            const response = await axios.get(URL, { crossdomain: true });
            setRecipes(response.data.hits);
          //  console.log(response.data.hits);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    const getFood = (e) => {
        e.preventDefault();
        setQuery(label)
    }

    return (
        <>
            <form onSubmit={getFood} className="search-form" >
                <input className="search-bar" type="text" placeholder="Enter the main ingredient" value={label} onChange={(e) => { setLabel(e.target.value) }}></input>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <RecipeLists key={recipe.recipe.image} title={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredientLines} calories={recipe.recipe.calories.toFixed(2)} />
            ))}
            </div>

        </>
    )
}

export default RecipeFinder
