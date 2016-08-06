import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'jaymin';
  user = {
    name: 'Jaymin',
    email: 'jayminpanchal10@gmail.com'
  };

  yell(e: Event) {
    alert("I am yelling.");
    console.log(e);
  }
}
