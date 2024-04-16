package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Area;
import com.example.demo.entities.Cart;
import com.example.demo.entities.City;
import com.example.demo.entities.Customer;

import jakarta.transaction.Transactional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
	
	@Query("select c from Cart c where user_id= :user_id")
	public List<Cart> findByCustomerId(Customer user_id);
	
//	@Query("DELETE FROM Cart c WHERE c.user_id = :user_id")
//    void deleteByCustomerId(Customer user_id);
	
//	@Transactional
//    @Modifying
//    @Query("DELETE FROM Cart c WHERE c.user_id = :user")
//    void deleteByUser_id(@Param("user") Customer user);
	
	 @Transactional
     @Modifying
     @Query("DELETE FROM Cart c WHERE c.user_id = :user_id")
     void deleteByUser_id(Customer user_id);

}
