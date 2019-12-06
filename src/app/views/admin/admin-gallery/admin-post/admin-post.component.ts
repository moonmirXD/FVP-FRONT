import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminapiService } from "src/app/core/services/adminapi.service";
import { NavbarService } from "src/app/core/services/navbar-service/navbar.service";
import { HttpEventType, HttpEvent } from "@angular/common/http";

@Component({
  selector: "app-admin-post",
  templateUrl: "./admin-post.component.html",
  styleUrls: ["./admin-post.component.css"]
})
export class AdminPostComponent implements OnInit {
  public galleryForm: FormGroup;
  progress: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private adminApiService: AdminapiService,
    private nav: NavbarService
  ) {}

  ngOnInit() {
    this.nav.show();
    this.galleryForm = this.formBuilder.group({
      postTitle: ["asdas", Validators.required],
      description: ["asdasd", Validators.required],
      uploadFile: [null],
      contentType: ["asdasd", Validators.required],
      order: ["R", Validators.required],
      url: ["asdasd", Validators.required],
      access: ["public", Validators.required]
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.galleryForm.patchValue({
      uploadFile: file
    });
    this.galleryForm.get("uploadFile").updateValueAndValidity();
  }

  onSubmit() {
    this.adminApiService
      .postGalleryForm(
        this.galleryForm.value,
        this.galleryForm.value.uploadFile
      )
      .subscribe((event: HttpEvent<any>, res) => {
        console.log("gallery form ", this.galleryForm.value);
        console.log(res);
        switch (event.type) {
          case HttpEventType.Sent:
            console.log("Request has been made!");
            break;
          case HttpEventType.ResponseHeader:
            console.log("Response header has been received!");
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round((event.loaded / event.total) * 100);
            console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            console.log("User successfully created!", event.body);
            setTimeout(() => {
              this.progress = 0;
            }, 1500);
        }
      });
  }
}
