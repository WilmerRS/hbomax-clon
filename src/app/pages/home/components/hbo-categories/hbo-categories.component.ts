import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { GetCategoriesService } from 'src/app/services/get-categories.service';

@Component({
  selector: 'hbo-categories',
  templateUrl: './hbo-categories.component.html',
  styleUrls: ['./hbo-categories.component.css'],
})
export class HboCategoriesComponent implements OnInit {
  categories$!: Observable<Category[]>;

  constructor(private _getCategoriesService: GetCategoriesService) { }

  ngOnInit(): void {
    this.categories$ = this._getCategoriesService.get();
  }
}
