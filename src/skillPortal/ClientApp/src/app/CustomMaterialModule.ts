
import { NgModule, ErrorHandler } from '@angular/core';
import { MatButtonModule, MatCheckboxModule,  MatInputModule, MatToolbarModule, MatIconModule,
   MatExpansionModule, 
   MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,  MatInputModule, MatToolbarModule, MatIconModule, MatExpansionModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,  MatInputModule, MatToolbarModule, MatIconModule, MatExpansionModule, MatCardModule],
})
export class CustomMaterialModule { }
