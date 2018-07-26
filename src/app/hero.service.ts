import { Injectable } from '@angular/core';
/* Import the Hero class */
import { Hero } from './hero';
/* Import the mock HEROES */
import { HEROES } from './mock-heroes';
/* Import the Observable and of symbols */
import { Observable, of } from 'rxjs';
/* Import the Message service */
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root', // <-- Provide the service at the root level
})
export class HeroService {

  // Add a private messageService parameter of type MessageService to the constructor
  constructor(private messageService: MessageService) { }

  // Modify the getHeroes() method to send a message when the heroes are fetched
  /**
   * Gets the heroes from the mock heroes
   */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
