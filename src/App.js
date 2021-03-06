import React from "react";
import Recipie from "./components/Recipie";
import Header from "./components/Header";



const App = (props)=>{
    const [text , setText] = React.useState("");
    const [query, setQuery] = React.useState("");
    const [recipes, setRecipies] = React.useState([]);
     const APP_ID ="";
     const APP_KEY= "";

    const base= `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getRecipies =async ()=>{
        const response = await fetch(base);
        const data = await response.json();
        setRecipies(data.hits);
        console.log(data.hits);

    }

    const HandleSubmit = (e)=>{
        setQuery(text);
        setText("");
    }
    const HandleChange= (e)=>{
        const {value} = e.target;
        setText(value);
    }
    React.useEffect(()=>{
        getRecipies();

    },[query]);


    return (
        <div className="main-container">
        <div className="container">

                <Header/>
<div >

                <form className="search-form" onSubmit={(e)=>{e.preventDefault();}}>
                    <input className="search-bar" type="text" placeholder="search...." value={text} onChange={HandleChange}></input>
                    <button type="submit" className="search-btn" onClick={HandleSubmit}>Search</button>
                </form>
</div>
        </div>

        <div className="recipe-box">


            {recipes.map((meal, index)=>{
                
                return (
                    <Recipie 
                    key = {index}
                    title= {meal.recipe.label}
                    cal = {meal.recipe.calories}
                    img = {meal.recipe.images.SMALL.url}
                    cousineType = {meal.recipe.cuisineType}
                    dietLabel= {
  typeof meal.recipe.dietLabels.length !== 0 ?
  (typeof  meal.recipe.dietLabels.length > 0 ? `${meal.recipe.dietLabels[0]}, ${meal.recipe.dietLabels[1]}` : meal.recipe.dietLabels[0])  : "N/A"                  
                        }
                    mealType = {meal.recipe.mealType}
                    ingredients={meal.recipe.ingredients}
                     />)
            })}

        </div>
        </div>
    )
}

export default App;
