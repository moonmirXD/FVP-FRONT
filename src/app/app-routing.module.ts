import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/admin/login/login.component";
import { PowercardListComponent } from "./views/admin/powercard/powercard-list/powercard-list.component";
import { PowercardAddComponent } from "./views/admin/powercard/powercard-add/powercard-add.component";
import { AuthGuard } from "./core/guard/auth.guard";
import { AdminPostComponent } from "./views/admin/admin-gallery/admin-post/admin-post.component";
import { GalleryListComponent } from "./views/admin/admin-gallery/gallery-list/gallery-list.component";
import { GalleryViewComponent } from "./views/admin/admin-gallery/gallery-view/gallery-view.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "powercard-list",
    component: PowercardListComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "",
    component: LoginComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "powercard-add",
    component: PowercardAddComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "admin-post", // this is like gallery-post
    component: AdminPostComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "gallery-list",
    component: GalleryListComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "gallery/:id",
    component: GalleryViewComponent
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
