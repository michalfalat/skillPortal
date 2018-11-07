import { fadeInOut } from './../../services/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CategoryAddModel } from '../../models/CategoryModels';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
  animations: [fadeInOut]
})
export class CategoryAddComponent implements OnInit {

  public isLoading = false;
  public addModel: CategoryAddModel = new CategoryAddModel();
  constructor(private apiService: ApiService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  AddCategory() {
    console.log('sending new category: ');
    console.log(this.addModel);
    this.apiService.addNewCategory(this.addModel)
    .subscribe((result) => this.onCategoryAdded(this.addModel.name)
    );
  }

  onCategoryAdded(name: string ) {
    this.snackbar.open('Category "' + name + '" was added', 'OK', {
      duration: 4000,
    });
    this.router.navigate(['/categories']);
  }

}
