import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  ],
  exports: [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  ]
})
export class MaterialModule {}
