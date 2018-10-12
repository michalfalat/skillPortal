
import { NgModule, ErrorHandler } from '@angular/core';
import { MatButtonModule, MatCheckboxModule,  MatInputModule, MatToolbarModule, MatIconModule,
   MatExpansionModule,
   MatCardModule,
   MatListModule,
   MatSnackBarModule,
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatTableModule,
   MatTabsModule,
   MatTooltipModule} from '@angular/material';

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
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule
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
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule
  ],
})
export class CustomMaterialModule { }
