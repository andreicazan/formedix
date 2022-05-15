export interface FlickrPhotoDto {
  farm?: string;
  id?: string;
  secret?: string;
  server?: string;
  title?: string;
}

export interface FlickrOutputDto {
  photos?: {
    photo?: FlickrPhotoDto[];
  };
}
