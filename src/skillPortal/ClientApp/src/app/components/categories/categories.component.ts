import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CategoryViewModel } from '../../models/CategoryModels';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  private data: CategoryViewModel[] = null;

  constructor(private  apiService: ApiService) { }
  

  ngOnInit() {
    this.reloadCategories();
  }

  reloadCategories() {
    this.apiService.getAllCategories()
    .subscribe((result) =>
     this.data = result );
  }
}
