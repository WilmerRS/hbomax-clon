import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {
  constructor(private _httpClient:  HttpClient) { }

  get() {
    return this._httpClient.get<Category[]>('/assets/api/categories.json')
  }
}
