import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';
import { DialogflowService } from '../../services';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  message: Message;

  @Input('messages')
  messages: Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    if (this.message.content.length < 1) {
      return null;
    }
    this.message.timestamp = new Date();

    console.log(this.message);
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      console.log(res.result.fulfillment.speech);
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png');
  }

}
