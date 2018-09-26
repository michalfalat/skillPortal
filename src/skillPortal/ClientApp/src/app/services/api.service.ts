import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs';
import { EndpointFactory } from './endpoint-factory.service';
import { catchError } from 'rxjs/operators';
import { CategoryAddModel } from '../models/CategoryModels';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends EndpointFactory {
    constructor( http: HttpClient, configurations: ConfigurationService, injector: Injector) {
    super(http, configurations, injector);
  }
  private readonly categoryUrl: string =  this.configurations.baseUrl + '/api/category/';
  private readonly categoryAddUrl: string =  this.configurations.baseUrl + '/api/category/';

  private  examForCategoryUrl(catId): string  { return  this.configurations.baseUrl + '/api/exam/category/' + catId ; }

  getAllCategories()  {

    return this.http.get(this.categoryUrl, this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getAllCategories());
      }));
  }

  addNewCategory(model: CategoryAddModel): Observable<CategoryAddModel> {
    return this.http.post<CategoryAddModel>(this.categoryAddUrl, model, this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getAllCategories());
      }));

  }
  getExamsForCategory(catId)  {
    return this.http.get(this.examForCategoryUrl(catId), this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getExamsForCategory(catId));
      }));
  }
}


