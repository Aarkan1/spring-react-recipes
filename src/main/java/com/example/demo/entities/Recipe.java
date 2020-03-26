package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "recipes")
public class Recipe {

  @Id // Primary Key
  @GeneratedValue(strategy = GenerationType.IDENTITY) // Enables Autoincrement
  private int id;

  private String title;
  private String ingredients;
  @Column(name = "imagePath") private String imagePath;

  public Recipe() {}

  public String getImagePath() {
    return imagePath;
  }

  public void setImagePath(String imagePath) {
    this.imagePath = imagePath;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getIngredients() {
    return ingredients;
  }

  public void setIngredients(String ingredients) {
    this.ingredients = ingredients;
  }
}
