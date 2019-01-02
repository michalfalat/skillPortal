import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/services/animations';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  animations: [fadeInOut]
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
