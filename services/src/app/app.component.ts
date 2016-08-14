import {Component, OnInit} from '@angular/core';
import {LoggingService} from "./logging.service";
import {HttpserviceService} from "./httpservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, HttpserviceService]
})
export class AppComponent implements OnInit {
  title = 'Service Demo!';
  users = [];

  constructor(private logger: LoggingService, private httpService: HttpserviceService) {
  }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    this.httpService.fetchUsers().subscribe(
      (data) => this.users = data
    );
  }
}
