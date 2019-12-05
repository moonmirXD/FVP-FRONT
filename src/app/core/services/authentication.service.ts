import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private adminLoginUrl: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) {}

  loginAdmin(user) {
    return this.http.post<any>(this.adminLoginUrl, user);
  }
}
