import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  name: string;

  constructor(private route: ActivatedRoute) {
    this.name = route.snapshot.params['name'];
  }

  ngOnInit() {
  }

}
