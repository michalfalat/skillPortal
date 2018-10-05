
import { NgModule, ErrorHandler } from '@angular/core';
import { MatButtonModule, MatCheckboxModule,  MatInputModule, MatToolbarModule, MatIconModule,
   MatExpansionModule,
   MatCardModule,
   MatListModule,
   MatSnackBarModule,
   MatProgressBarModule,
   MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports:  [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
})
export class CustomMaterialModule { }
