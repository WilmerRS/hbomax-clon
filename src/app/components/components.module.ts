import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HboIconComponent } from './hbo-icon/hbo-icon.component';
import { RouterModule } from '@angular/router';
import { HboHeaderComponent } from './hbo-header/hbo-header.component';

@NgModule({
  declarations: [HboIconComponent, HboHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HboIconComponent, HboHeaderComponent],
})
export class ComponentsModule {}
