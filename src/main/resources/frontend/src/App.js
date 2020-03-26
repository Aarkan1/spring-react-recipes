import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import RecipeContextProvider from './contexts/RecipeContextProvider'
import UserContextProvider from './contexts/UserContextProvider'

import TopNavbar from './components/TopNavbar'
import Home from './pages/Home'
import NewRecipe from './pages/NewRecipe'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <RecipeContextProvider>
        <UserContextProvider>
            <Router>
              <TopNavbar />
              <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/new-recipe" component={NewRecipe} />
                <Route exact path="/perform-login" component={Login} />
                <Route exact path="/perform-register" component={Register} />
              </main>
            </Router>
          </UserContextProvider>
      </RecipeContextProvider>
    </div>
  );
}

export default App;
