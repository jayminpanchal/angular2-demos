import {Component} from '@angular/core';
import {LoggingService} from "./logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {
  title = 'Service Demo!';

  constructor(private logger: LoggingService) {
  }

  logIt() {
    this.logger.log();
  }
}
