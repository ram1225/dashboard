import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.sass"]
})
export class DetailsComponent implements OnInit {
  public id: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    });
  }

  ngOnInit() {}
}
