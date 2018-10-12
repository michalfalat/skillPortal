import { fadeInOut } from './../../services/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  animations: [fadeInOut]
})
export class CategoryDetailComponent implements OnInit {

  public navLinks = [
    {path: 'overview', label: 'Overview'  },
    {path: 'ratings', label: 'Ratings'  },
    {path: 'tests', label: 'Tests'  },
    {path: 'files', label: 'Files' } ];
  constructor() { }

  ngOnInit() {
  }

}
