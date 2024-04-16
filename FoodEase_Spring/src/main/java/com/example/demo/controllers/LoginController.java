package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.services.LoginService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	LoginService lservice;

	@PostMapping("/checkLogin")
	public ResponseEntity<Login> checkLogin(@RequestBody LoginCheck lcheck) {
		
		 Login login=lservice.getLogin(lcheck.getEmail(), lcheck.getPassword());
		 if(login!=null)
			 return ResponseEntity.status(HttpStatus.OK).body(login);
		 else
			 return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
	}
	
	
	@PostMapping("/login")
    public ResponseEntity<String> registerLogin(@RequestBody Login loginData) {
        try {
            // Save the login data
        	System.out.println(loginData);
            Login savedLogin = lservice.saveLogin(loginData);
            System.out.println("Saved");
            return ResponseEntity.ok("Login data registered successfully!");
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception using a logging framework like SLF4J
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login data registration.");
        }
    }
	
	
    
    @GetMapping("/{loginID}/reject")
    public ResponseEntity<Void> rejectLogin(@PathVariable("loginID") int loginID) {
        lservice.rejectLogin(loginID);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/{loginID}/approve")
    public ResponseEntity<Void> approveLogin(@PathVariable("loginID") int loginID) {
        lservice
        .approveLogin(loginID);
        return ResponseEntity.ok().build();
    }

}
