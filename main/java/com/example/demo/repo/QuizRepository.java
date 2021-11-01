package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.exam.Category;
import com.example.demo.entity.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz,Long>{
	
public List<Quiz> findBycategory(Category category);

public List<Quiz> findByActive(Boolean b);

public List<Quiz> findBycategoryAndActive(Category c,Boolean b);

}
