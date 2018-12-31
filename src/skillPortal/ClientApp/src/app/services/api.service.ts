import { FileAddModel } from './../models/FileModels';
import { Injectable, Injector, Inject, forwardRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs';
import { EndpointFactory } from './endpoint-factory.service';
import { catchError } from 'rxjs/operators';
import { CategoryAddModel } from '../models/CategoryModels';
import { SocialUser } from 'angular-6-social-login-v2';
import { MainAuthService } from './main-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends EndpointFactory {
  constructor(http: HttpClient, configurations: ConfigurationService, injector: Injector,
    private mainAuthService: MainAuthService) {
    super(http, configurations, injector);
  }


  // private _mainAuthService: MainAuthService;


  // private get mainAuthService() {
  //   if (!this._mainAuthService) {
  //     this._mainAuthService = this.injector.get(MainAuthService);
  //   }

  //   return this._mainAuthService;
  // }


  // SOCIAL USER
  private socialUserRegisterUrl(): string { return this.configurations.baseUrl + '/api/account/registerSocialUser'; }

  // CATEGORIES
  private categoryUrl(): string { return this.configurations.baseUrl + '/api/category/'; }
  private categoryAddUrl(): string { return this.configurations.baseUrl + '/api/category/'; }
  private categoryInfoUrl(catId): string { return this.configurations.baseUrl + '/api/category/' + catId; }

  // FILES
  private fileAddUrl(): string { return this.configurations.baseUrl + '/api/file/'; }
  private examForCategoryUrl(catId): string { return this.configurations.baseUrl + '/api/exam/category/' + catId; }
  private filesForCategoryUrl(catId): string { return this.configurations.baseUrl + '/api/file/category/' + catId; }
  private file(fileId): string { return this.configurations.baseUrl + '/api/file/' + fileId; }


  registerUser(model: SocialUser): Observable<SocialUser> {
    return this.http.post<SocialUser>(this.socialUserRegisterUrl(), model, this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.registerUser(model));
      }));

  }

  getAllCategories() {

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
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ',
      'Social_Authorization': this.mainAuthService.user.token,
      'Content-Type': 'application/json',
      'Accept': `application/vnd.iman.v${EndpointFactory.apiVersion}+json, application/json, text/plain, */*`,
      'App-Version': ConfigurationService.appVersion
    });

    return this.http.post<CategoryAddModel>(this.categoryAddUrl(), model, { headers: headers }).pipe(
      catchError(error => {
        return this.handleError(error, () => this.addNewCategory(model));
      }));

  }
  getExamsForCategory(catId) {
    return this.http.get(this.examForCategoryUrl(catId), this.getRequestHeaders()).pipe(
      catchError(error => {
        return this.handleError(error, () => this.getExamsForCategory(catId));
      }));
  }

  getFilesForCategory(catId) {
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
    return this.http.get(this.file(fileId), options).pipe(
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
    return this.http.post<FileAddModel>(this.fileAddUrl(), fd, options).pipe(
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


