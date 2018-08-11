import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  // Add the heroes$ property
  heroes$: Observable<Hero[]>;
  // Add the searchTerms property
  // It is declared as an RxJS Subject
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Add the search() method
  /**
   * Push a search term into the observable stream
   * @param term used to perform the search
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // Wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // Ignore new term if same as previous term
      distinctUntilChanged(),
      // Switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
