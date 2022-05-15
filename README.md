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

