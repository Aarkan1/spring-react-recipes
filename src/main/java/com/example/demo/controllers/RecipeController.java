package com.example.demo.controllers;

import com.example.demo.entities.Recipe;
import com.example.demo.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecipeController {

  @Autowired
  private RecipeService recipeService;

  // app.get('/rest/recipes', (req, res) => {
  //   res.json(recipes)
  // } )

  /**
   * C - @PostMapping
   * R - @GetMapping
   * U - @PutMapping
   * D - @DeleteMapping
   */

  @GetMapping("/rest/recipes")
  public List<Recipe> getAllRecipes() {
    return recipeService.getAllRecipes();
  }

  // app.get('/rest/recipes/:id')
  // req.params.id

  @GetMapping("/rest/recipes/{id}")
  public Recipe getOneRecipe(@PathVariable int id) {
    return recipeService.getOneRecipe(id);
  }

  // @RequestBody is used to convert the incoming json object
  // to an instance of a java class
  @PostMapping("/rest/recipes")
  public Recipe createNewRecipe(@RequestBody Recipe recipe) {
    return recipeService.createRecipe(recipe);
  }

  @DeleteMapping("/rest/recipes/{id}")
  public void deleteRecipe(@PathVariable int id) {
    recipeService.deleteRecipe(id);
  }

  @GetMapping("/rest/recipes/search/{title}")
  public List<Recipe> getByTitle(@PathVariable String title) {
    return recipeService.getByTitle(title);
  }
}
