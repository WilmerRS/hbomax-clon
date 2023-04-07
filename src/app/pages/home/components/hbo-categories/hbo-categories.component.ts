import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { GetCategoriesService } from 'src/app/services/get-categories.service';

@Component({
  selector: 'hbo-categories',
  templateUrl: './hbo-categories.component.html',
  styleUrls: ['./hbo-categories.component.css'],
})
export class HboCategoriesComponent implements OnInit {
  @ViewChild('slider') sliderElement!: ElementRef<HTMLElement>;

  private _SCROLL_MOVE_RATE = 300;
  categories$!: Observable<Category[]>;

  constructor(private _getCategoriesService: GetCategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this._getCategoriesService.get();
  }

  moveScrollToLeft() {
    this.sliderElement.nativeElement.scrollLeft -= this._SCROLL_MOVE_RATE;
  }

  moveScrollToRight() {
    this.sliderElement.nativeElement.scrollLeft += this._SCROLL_MOVE_RATE;
  }
}
