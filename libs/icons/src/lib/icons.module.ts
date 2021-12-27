import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, MatIconModule, HttpClientModule],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class IconsModule {}
