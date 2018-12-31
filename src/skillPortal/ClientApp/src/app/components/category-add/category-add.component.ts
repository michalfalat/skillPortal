import { fadeInOut } from './../../services/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CategoryAddModel } from '../../models/CategoryModels';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MainAuthService } from 'src/app/services/main-auth.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
  animations: [fadeInOut]
})
export class CategoryAddComponent implements OnInit {

  public isLoading = false;
  public addModel: CategoryAddModel = new CategoryAddModel();
  constructor(private apiService: ApiService, private router: Router, private snackbar: MatSnackBar, public mainAuthService: MainAuthService) { }

  ngOnInit() {
    const user = this.mainAuthService.user;
    if (user == null) {
      this.router.navigate(['/login']);
    }
  }

  AddCategory() {
    console.log('sending new category: ');
    console.log(this.addModel);
    this.apiService.addNewCategory(this.addModel)
      .subscribe((result) => this.onCategoryAdded(this.addModel.name)
      );
  }

  onCategoryAdded(name: string) {
    this.snackbar.open('Category "' + name + '" was added', 'OK', {
      duration: 4000,
    });
    this.router.navigate(['/categories']);
  }

}
