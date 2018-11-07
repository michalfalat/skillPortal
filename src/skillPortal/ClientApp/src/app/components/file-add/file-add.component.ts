import { MatSnackBar } from '@angular/material';
import { ApiService } from './../../services/api.service';
import { FileAddModel } from './../../models/FileModels';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../services/animations';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file-add',
  templateUrl: './file-add.component.html',
  styleUrls: ['./file-add.component.css'],
  animations: [fadeInOut]
})
export class FileAddComponent implements OnInit {

  public catId = null;
  public uploading = false;
  public isLoading = false;
  public addModel: FileAddModel = new FileAddModel();
  public progress = 1;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.catId = +params['catId'];
      this.addModel.catId = this.catId;
      console.log(this.catId);
    });
  }

  AddFile() {
    this.uploading = true;
    console.log('sending new file:  ');
    console.log(this.addModel);
    this.apiService.addNewFile(this.addModel)
    .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.onFileAdded(this.addModel.name);
      }
    });
  }

  onFileAdded(name: string ) {
    this.uploading = false;
    this.snackbar.open('File "' + this.addModel.file.name + '" was added', 'OK', {
      duration: 4000,
    });
    this.router.navigate(['/categories/' + this.catId + '/files']);
  }

  upload(files) {
    if (files.length === 0) {
      return;
    }
    for (const file of files) {
      this.addModel.file =  file;
    }
  }
}


