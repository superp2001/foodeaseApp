package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


//@Setter @Getter @NoArgsConstructor
//@AllArgsConstructor
//@ToString
@Entity
@Table(name="login")
public class Login {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int loginID;
	
	@Column
	String username;
	
	@Column
	String email;
	
	@Column
	String password;
	
	@Column
    Boolean status_approve;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(int loginID, String username, String email, String password, Role role_id,Boolean status_approve) {
		super();
		this.loginID = loginID;
		this.username = username;
		this.email = email;
		this.password = password;
		this.role_id = role_id;
		this.status_approve = status_approve;
	}
	
	

	public Login(String username, String email, String password, Role role_id,Boolean status_approve) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.role_id = role_id;
		this.status_approve = status_approve;
	}

	public Login(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public int getLoginID() {
		return loginID;
	}

	public void setLoginID(int loginID) {
		this.loginID = loginID;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public boolean isStatus_approve() {
		return status_approve;
	}

	public void setStatus_approve(Boolean status_approve) {
		this.status_approve = status_approve;
	}

	public Role getRole_id() {
		return role_id;
	}

	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}

	@Override
	public String toString() {
		return "Login [loginID=" + loginID + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", role_id=" + role_id + "]";
	}
	
	
	
	
	
	
}
