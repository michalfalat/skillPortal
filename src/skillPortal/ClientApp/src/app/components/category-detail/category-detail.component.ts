import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { CategoryViewModel } from './../../models/CategoryModels';
import { fadeInOut } from './../../services/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  animations: [fadeInOut]
})
export class CategoryDetailComponent implements OnInit {
  private data: CategoryViewModel = null;
  private catId;
  public isLoading = true;

  public navLinks = [
    {path: 'overview', label: 'overview'  },
    {path: 'ratings', label: 'ratings'  },
    {path: 'tests', label: 'tests'  },
    {path: 'files', label: 'files' } ];
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.catId = +params['catId'];
      console.log(this.catId);
      // console.log(params)
    });
    this.reloadCategory();
  }

  reloadCategory() {
    this.isLoading = true;
    this.data = null;
    this.apiService.getCategoryInfo(this.catId)
    .subscribe((result) => {
      this.data = result;
      this.isLoading = false;
    });
  }
}
