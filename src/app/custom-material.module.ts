import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],

  declarations: []
})
export class CustomMaterialModule { }
