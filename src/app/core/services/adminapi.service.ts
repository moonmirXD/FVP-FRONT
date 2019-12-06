import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AdminapiService {
  private galleryFormPostURL = "http://localhost:4000/users";
  private galleryFormListURL = "http://localhost:4000/users";
  constructor(private http: HttpClient) {}

  postGalleryForm(form, file: File) {
    var formData: any = new FormData();
    formData.append("galleryForm", form);
    formData.append("uploadFile", file);

    return this.http
      .post(this.galleryFormPostURL, formData, {
        reportProgress: true,
        observe: "events"
      })
      .pipe(catchError(this.errorMgmt));
  }
  getGalleryForms() {
    return this.http.get(this.galleryFormListURL);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
