import { MatSnackBar } from '@angular/material';
import { ApiService } from './../../services/api.service';
import { FileAddModel } from './../../models/FileModels';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../services/animations';

@Component({
  selector: 'app-file-add',
  templateUrl: './file-add.component.html',
  styleUrls: ['./file-add.component.css'],
  animations: [fadeInOut]
})
export class FileAddComponent implements OnInit {

  public catId = null;
  public addModel: FileAddModel = new FileAddModel();

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.catId = this.route.snapshot.params['catId'];
    this.addModel.catId = this.catId;
  }

  AddFile() {
    console.log('sending new file:  ');
    console.log(this.addModel);
    this.apiService.addNewFile(this.addModel)
    .subscribe((result) => this.onFileAdded(this.addModel.name)
    );
  }

  onFileAdded(name: string ) {
    this.snackbar.open('File "' + name + '" was added', 'OK', {
      duration: 4000,
    });
    this.router.navigate(['/categories']);
  }

}
