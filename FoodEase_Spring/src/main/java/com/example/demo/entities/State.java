package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@Entity
//@NoArgsConstructor
@Table(name="state")
public class State {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int stateID;
	
	@Column
	String state_name;
	
	

	public State() {
		super();
		// TODO Auto-generated constructor stub
	}

	public State(int stateID, String state_name) {
		super();
		this.stateID = stateID;
		this.state_name = state_name;
	}

	public int getState_id() {
		return stateID;
	}

	public void setState_id(int stateID) {
		this.stateID = stateID;
	}

	public String getState_name() {
		return state_name;
	}

	public void setState_name(String state_name) {
		this.state_name = state_name;
	}

	@Override
	public String toString() {
		return "State [state_id=" + stateID + ", state_name=" + state_name + "]";
	}
	
	
	
		
	
}
