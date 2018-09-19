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
  private readonly customersUrl: string =  this.configurations.baseUrl + '/api/category/';
  private readonly customerAddUrl: string =  this.configurations.baseUrl + '/api/category/';

  getAllCategories()  {

    return this.http.get(this.customersUrl, this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getAllCategories());
      }));
  }

  addNewCategory(model: CategoryAddModel): Observable<CategoryAddModel> {
    return this.http.post<CategoryAddModel>(this.customerAddUrl, model, this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getAllCategories());
      }));

  }
}
