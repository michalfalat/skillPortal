import { FileAddModel } from './../models/FileModels';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  // CATEGORIES
  private categoryUrl(): string     {return  this.configurations.baseUrl + '/api/category/'; }
  private categoryAddUrl(): string  {return  this.configurations.baseUrl + '/api/category/'; }
  private categoryInfoUrl(catId): string  {return  this.configurations.baseUrl + '/api/category/' + catId; }

  // FILES
  private fileAddUrl(): string {return this.configurations.baseUrl + '/api/file/';}
  private examForCategoryUrl(catId): string  { return  this.configurations.baseUrl + '/api/exam/category/' + catId ; }
  private filesForCategoryUrl(catId): string  { return  this.configurations.baseUrl + '/api/file/category/' + catId ; }
  private file(fileId): string  { return  this.configurations.baseUrl + '/api/file/' + fileId ; }



  getAllCategories()  {

    return this.http.get(this.categoryUrl(), this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getAllCategories());
      }));
  }

  getCategoryInfo(catId) {
    return this.http.get(this.categoryInfoUrl(catId), this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getCategoryInfo(catId));
      }));
  }

  addNewCategory(model: CategoryAddModel): Observable<CategoryAddModel> {
    return this.http.post<CategoryAddModel>(this.categoryAddUrl(), model, this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.addNewCategory(model));
      }));

  }
  getExamsForCategory(catId)  {
    return this.http.get(this.examForCategoryUrl(catId), this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getExamsForCategory(catId));
      }));
  }

  getFilesForCategory(catId)  {
    return this.http.get(this.filesForCategoryUrl(catId), this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getFilesForCategory(catId));
      }));
  }

  getFile(fileId) {
    const headers = this.getRequestHeadersForFile();
    const options: IRequestOptions = {
      headers: headers.headers,
      responseType: 'blob' as 'json'
    };
    return this.http.get( this.file(fileId), options).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getFile(fileId));
      }));
  }

  addNewFile(model: FileAddModel) {
    const fd: FormData = new FormData();
    fd.append('CatId', model.catId.toString());
    fd.append('File', model.file);
    fd.append('Name', '');
    fd.append('Description', model.description ? model.description : '');
    const headers = this.getRequestHeadersForFile();
    const options: IRequestOptions = {
      headers: headers.headers,
      reportProgress: true,
      observe: 'events'
    };
    return this.http.post<FileAddModel>(this.fileAddUrl(), fd, options ).pipe(
      catchError(error => {
        return this.handleError(error, () => this.addNewFile(model));
      }));

  }
}

export interface IRequestOptions {
  body?: any;
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
  observe?: any;
  params?: HttpParams | { [param: string]: string | Array<string> };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}


