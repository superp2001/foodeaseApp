package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Category;
import com.example.demo.entities.Menu;


@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {

	
	@Query("select a from Menu a where a.category_id = :category_id")
    public List<Menu> findByCategoryID(Category category_id);
	
}
