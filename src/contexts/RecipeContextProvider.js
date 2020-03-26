import React, { createContext, useState, useEffect } from 'react'

export const RecipeContext = createContext()

export default function RecipeContextProvider(props) {
  const [recipes, setRecipes] = useState([])

  const appendRecipe = (recipe) => {
    // three dots (...) is called a 
    // spread syntax, and this will
    // copy the content of the array
    setRecipes([...recipes, recipe])
  }

  const removeRecipe = id => {
    // updates the array with a filtered array
    // where we filter out our recipe
    setRecipes(recipes.filter(r => r.id !== id))

    fetch('/rest/recipes/' + id, {
      method: 'DELETE'
    })
  }

  const fetchRecipes = async () => {
    let res = await fetch('/rest/recipes')
    res = await res.json()
    setRecipes(res)
  }

  /**
   * Run the fetch once
   * (good practice to fetch init data in
   * a useEffect hook once Context gets loaded)
   */
  useEffect(() => {
    fetchRecipes()
  }, [])
  
  const values = {
    recipes, 
    setRecipes,
    appendRecipe,
    removeRecipe
  }

  return (
    <RecipeContext.Provider value={values}>
      {props.children}
    </RecipeContext.Provider>
  )
}