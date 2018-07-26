import { Component, OnInit } from '@angular/core';
/* Import the Message service */
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Add a pubic messageService parameter of type MessageService to the constructor
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
