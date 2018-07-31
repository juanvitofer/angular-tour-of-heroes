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
  // Edit the definition of the heroes property
  heroes: Hero[];

  // Add a private heroService parameter of type HeroService to the constructor
  constructor(private heroService: HeroService) { }

  // Call the getHeroes() method inside the ngOnInit lifecycle hook
  // Angular call ngOnInit at an appropriate time after constructing a HeroesComponent instance
  ngOnInit() {
    this.getHeroes();
  }

  // Adjust the getHeroes() method according to the made changes in HeroService
  // Now is waited for the Observable to emit the array of heroes
  /**
   * Gets all heroes
   */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
