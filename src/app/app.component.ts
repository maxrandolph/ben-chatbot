import { Component } from '@angular/core';
import { Message } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: Message;
  public messages: Message[];
  expanded = true;


  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Hi! I am Pax, the PACK EXPO East bot! I can answer your common questions about the show.', 'assets/images/bot.png', new Date())
    ];
  }
}
