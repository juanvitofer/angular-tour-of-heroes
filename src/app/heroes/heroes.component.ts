import { Component, OnInit } from '@angular/core';
/* Import the Hero class */
import { Hero } from '../hero';
/* Import the HeroService instead of HEROES */
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Rename the component's hero property to selectedHero
  selectedHero: Hero;
  // Edit the definition of the heroes property
  heroes: Hero[];

  // Add a private heroService parameter of type HeroService to the constructor
  constructor(private heroService: HeroService) { }

  // Call the getHeroes() method inside the ngOnInit lifecycle hook
  // Angular call ngOnInit at an appropriate time after constructing a HeroesComponent instance
  ngOnInit() {
    this.getHeroes();
  }

  // Add the onSelect() method
  /**
   * Assigns the clicked hero from the template to the component's selectedHero
   * @param hero clicked by the user
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Create a function to retrieve the heroes from the service
  /**
   * Gets all heroes
   */
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
