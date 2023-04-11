import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'hbo-horizontal-slider',
  templateUrl: './hbo-horizontal-slider.component.html',
  styleUrls: ['./hbo-horizontal-slider.component.css'],
})
export class HboHorizontalSliderComponent {
  @ViewChild('slider') sliderElement!: ElementRef<HTMLElement>;
  private _SCROLL_MOVE_RATE = 300;

  moveScrollToLeft() {
    this.sliderElement.nativeElement.scrollLeft -= this._SCROLL_MOVE_RATE;
  }

  moveScrollToRight() {
    this.sliderElement.nativeElement.scrollLeft += this._SCROLL_MOVE_RATE;
  }
}
