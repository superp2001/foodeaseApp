package com.example.demo.entities;


public class RestaurantRegisterDumi {

	
     String restaurent_name;
	    
     String phone;
	    
     String email;
	    
	 String fssai_licence_no;
	    	    
	 String gstNo;
	    	    
	 String pan_no;
	 
	 int area_id;
	 
	 int rowner_id;


	 
	
	public int getArea_id() {
		return area_id;
	}

	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}

	public int getRowner_id() {
		return rowner_id;
	}

	public void setRowner_id(int rowner_id) {
		this.rowner_id = rowner_id;
	}

	public String getRestaurent_name() {
		return restaurent_name;
	}

	public void setRestaurent_name(String restaurent_name) {
		this.restaurent_name = restaurent_name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFssai_licence_no() {
		return fssai_licence_no;
	}

	public void setFssai_licence_no(String fssai_licence_no) {
		this.fssai_licence_no = fssai_licence_no;
	}

	public String getGstNo() {
		return gstNo;
	}

	public void setGstNo(String gstNo) {
		this.gstNo = gstNo;
	}

	public String getPan_no() {
		return pan_no;
	}

	public void setPan_no(String pan_no) {
		this.pan_no = pan_no;
	}

	@Override
	public String toString() {
		return "RestaurantRegisterDumi [restaurent_name=" + restaurent_name + ", phone=" + phone + ", email=" + email
				+ ", fssai_licence_no=" + fssai_licence_no + ", gstNo=" + gstNo + ", pan_no=" + pan_no + ", area_id="
				+ area_id + ", rowner_id=" + rowner_id + "]";
	}

	
	 
	 
	 
	
	
}
