import { Component } from '@angular/core';
import {MyFirstService} from "../services/my-first.service";

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']  // Correction ici
})
export class FirstCompComponent {
  name: string = "";
  email: string = "";
  message: string = "";
  isSubmitted = false;
  messages: Array<any> = [];

  constructor(
    private service: MyFirstService
  ) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted =this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.messages.push({
      "name": this.name,
      "email": this.email,
      "message": this.message
    });
    console.log(this.messages);
  }
}
