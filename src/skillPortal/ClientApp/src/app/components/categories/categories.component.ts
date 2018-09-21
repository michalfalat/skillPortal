import { fadeInOut } from './../../services/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CategoryViewModel } from '../../models/CategoryModels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [fadeInOut]
})
export class CategoriesComponent implements OnInit {
  
  private data: CategoryViewModel[] = null;
  public isLoading = true;

  constructor(private  apiService: ApiService, private router: Router) { }
  

  ngOnInit() {
    this.reloadCategories();
  }

  reloadCategories() {
    this.isLoading = true;
    this.data = null;
    this.apiService.getAllCategories()
    .subscribe((result) => {
      this.data = result;
      this.isLoading = false;
    });
  }

  viewCategoryTests(id) {
    this.router.navigate(['/category/' + id + '/tests']);
  }
}
