/* Add the Input class */
import { Component, OnInit, Input } from '@angular/core';
/* Import the Hero class */
import { Hero } from '../hero';
/* Import the ActivadedRoute Service */
import { ActivatedRoute } from '@angular/router';
/* Import the Location Service */
import { Location } from '@angular/common';
/* Import the Hero Service */
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Add a hero property preceded by the @Input() decorator
  @Input() hero: Hero;

  // Inject the ActivatedRoute, HeroService, and Location services into the constructor
  constructor(
    private route: ActivatedRoute, // <-- Holds information about the route to this instance of the HeroDetailComponent
    private heroService: HeroService, // <-- Gets hero data from the remote server
    private location: Location // <-- Angular service for interacting with the browser
  ) {}

  // Call getHero() method
  ngOnInit(): void {
    this.getHero();
  }

  // Create the getHero() method
  /**
   * Get a specif hero
   */
  getHero(): void {
    // The route.snapshot is a static image of the route information shortly after the component was created
    // The paramMap is a dictionary of route parameter values extracted from the URL
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // Add a goBack() method
  /**
   * Navigates backward one step in the browser's history
   */
  goBack(): void {
    this.location.back();
  }

}
