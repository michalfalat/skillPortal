import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../services/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
  animations: [fadeInOut]
})
export class TestsComponent implements OnInit {

  public catId = null;
  public isLoading = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.catId = this.route.snapshot.params['catId'];
  }

}
