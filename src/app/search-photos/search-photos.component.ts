import { Component} from '@angular/core';
import { FlickrService } from "../api/flickr.service";

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})
export class SearchPhotosComponent {
  images: any[] = [];
  keyword: string = '';

  constructor(private flickrService: FlickrService) { }

  instantSearch(event: any): void {
    if(event) {
      this.keyword = event.target.value.toLowerCase();
      if (this.keyword && this.keyword.length > 0) {
        this.flickrService.searchByKeyword(this.keyword)
          .subscribe((res: any[]) => {
            this.images = res;
          });
      }
    }
  }
}
