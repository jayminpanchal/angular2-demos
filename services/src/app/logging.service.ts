import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  log(){
    console.log("I am logging service");
  }

}
