import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  constructor() {
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  ngOnInit() {
  }

}
