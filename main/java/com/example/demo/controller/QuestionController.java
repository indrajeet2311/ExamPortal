package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

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

import com.example.demo.entity.exam.Question;
import com.example.demo.entity.exam.Quiz;
import com.example.demo.service.QuestionService;
import com.example.demo.service.QuizService;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	
@Autowired
private QuestionService questionService;
	
@Autowired
private QuizService quizService;

@PostMapping("/")
public ResponseEntity<Question> addQuestion(@RequestBody Question question)
{
	
	return ResponseEntity.ok(this.questionService.addQuestion(question));
}

@PutMapping("/")
public ResponseEntity<Question> updateQuestion(@RequestBody Question question)
{
	return ResponseEntity.ok(questionService.updateQuestion(question));
}

//get all question
@GetMapping("/quiz/{qid}")
public ResponseEntity<?> getQuestionsofQuiz(@PathVariable("qid") Long qid)
{
	//Quiz quiz = new Quiz();
	//quiz.setqId(qid);
	//Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);
	//return ResponseEntity.ok(questionsOfQuiz);
	
	Quiz  quiz  = this.quizService.getQuiz(qid);
	Set<Question> questions = quiz.getQuestions();
	
	List list = new ArrayList(questions);
	if(list.size()> Integer.parseInt(quiz.getNumberOfQuestions()))
	{
		list  = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions() + 1));
	}

	Collections.shuffle(list);
	return ResponseEntity.ok(list);
	
}



//get single question
@GetMapping("/{quesId}")
public Question get(@PathVariable("quesId") Long quesId)
{
	return this.questionService.getQuestions(quesId);
}

@DeleteMapping("/{quesId}")
public void delete(@PathVariable("quesId")Long quesId)
{
 this.questionService.deleteQuestion(quesId);
}



//get all question
@GetMapping("/quiz/all/{qid}")
public ResponseEntity<?> getQuestionsofAdmin(@PathVariable("qid") Long qid)
{
	Quiz quiz = new Quiz();
	quiz.setqId(qid);
	Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);
	//return ResponseEntity.ok(questionsOfQuiz);

	return ResponseEntity.ok(questionsOfQuiz);
	
}




}
