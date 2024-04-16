package com.example.demo.entities;

public class LoginCheck {
	
	String email;
	
	String password;
	
	String username;
	
	boolean status_approve;
	
	
	public LoginCheck() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginCheck(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public boolean isStatus_approve() {
		return status_approve;
	}
	public void setStatus_approve(boolean status_approve) {
		this.status_approve = status_approve;
	}
	@Override
	public String toString() {
		return "LoginCheck [email=" + email + ", password=" + password + ", username=" + username + ", status_approve="
				+ status_approve + "]";
	}

	
}
