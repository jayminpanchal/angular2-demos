import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to homepage";
  inputValue = "value from databinding";
  isRequired = true;
  @Input() user;

  constructor() {
  }

  ngOnInit() {
  }

  alertMe(val: string) {
    alert(val);
  }
}
