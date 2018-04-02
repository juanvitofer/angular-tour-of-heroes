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
  // Refactor the component's hero property to be of type Hero
  hero: Hero = {
    // Initialize it with an id of 1 and the name Windstorm
    id: 1,
    name: 'Windstorm'
  };
  // Add a heroes property
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
