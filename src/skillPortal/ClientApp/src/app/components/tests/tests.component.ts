import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../services/animations';
import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ExamsForCategoryViewModel } from '../../models/ExamModels';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
  animations: [fadeInOut]
})
export class TestsComponent implements OnInit {

  public catId = null;
  public isLoading = true;
  public data: ExamsForCategoryViewModel  = null;

  constructor(@Inject(ApiService) private apiService: ApiService, private route: ActivatedRoute, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    // console.log(this.route.parent);
    this.route.parent.params.subscribe(params => {
      this.catId = +params['catId'];
      console.log(this.catId);
      this.loadData();
    });
    // this.catId = this.route.parent.params['catId'];
    // this.loadData();
  }

  loadData() {
  this.isLoading = true;
     this.apiService.getExamsForCategory(this.catId).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.isLoading = false;
      this.ref.detectChanges();
    });

  }

}
