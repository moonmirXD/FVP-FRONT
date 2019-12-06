import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { NavbarService } from "src/app/core/services/navbar-service/navbar.service";
import { AdminapiService } from "src/app/core/services/adminapi.service";
@Component({
  selector: "app-gallery-list",
  templateUrl: "./gallery-list.component.html",
  styleUrls: ["./gallery-list.component.css"]
})
export class GalleryListComponent implements OnInit {
  displayedColumns: string[] = [
    "postTitle",
    "description",
    "uploadFile",
    "contentType",
    "order",
    "url",
    "access"
  ];
  galleryData: any;
  dataSource = new MatTableDataSource<GalleryElement>(GALLERY_DATA);

  constructor(
    private nav: NavbarService,
    private adminApiService: AdminapiService
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.nav.show(); //Side navbar show
    this.dataSource.paginator = this.paginator;

    this.adminApiService.getGalleryForms().subscribe(res => {
      console.log(res);
      this.galleryData = res;
    });
  }
}
export interface GalleryElement {
  postTitle: string;
  description: string;
  uploadFile: string;
  contentType: string;
  order: string;
  url: string;
  access: string;
}

const GALLERY_DATA: GalleryElement[] = [
  {
    postTitle: "1",
    description: "Hydrogen",
    uploadFile: "hoho",
    contentType: "H",
    order: "R",
    url: "hehe",
    access: "hoho"
  }
  // { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  // { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
];
