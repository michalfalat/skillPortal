import { QuestionAddModel } from './../../models/QuestionModels';
import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../services/animations';
import { ExamAddModel } from './../../models/ExamModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-add',
  templateUrl: './test-add.component.html',
  styleUrls: ['./test-add.component.css'],
  animations: [fadeInOut]
})
export class TestAddComponent implements OnInit {

  public catId;
  public exam: ExamAddModel;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.catId = this.route.snapshot.params['catId'];
    this.exam = new ExamAddModel();
  }
  AddNewQuestion() {
    const question  =   new QuestionAddModel();
    question.text = 'test';
    this.exam.questions.push(question);
  }

}
