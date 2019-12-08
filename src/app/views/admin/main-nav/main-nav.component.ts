import { Component, Input } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { NavbarService } from "src/app/core/services/navbar-service/navbar.service";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public nav: NavbarService,
    public authentication: AuthenticationService
  ) {}
}
