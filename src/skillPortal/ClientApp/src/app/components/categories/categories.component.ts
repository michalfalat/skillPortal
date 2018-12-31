import { filter } from 'rxjs/operators';
import { SearchService } from './../../services/search.service';
import { fadeInOut } from './../../services/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CategoryViewModel } from '../../models/CategoryModels';
import { Router } from '@angular/router';
import { AuthService } from 'angular-6-social-login-v2';
import { MainAuthService } from 'src/app/services/main-auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [fadeInOut]
})
export class CategoriesComponent implements OnInit {

  private dataMain: CategoryViewModel[] = null;
  public data: CategoryViewModel[] = null;
  public isLoading = true;
  public isLoggedUser = false;

  constructor(private apiService: ApiService, private router: Router, private searchService: SearchService,
    private authService: AuthService, public mainAuthService: MainAuthService) { }


  ngOnInit() {
    this.reloadCategories();
    this.searchService.subject.subscribe((substring: string) => {
      if (this.dataMain != null) {
        this.data = this.dataMain.filter(function (el) {
          return el.name.toLowerCase().includes(substring.toLocaleLowerCase()) ||
            (el.description && el.description.toLowerCase().includes(substring.toLocaleLowerCase()));
        });
      }
    });


  }

  reloadCategories() {
    this.isLoading = true;
    this.dataMain = null;
    this.data = null;
    this.apiService.getAllCategories()
      .subscribe((result) => {
        this.dataMain = result;
        this.data = result;
        this.isLoading = false;
      });
  }




  viewCategoryTests(id) {
    this.searchService.subject.next('');
    this.router.navigate(['/categories/' + id + '/tests']);
  }
  viewCategoryFiles(id) {
    this.searchService.subject.next('');
    this.router.navigate(['/categories/' + id + '/files']);
  }

  viewCategoryRatings(id) {
    this.searchService.subject.next('');
    this.router.navigate(['/categories/' + id + '/ratings']);
  }
}
