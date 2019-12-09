import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./views/admin/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PowercardListComponent } from "./views/admin/powercard/powercard-list/powercard-list.component";
import { MaterialModule } from "./core/material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./views/admin/navbar/navbar.component";
import { PowercardAddComponent } from "./views/admin/powercard/powercard-add/powercard-add.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MainNavComponent } from "./views/admin/main-nav/main-nav.component";
import { AuthGuard } from "./core/guard/auth.guard";
import { AuthenticationService } from "./core/services/authentication.service";
import { AdminapiService } from "./core/services/adminapi.service";
import { TokenInterceptorService } from "./core/services/token-interceptor.service";
import { AdminPostComponent } from './views/admin/admin-gallery/admin-post/admin-post.component';
import { GalleryListComponent } from './views/admin/admin-gallery/gallery-list/gallery-list.component';
import { GalleryViewComponent } from './views/admin/admin-gallery/gallery-view/gallery-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PowercardListComponent,
    NavbarComponent,
    PowercardAddComponent,
    MainNavComponent,
    AdminPostComponent,
    GalleryListComponent,
    GalleryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AdminapiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
