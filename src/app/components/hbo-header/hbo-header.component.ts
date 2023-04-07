import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'hbo-header',
  templateUrl: './hbo-header.component.html',
  styleUrls: ['./hbo-header.component.css'],
})
export class HboHeaderComponent implements OnInit {
  isScrollInTop = true;

  ngOnInit(): void {
    this._validateIfScrollIsInTop();
  }

  @HostListener('window:scroll', [])
  private _onWindowScroll(): void {
    this._validateIfScrollIsInTop();
  }

  private _validateIfScrollIsInTop(): void {
    const verticalOffset = this._getScrollYPosition();

    const scrollIsLessThanHeader = verticalOffset < 50
    if (scrollIsLessThanHeader === this.isScrollInTop) {
      return
    }

    this.isScrollInTop = scrollIsLessThanHeader;
  }

  private _getScrollYPosition(): number {
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  }
}
