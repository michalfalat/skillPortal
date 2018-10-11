import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
public subject: Subject<Object>;
  constructor() { 
    this.subject = new Subject<Object>();
  }
}
