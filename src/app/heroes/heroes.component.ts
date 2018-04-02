import { Component, OnInit } from '@angular/core';
/* Import the Hero class */
import { Hero } from '../hero';
/* Import the mock HEROES */
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Rename the component's hero property to selectedHero
  selectedHero: Hero;
  // Add a heroes property
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  // Add the onSelect() method
  /**
   * Assigns the clicked hero from the template to the component's selectedHero
   * @param hero clicked by the user
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
