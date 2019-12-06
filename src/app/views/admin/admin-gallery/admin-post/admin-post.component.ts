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
      uploadFile: ["", Validators.required],
      contentType: ["asdasd", Validators.required],
      order: ["R", Validators.required],
      url: ["asdasd", Validators.required],
      access: ["public", Validators.required]
    });
  }
  onSubmit() {
    this.adminApiService
      .postGalleryForm(this.galleryForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}
