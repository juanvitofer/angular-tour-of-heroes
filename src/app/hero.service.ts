import { Injectable } from '@angular/core';
/* Import the Hero class */
import { Hero } from './hero';
/* Import the mock HEROES */
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root', // <-- Provide the service at the root level
})
export class HeroService {

  constructor() { }

  // Add a getHeroes() method to return the mock heroes
  /**
   * Gets the heroes from the mock heroes
   */
  getHeroes(): Hero[] {
    return HEROES;
  }

}
