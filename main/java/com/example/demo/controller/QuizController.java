package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.exam.Category;
import com.example.demo.entity.exam.Quiz;
import com.example.demo.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
	
@Autowired
private QuizService quizService;

@PostMapping("/")
public ResponseEntity<Quiz> addquiz(@RequestBody Quiz quiz)
{
Quiz quiz1 = this.quizService.addquiz(quiz);
return ResponseEntity.ok(quiz1);
}

@GetMapping("/")
public ResponseEntity<?> getQuizzes()
{
	return ResponseEntity.ok(this.quizService.getQuizzes());
}


@GetMapping("/{qId}")
public ResponseEntity<?> getQuiz(@PathVariable("qId") Long qId)
{
	return ResponseEntity.ok(quizService.getQuiz(qId));
}


@PutMapping("/")
public ResponseEntity<?> updateQuiz(@RequestBody Quiz quiz)
{
 return ResponseEntity.ok(quizService.updateQuiz(quiz));
}

@DeleteMapping("/{quizId}")
public void deleteQuiz(@PathVariable("quizId") Long quizId)
{
  this.quizService.deleteQuiz(quizId);
}

@GetMapping("/category/{cid}")
public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid)
{
	Category category = new Category();
	category.setCid(cid);
	return this.quizService.getQuizzesOfCategory(category);
	
}

//get acrive quizzes
@GetMapping("/active/")
public List<Quiz> getActiveQuizzes()
{
	return this.quizService.getActiveQuizzes();
}

@GetMapping("/category/active/{cid}")
public List<Quiz> getActiveQuizzes(@PathVariable("cid") Long cid)
{
Category category = new Category();
category.setCid(cid);
return this.quizService.getActiveQuizzesOfCategory(category);
}




}
