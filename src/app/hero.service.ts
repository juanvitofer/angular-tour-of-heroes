import { Injectable } from '@angular/core';
/* Import the Hero class */
import { Hero } from './hero';
/* Import the mock HEROES */
import { HEROES } from './mock-heroes';
/* import the Observable and of symbols */
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root', // <-- Provide the service at the root level
})
export class HeroService {

  constructor() { }

  // Replace the getHeroes() method
  /**
   * Gets the heroes from the mock heroes
   */
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
