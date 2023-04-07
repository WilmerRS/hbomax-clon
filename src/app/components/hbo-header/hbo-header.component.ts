import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'hbo-header',
  templateUrl: './hbo-header.component.html',
  styleUrls: ['./hbo-header.component.css'],
})
export class HboHeaderComponent {
  isScrollInTop = true;

  onScrollChange(value: boolean) {
    this.isScrollInTop = value
  }
}
