import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Homepage";
  inputValue = "value from databinding";
  isRequired = true;
  @Input() user;
  @Output() onYell = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  alertMe(val: string) {
    alert(val);
  }

  fireYellEvent(e){
    this.onYell.emit(e);
  }

}
