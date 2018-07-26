import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // Add an array to store the messages
  messages: string[] = [];

  // Add the add() method
  /**
   * Adds a message to the messages array
   * @param message to add
   */
  add(message: string) {
    this.messages.push(message);
  }

  // Add the clear() method
  /**
   * Deletes all messages
   */
  clear() {
    this.messages = [];
  }
}
