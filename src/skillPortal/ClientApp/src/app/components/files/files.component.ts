import { fadeInOut } from './../../services/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  animations: [fadeInOut]
})
export class FilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
