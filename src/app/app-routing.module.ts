import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/admin/login/login.component";
import { PowercardListComponent } from "./views/admin/powercard/powercard-list/powercard-list.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "powercard-list", component: PowercardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
