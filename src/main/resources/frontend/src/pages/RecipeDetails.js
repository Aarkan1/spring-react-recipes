import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap';

export default function RecipeDetails(props) {
  const [recipe, setRecipe] = useState(null)
  let { id } = useParams()

  const getRecipe = async () => {
    // let id = props.match.params.id
    let response = await fetch('/rest/recipes/' + id)
    response = await response.json()
    console.log(response);
    setRecipe(response)
  }

  useEffect(() => {
    console.log(props.match.params.id);
    getRecipe() 
  }, [])

  return (
    <div>
      {recipe ? (
        <>
          <img width="100%" src={recipe.imagePath}/>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
        </>
        )
      : <Spinner color="info" /> }
    </div>
  )
}