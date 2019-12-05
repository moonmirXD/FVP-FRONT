import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./views/admin/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PowercardListComponent } from "./views/admin/powercard/powercard-list/powercard-list.component";
import { MaterialModule } from "./core/material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './views/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, PowercardListComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
