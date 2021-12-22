import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@nx-angular-boilerplate/material';
import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
})
export class SharedModule {}
