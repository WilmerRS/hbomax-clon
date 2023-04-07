import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[hboScrollInTop]'
})
export class ScrollInTopDirective implements OnInit  {
  private _isScrollInTop = true;

  @Output() scrollChange = new EventEmitter<boolean>()

  @HostListener('window:scroll', [])
  private _onWindowScroll(): void {
    this._validateIfScrollIsInTop();
  }

  ngOnInit(): void {
    this._validateIfScrollIsInTop();
  }

  private _validateIfScrollIsInTop(): void {
    const verticalOffset = this._getScrollYPosition();

    const scrollIsLessThanHeader = verticalOffset < 50
    if (scrollIsLessThanHeader === this._isScrollInTop) {
      return
    }

    this._isScrollInTop = scrollIsLessThanHeader;
    this.scrollChange.emit(this._isScrollInTop)
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
