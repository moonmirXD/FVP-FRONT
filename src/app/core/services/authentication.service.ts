import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private adminLoginUrl: string = "http://127.0.0.1:3000/admin/login";
  constructor(private http: HttpClient, private router: Router) {}

  loginAdmin(user) {
    return this.http.post<any>(this.adminLoginUrl, user);
  }
  loggedinAdmin() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  logoutAdmin() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }
}
