import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollInTopDirective } from './scroll-in-top.directive';



@NgModule({
  declarations: [
    ScrollInTopDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollInTopDirective
  ]
})
export class DirectivesModule { }
