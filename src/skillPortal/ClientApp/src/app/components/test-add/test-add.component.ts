import { QuestionAddModel } from './../../models/QuestionModels';
import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../services/animations';
import { ExamAddModel } from './../../models/ExamModels';
import { Component, OnInit } from '@angular/core';
import { AnswerAddModel } from '../../models/AnswerModels';

@Component({
  selector: 'app-test-add',
  templateUrl: './test-add.component.html',
  styleUrls: ['./test-add.component.css'],
  animations: [fadeInOut]
})
export class TestAddComponent implements OnInit {

  public catId;
  public exam: ExamAddModel;
  columnsForAnswerTable: string[] = ['IsCorrect', 'Text', 'Image', 'Actions', ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.catId = +params['catId'];
      console.log(this.catId);
    });
    this.exam =  new ExamAddModel;
    this.exam.questions = [];
  }
  AddNewQuestion() {
    const question  =   new QuestionAddModel();
    question.text = '';
    question.answers = [];
    console.log(this.exam);
    this.exam.questions.push(question);
  }

  AddNewAnswer(question) {
    let answer  =   new AnswerAddModel();
    answer.text = 'answer';
    console.log(this.exam);
    question.answers.push(answer);
  }


  readURL(event, question: QuestionAddModel): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => question.image = reader.result;

        reader.readAsDataURL(file);
    }
}

}
