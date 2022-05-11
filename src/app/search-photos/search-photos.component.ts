import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})
export class SearchPhotosComponent {

  keyword: string = '';

  constructor() { }

  instantSearch(event: any): void {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
    }
  }

}
