import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminapiService {
  private galleryFormPostURL = "http://localhost:4000/users";
  private galleryFormListURL = "http://localhost:4000/users";
  constructor(private http: HttpClient) {}

  postGalleryForm(form) {
    return this.http.post(this.galleryFormPostURL, form);
  }
  getGalleryForms() {
    return this.http.get(this.galleryFormListURL);
  }
}
