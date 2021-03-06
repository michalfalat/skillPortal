import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../services/animations';
import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FilesForCategoryViewModel } from '../../models/FileModels';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  animations: [fadeInOut]
})
export class FilesComponent implements OnInit {

  public catId = null;
  public isLoading = true;
  public data: FilesForCategoryViewModel = null;
  public displayedColumns: string[] = ['name', 'description', 'downloads', 'date', 'action'];

  constructor(@Inject(ApiService) private apiService: ApiService, private route: ActivatedRoute, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.catId = +params['catId'];
      console.log(this.catId);
      this.loadData();
    });
  }

  loadData() {
    this.isLoading = true;
    this.apiService.getFilesForCategory(this.catId).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.isLoading = false;
      this.ref.detectChanges();
    });

  }
  
  downloadFile(element) {
    this.isLoading = true;
    this.apiService.getFile(element.id).subscribe((res: Blob) => {
          element.downloads = element.downloads + 1;
          const a = document.createElement('a');
          a.href = URL.createObjectURL(res);
          a.download = element.name;
          // start download
          a.click();
      this.isLoading = false;
    });
  }
}
