package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.Login;

import jakarta.transaction.Transactional;

@Repository
public interface DeliveryBoyRepository extends JpaRepository<DeliveryBoy, Integer> {
	
	@Query("select c from DeliveryBoy c where loginID= :l")
	public DeliveryBoy getDeliveryBoy(Login l);
	


	@Query(value = "INSERT INTO Delivery_boy (fname, lname, phone, address, vehicle_License_No, photo_id_number, loginID) VALUES (:fname, :lname, :phone, :address, :vehicle_License_No, :photo_id_number, :loginID)", nativeQuery = true)
	@Transactional
	@Modifying
	void insertDeliveryBoy(@Param("fname") String fname, @Param("lname") String lname, @Param("phone") String phone, @Param("address") String address, @Param("vehicle_License_No") String  vehicle_License_No, @Param("photo_id_number") String photo_id_number, @Param("loginID") int loginID);


}
