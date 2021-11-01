package com.example.demo.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.JwtUtils;
import com.example.demo.entity.JwtReponse;
import com.example.demo.entity.JwtRequest;
import com.example.demo.entity.User;
import com.example.demo.service.impl.UserSetailsServiceImpl;

@RestController
@CrossOrigin("*")
public class AuthenticateController {
	

@Autowired
private AuthenticationManager authenticationManager;

@Autowired
private UserSetailsServiceImpl userDetailsService;

@Autowired
private JwtUtils jwtUtils;

@PostMapping("/generate-token")
public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest)
 throws Exception{
	
	try {
		authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
		
	}
	catch(Exception e) {
		e.printStackTrace();
		throw new Exception("User nor found");
	}
	
	UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
	String token = this.jwtUtils.generateToken(userDetails);
	
	return ResponseEntity.ok(new JwtReponse(token));
	
}


private void authenticate(String username,String password) throws Exception
{
	
	try {
		
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
		
		
	}
	catch(DisabledException e) {
		throw new Exception("USER DISABLE" + e.getMessage());
	}
	catch(BadCredentialsException e)
	{
		throw new Exception("INVALID Credentails" + e.getMessage());
	}	
}

@GetMapping("/current-user")
public User getCurrentUser(Principal principal) {
	
return (User)this.userDetailsService.loadUserByUsername(principal.getName());	
}


}

