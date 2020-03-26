package com.example.demo.services;

import com.example.demo.entities.Recipe;
import com.example.demo.repositories.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

  @Autowired
  private RecipeRepo recipeRepo;

  public Recipe getOneRecipe(int id) {
    return recipeRepo.findById(id);
  }

  public List<Recipe> getAllRecipes() {
    return (List<Recipe>) recipeRepo.findAll();
  }

  public Recipe createRecipe(Recipe recipe) {
    return recipeRepo.save(recipe);
  }

  public void deleteRecipe(int id) {
    recipeRepo.deleteById(id);
  }

  public List<Recipe> getByTitle(String title) {
    return recipeRepo.findAllByTitleContainingIgnoreCase(title);
  }

}
