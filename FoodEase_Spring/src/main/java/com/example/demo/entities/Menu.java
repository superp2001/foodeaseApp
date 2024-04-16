package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "menu")
public class Menu {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int menu_id;

    @Column
    private String name;

    @Column
    private String food_type;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "category_id")
    private Category category_id;

	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Menu(String name, String food_type, Category category_id) {
		super();
		this.name = name;
		this.food_type = food_type;
		this.category_id = category_id;
	}

	public int getMenu_id() {
		return menu_id;
	}

	public void setMenu_id(int menu_id) {
		this.menu_id = menu_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFood_type() {
		return food_type;
	}

	public void setFood_type(String food_type) {
		this.food_type = food_type;
	}

	public Category getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Category category_id) {
		this.category_id = category_id;
	}
	
	
    
    

}
