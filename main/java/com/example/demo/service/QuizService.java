package com.example.demo.service;

import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.example.demo.entity.exam.Category;
import com.example.demo.entity.exam.Quiz;

public interface QuizService {
	
public Quiz addquiz(Quiz quiz);

public Quiz updateQuiz(Quiz quiz);

public Set<Quiz> getQuizzes();

public Quiz getQuiz(Long quizId);

public void deleteQuiz(Long quizId);

public List<Quiz> getQuizzesOfCategory(Category category);

public List<Quiz> getActiveQuizzes();

public List<Quiz> getActiveQuizzesOfCategory(Category c);



}
