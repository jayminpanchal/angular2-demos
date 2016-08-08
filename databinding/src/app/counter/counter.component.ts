import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  min = 0;
  max = 100;

  constructor() {
  }

  increment() {
    if (this.count >= this.max) return;
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    if (this.count <= this.min) return;
    this.count--;
    this.countChange.emit(this.count);
  }

  ngOnInit() {
  }

}
