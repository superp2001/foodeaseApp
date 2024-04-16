package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Restaurant_owner;

import jakarta.transaction.Transactional;


@Repository
public interface RownerRepository extends JpaRepository<Restaurant_owner, Integer> {

	@Query("select c from Restaurant_owner c where loginID= :l")
	public Restaurant_owner getRowner(Login l);
	
     
	
	@Query(value = "INSERT INTO restaurant_owner (fname, lname, address, phone, loginID) VALUES (:fname, :lname, :address, :phone, :loginId)", nativeQuery = true)
    @Transactional
    @Modifying
    void insertRowner(@Param("fname") String fname, @Param("lname") String lname, @Param("address") String address, @Param("phone") String phone, @Param("loginId") String loginId);
	
	
	
}
