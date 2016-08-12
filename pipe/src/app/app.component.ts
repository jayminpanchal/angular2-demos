import {Component} from '@angular/core';
import {FilterPipe} from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipe Demo';
  term = "";
  users = [
    {id: 1, name: 'jaymin', email: 'jaymin@gmail.com'},
    {id: 2, name: 'abc', email: 'abc@gmail.com'},
    {id: 3, name: 'xyz', email: 'xyz@gmail.com'}
  ];
}
