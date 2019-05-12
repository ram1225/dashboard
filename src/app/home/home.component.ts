import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  posts: any = [];
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe(
      success => {
        this.posts = success;
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
