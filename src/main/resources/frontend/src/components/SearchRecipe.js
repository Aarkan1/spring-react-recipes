import React, { useContext } from 'react'
import { Button, FormGroup, Input } from 'reactstrap';
import { RecipeContext } from '../contexts/RecipeContextProvider'

let throttleSearch;

export default function SearchRecipe() {
  // TODO: check why useState on onChange
  // lags behind input
  // const [search, setSearch] = useState('')
  const { setRecipes } = useContext(RecipeContext)

  const doSearch = async (input) => {
    let res;
    if(!input.trim()) {
      res = await fetch('/rest/recipes')
    } else {
      res = await fetch('/rest/recipes/search/' + input)
    }

    res = await res.json()
    setRecipes(res)
  }
  
  const autoSearch = (input) => {
    clearTimeout(throttleSearch)
    throttleSearch = setTimeout(async () => {
      await doSearch(input)
    }, 200);
  }

  return (
    <div className="row">
      <FormGroup className="col-10">
        {/* <Label for="searching">Email</Label> */}
        <Input 
          onChange={e => autoSearch(e.target.value)}
          type="text" 
          id="searching" 
          autoComplete="off"
          placeholder="search recipe ..." />
      </FormGroup>
      {/* eslint-disable-next-line */}
      <Button 
        onClick={doSearch}
        className="col-2 p-0 pr-3"
        color="transparent"
        style={{height: '30px', fontSize: '1.3em'}}
        >🔎</Button>
    </div>
  )
}