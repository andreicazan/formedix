import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchPhotosComponent } from './search-photos/search-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPhotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
