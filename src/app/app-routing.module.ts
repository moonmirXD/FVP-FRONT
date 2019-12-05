import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/admin/login/login.component";
import { PowercardListComponent } from "./views/admin/powercard/powercard-list/powercard-list.component";
import { PowercardAddComponent } from "./views/admin/powercard/powercard-add/powercard-add.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "powercard-list", component: PowercardListComponent },
  { path: "powercard-add", component: PowercardAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
