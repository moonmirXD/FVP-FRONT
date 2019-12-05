import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { NavbarService } from "src/app/core/services/navbar-service/navbar.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private nav: NavbarService
  ) {}

  ngOnInit() {
    this.nav.hide();
  }
  loginUserData = this.fb.group({
    username: [""],
    password: [""]
  });

  loginUser() {
    this.authService.loginAdmin(this.loginUserData.getRawValue()).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/powercard-list"]);
      },
      err => console.log(err)
    );
    console.log(this.loginUserData);
  }
}
