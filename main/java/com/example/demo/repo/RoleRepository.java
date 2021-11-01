package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;


public interface RoleRepository extends JpaRepository<Role, User>{

	


}
