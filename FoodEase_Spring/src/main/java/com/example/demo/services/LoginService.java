package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

import jakarta.transaction.Transactional;

@Service
public class LoginService {
	
	@Autowired
    LoginRepository lrepo;
	
	public Login getLogin(String email,String password) {
     	Login l;
		Optional<Login> ol=lrepo.getLogin(email, password);
		try {
			l=ol.get();
		}
		catch(Exception e) {
			l=null;
		}
		return l;
	}
	
	@Transactional
    public Login saveLogin(Login login) {
        try {
            return lrepo.save(login);
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error saving login information.", e);
        }
	}
	
	public Login getById(int loginId) {
        try {
            return lrepo.findById(loginId).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting login information by ID.", e);
        }
    }
	
	public void rejectLogin(int loginID) {
        // Fetch the login by ID
        Login login = lrepo.findById(loginID).get();
               

        // Perform any business logic related to rejecting the login
        login.setStatus_approve(false);

        // Save the updated login entity
        lrepo.save(login);
    }

    
    public void approveLogin(int loginID) {
        lrepo.findById(loginID).ifPresent(login -> {
            // Perform the approval logic here
            // For example, set an approval status field on the Login entity
            login.setStatus_approve(true);
            lrepo.save(login);
        });
        // If the login is not present, no need to explicitly handle it
    }

}
