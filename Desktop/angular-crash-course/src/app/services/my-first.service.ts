import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];
  constructor() {
    this.init();
  }



  init(): void {
    this.insert({
      name: "kamdem",
      email: "kamdem@gmail.com",
      message: "hello kamdem"
    });


    this.insert({
      name: "romain",
      email: "romain@gmail.com",
      message: "hello  romain"
    });

    this.insert({
      name: "Guiakam",
      email: "guialam@gmail.com",
      message: "hello guiakam"
    });

  }

  insert(message: {name: string, email: string, message: string}): void{
    this.messages.push(message);
  }

  getAllMessages(): any[]{
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1)
  }
}
