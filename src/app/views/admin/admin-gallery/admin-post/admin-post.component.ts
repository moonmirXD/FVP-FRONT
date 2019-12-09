import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminapiService } from "src/app/core/services/adminapi.service";
import { NavbarService } from "src/app/core/services/navbar-service/navbar.service";

@Component({
  selector: "app-admin-post",
  templateUrl: "./admin-post.component.html",
  styleUrls: ["./admin-post.component.css"]
})
export class AdminPostComponent implements OnInit {
  public galleryForm: FormGroup;
  imageURL: string;
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
      uploadFile: [null, Validators.required],
      url: ["asdasd", Validators.required]
    });
  }
  onSelectedFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.galleryForm.patchValue({
      uploadFile: file
    });
    this.galleryForm.get("uploadFile").updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.adminApiService
      .postGalleryForm(this.galleryForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}
