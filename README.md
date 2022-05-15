Run `npm install` to install the packages and dependencies

In the `environment.ts` file I've set my key for using the Flicker Api

You can obtain your own key and use it by doing the following steps:
Go to `https://www.flickr.com/services/api/`
Create an account -> Create an app -> Request an API Key

To Run the application use the command:
`ng serve`

Third Party libraries used:
`bootstrap`
-- for designing the template

`ngx-infinite-scroll`
-- is used for implementing the infinite scroll 
-- it allows setting the distance and throttle to numeric values
-- in the scrolled event it allows to concat the images with new results received 

Project structure:

in the directory api are stored the DTOs and the service:
There are two DTOs for structuring the photos as it presents in the documentation
`https://www.flickr.com/services/api/flickr.photos.search.html`

The service contains the method `searchByKeyword` that will be executed each time the key is pressed
It uses a http call for getting the data as the DTO structure

SearchPhotosComponent
-- contains the search of the photos by words 
-- displays the results 
-- uses the infinite scroll

AppModule
The imported modules are:
HttpClientModule
-- used in the http call to get the photos data
InfiniteScrollModule
-- used for implementing the infinite scroll for the displayed results
