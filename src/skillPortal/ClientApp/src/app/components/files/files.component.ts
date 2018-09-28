import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../services/animations';
import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  animations: [fadeInOut]
})
export class FilesComponent implements OnInit {


  public catId = null;
  public isLoading = true;

  constructor(@Inject(ApiService) private apiService: ApiService, private route: ActivatedRoute, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.catId = this.route.snapshot.params['catId'];
    this.loadData();
  }

  loadData() {
    // this.isLoading = true;
    // this.apiService.getExamsForCategory(this.catId).subscribe((res) => {
    //   this.data = res;
    //   console.log(this.data);
      this.isLoading = false;
    //   this.ref.detectChanges();
    // });
  }
}
