import React, { useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { RecipeContext } from '../contexts/RecipeContextProvider'
import { withRouter } from 'react-router-dom'

function NewRecipe(props) {
  const { appendRecipe } = useContext(RecipeContext)
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [showContent, setShowContent] = useState(false)
  
  let images = []

  const filesChange = async fileList => {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array.from(Array(fileList.length).keys())
        .map(x => {
          formData.append("files", fileList[x], fileList[x].name);
        });

        let response = await fetch('/api/upload-files', {
          method: 'POST',
          body: formData
        }).catch(console.warn)

        response = await response.json()

        console.log(response);
        
        images = response
  }

  const addRecipe = async (e) => {
    e.preventDefault()

    if(!title.trim() || !ingredients.trim()) {
      return
    }

    const recipe = {
      title, 
      ingredients,
      imagePath: images[0] // database only supports one image
    }

    // send new recipe to backend
    let res = await fetch('/rest/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe)
    })
    res = await res.json()

    console.log(res)
    
    // the recipe response has the incremented id,
    // and it's this recipe we want to add to our 
    // list, so we later can remove it by id
    appendRecipe(res)

    setTitle('')
    setIngredients('')

    props.history.push('/')
  }

  return (
    <div>
      <h1>New Recipe</h1>
      {/* in Vue: @submit="addRecipe" */}
      <Form 
        onSubmit={addRecipe}
        className="row">
        <FormGroup className="col-sm-12 col-md-8 col-lg-6">
          <Label for="recipe-title">Title</Label>
          <Input 
            required
            type="text" 
            id="recipe-title" 
            placeholder="enter title ..."
            // in Vue: v-model="title"
            value={title}
            onChange={
              e => setTitle(e.target.value)
            }
           />
        </FormGroup> 
        <FormGroup className="col-sm-12 col-md-8 col-lg-6">
          <Label for="recipe-ingredients">Ingredients</Label>
          <Input 
            required
            type="text" 
            id="recipe-ingredients" placeholder="enter ingredients ..." 
            value={ingredients}
            onChange={
              e => setIngredients(e.target.value)
            }
          />
        </FormGroup> 
        <FormGroup className="m-3">
          <Label for="files">File to upload:</Label>
          <Input 
            type="file" 
            name="file"
            id="files" 
            accept=".png,.jpg,.jpeg,.gif,.bmp,.jfif" 
            multiple 
            required
            onChange={e => filesChange(e.target.files)}
            />
          </FormGroup>
        <Button color="info" className="ml-3">Add recipe</Button>
      </Form>

      <Button 
      className="my-4"
      onClick={() => setShowContent(!showContent)}
      >{showContent ? 'Hide' : 'Show'} content</Button>
      {/* v-if="showContent" */}
      {showContent ? (
        <p>The secret is the sauce.</p>
      ) : ''}
      {/* the short circuit way */}
      {/* {showContent && <p>The secret is the sauce.</p>} */}
    </div>
  )
}

export default withRouter(NewRecipe)