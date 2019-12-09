import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { NavbarService } from "src/app/core/services/navbar-service/navbar.service";
import { AdminapiService } from "src/app/core/services/adminapi.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-gallery-list",
  templateUrl: "./gallery-list.component.html",
  styleUrls: ["./gallery-list.component.css"]
})
export class GalleryListComponent implements OnInit {
  displayedColumns: string[] = ["postTitle", "url", "crud"];
  galleryData: any;
  dataSource: any;
  constructor(
    private nav: NavbarService,
    private adminApiService: AdminapiService,
    private router: Router
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.adminApiService.getGalleryForms().subscribe(res => {
      console.log(res);
      this.galleryData = res;
      this.dataSource = new MatTableDataSource<GalleryElement>(
        this.galleryData
      );
      this.dataSource.paginator = this.paginator;
    });

    this.nav.show(); //Side navbar show
  }

  onSelect(gallery) {
    this.router.navigate(["/gallery", gallery.id]);
    console.log("Clicked.");
  }
}

export interface GalleryElement {
  postTitle: string;

  url: string;
}

const GALLERY_DATA: GalleryElement[] = [
  {
    postTitle: "1",

    url: "hehe"
  }
  // { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  // { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
];
