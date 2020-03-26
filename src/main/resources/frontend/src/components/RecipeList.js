import React, { useContext } from 'react'
import { Card, 
  CardTitle, 
  CardText, 
  Container, 
  Row, 
  Col } from 'reactstrap';
  import { RecipeContext } from '../contexts/RecipeContextProvider'

export default function RecipeList() {
  const { recipes, removeRecipe } = useContext(RecipeContext)

  // in Vue
  // v-for="(recipe, i) of recipes"
  // :key="recipe.title + i"
  const list = () => {
    return recipes.map((recipe, i) => {
      return (
        <Card 
          key={recipe.title + i}
          body 
          inverse 
          className="mb-2"
          style={{ 
            backgroundColor: '#333', 
            borderColor: '#333'
          }}>
            <Container>
              <Row>
                {/* <span style={{fontSize: '2em'}}>🍲</span> */}
                {/* eslint-disable-next-line */}
                <img width="70px" height="70px" src={recipe.imagePath} />
                  
                <Col>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardText>{recipe.ingredients}</CardText>
                </Col>
                {/* eslint-disable-next-line */}
                <span 
                  onClick={() => removeRecipe(recipe.id)}
                  style={{cursor: 'pointer'}}
                >🗑️</span>
              </Row>
            </Container>
          </Card>
      )
    })
  }

  return (
    <>
      {list()}
    </>
  )
}