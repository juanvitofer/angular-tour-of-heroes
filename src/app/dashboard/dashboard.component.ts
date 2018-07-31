import { Component, OnInit } from '@angular/core';
/* Import the Hero class */
import { Hero } from '../hero';
/* Import the Hero service */
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Create a heroes array
  heroes: Hero[] = [];

  // Inject the HeroService into a private heroService property
  constructor(private heroService: HeroService) { }

  // Calls getHeroes() method
  ngOnInit() {
    this.getHeroes();
  }

  // Create the getHeroes() method
  /**
   * Gets all heroes
   * Reduces the number of heroes displayed to four (2nd, 3rd, 4th, and 5th)
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
