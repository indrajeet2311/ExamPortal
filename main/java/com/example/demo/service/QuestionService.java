package com.example.demo.service;

import java.util.Set;

import com.example.demo.entity.exam.Question;
import com.example.demo.entity.exam.Quiz;

public interface QuestionService {
	
public Question addQuestion(Question question);

public Question updateQuestion(Question question);

public Set<Question> getQuestions();

public Question getQuestions(Long questionId);

public Set<Question> getQuestionsOfQuiz(Quiz quiz);

public void deleteQuestion(Long quesId);



}
