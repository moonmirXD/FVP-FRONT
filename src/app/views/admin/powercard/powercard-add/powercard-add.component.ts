import { Component, OnInit } from "@angular/core";
import { NavbarService } from "src/app/core/services/navbar-service/navbar.service";

@Component({
  selector: "app-powercard-add",
  templateUrl: "./powercard-add.component.html",
  styleUrls: ["./powercard-add.component.css"]
})
export class PowercardAddComponent implements OnInit {
  constructor(private nav: NavbarService) {}

  ngOnInit() {
    this.nav.show();
  }
}
