import React from 'react'
import RecipeList from '../components/RecipeList'
import SearchRecipe from '../components/SearchRecipe'

const Home = () => {
  // const [counter, setCounter] = useState(0)
  // const [counter2, setCounter2] = useState(0)

  // mounted()
  // useEffect(() => {
    // console.log('Mounted')

    // beforeDestroy()
    // return () => {
      // console.log('Unmounted')
    // }
  // }, [])

  // useEffect(() => {
    // updated()
    // console.log('Updated')
  // })

  // useEffect(() => {
    // watch: 
    // counter()
    // console.log('Watching counter')
  // }, [counter])

  return (
    <div>
      {/* <h1 onClick={() => setCounter(counter + 1)} className="mb-4">Recipes</h1>
      <h1 onClick={() => setCounter2(counter2 + 1)} className="mb-4">Counter2: {counter2}</h1> */}
      <SearchRecipe />
      <RecipeList />
    </div>
  )
}

export default Home