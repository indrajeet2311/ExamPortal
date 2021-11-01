package com.example.demo.entity;

public class JwtReponse {

String token;

JwtReponse(){
	
}

public JwtReponse(String token) {
	super();
	this.token = token;
}

public String getToken() {
	return token;
}

public void setToken(String token) {
	this.token = token;
}




	
}
