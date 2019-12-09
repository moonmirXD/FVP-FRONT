import { Component, OnInit } from "@angular/core";
import { NavbarService } from "src/app/core/services/navbar-service/navbar.service";

@Component({
  selector: "app-gallery-view",
  templateUrl: "./gallery-view.component.html",
  styleUrls: ["./gallery-view.component.css"]
})
export class GalleryViewComponent implements OnInit {
  constructor(private nav: NavbarService) {}

  ngOnInit() {
    this.nav.show();
  }
}
