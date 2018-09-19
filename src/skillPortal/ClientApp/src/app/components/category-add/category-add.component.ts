import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CategoryAddModel } from '../../models/CategoryModels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  public addModel: CategoryAddModel = new CategoryAddModel();
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  AddCategory() {
    console.log('sending new category: ');
    console.log(this.addModel);
    this.apiService.addNewCategory(this.addModel)
    .subscribe((result) => this.router.navigate(['/categories']));
  }

}
