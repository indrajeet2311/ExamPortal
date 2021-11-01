import { MatSnackBar } from '@angular/material/snack-bar';
import  Swal  from 'sweetalert2';
import { CategoryService } from './../../../services/category.service';
import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

 categories=[{
   cid:26,
   title:'Programming'
 },
 {
  cid:26,
  title:'Programming' 
 }
]


quizData ={
  title : '',
  description : '',
  maxMarks: '',
  numberOfQuestions : '',
  active: true,
  category : {
 cid: '',
  },
};

  constructor(private _cat:CategoryService, private _snack:MatSnackBar, private _quiz:QuizService) { }

  ngOnInit(): void {

    this._cat.categories().subscribe(
      (data:any) =>{
        this.categories = data;
        console.log(this.categories);
        //categories load
      },
    (error:any)=>{
  console.log(error);
  Swal.fire('Error', 'error  in loading data from the server' ,'error');
    }

    );
  }

  addQuiz(){
  
  if(this.quizData.title.trim() == '' || this.quizData.title == null)
  {
 this._snack.open('Title Required', '',{
duration: 3000,
 });
 return;
  }
  

 // call server
 this._quiz.addQuiz(this.quizData).subscribe(
 (data) =>{
Swal.fire('Success','quiz is added','success');
this.quizData ={
  title : '',
  description : '',
  maxMarks: '',
  numberOfQuestions : '',
  active: true,
  category : {
 cid: '',
  },
};

 },
(error:any) =>{
Swal.fire('Error!!','Error while adding quiz');
console.log(error);
});



  }
}
