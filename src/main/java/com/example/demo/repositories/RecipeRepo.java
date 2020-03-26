package com.example.demo.repositories;

import com.example.demo.entities.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepo extends CrudRepository<Recipe, Integer> {
  // findAll() SELECT * FROM recipes
  public Recipe findById(int id); // SELECT * FROM recipes WHERE id = ?
  public List<Recipe> findAllByTitleContainingIgnoreCase(String title); // SELECT * FROM recipes WHERE upper(title) LIKE upper(?)
}
