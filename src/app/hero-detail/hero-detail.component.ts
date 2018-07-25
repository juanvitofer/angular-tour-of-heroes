/* Add the Input class */
import { Component, OnInit, Input } from '@angular/core';
/* Import the Hero class */
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // Add a hero property preceded by the @Input() decorator
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}