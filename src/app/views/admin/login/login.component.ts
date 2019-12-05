import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}
  loginUserData = this.fb.group({
    username: [""],
    password: [""]
  });

  loginUser() {
    this.authService
      .loginAdmin(this.loginUserData.getRawValue())
      .subscribe(res => {
        console.log(res);
      });
    console.log(this.loginUserData);
  }
}
