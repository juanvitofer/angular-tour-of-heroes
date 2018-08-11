import { Injectable } from '@angular/core';
/* Import the HttpClient and HttpHeaders services */
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Import the Hero class */
import { Hero } from './hero';
/* Import the Observable and of symbols */
import { Observable, of } from 'rxjs';
/* Import the Message service */
import { MessageService } from './message.service';
/* Import the catchError symbol from rxjs/operators */
import { catchError, map, tap } from 'rxjs/operators';


// Definde the httpOptions constant
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root', // <-- Provide the service at the root level
})
export class HeroService {

  // Define the heroesUrl with the address of the heroes resource on the server
  private heroesUrl = 'api/heroes';  // URL to web api

  // Add a private messageService parameter of type MessageService to the constructor
  // Inject HttpClient into the constructor
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // Modify the getHeroes() method to use HttpClient
  /**
   * Gets heroes from the server
   */
  getHeroes(): Observable<Hero[]> {
    // Extend the observable result with the pipe() method and give it a catchError() operator
    // Tap into the flow of observable values and send a message via log()
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  // Modify the getHero() method to use HttpClient
  /**
   * Gets a hero by id and it will 404 if id not found
   * @param id used to get a hero
   */
  getHero(id: number): Observable<Hero> {
    // Construct a request URL with the desired hero's id.
    const url = `${this.heroesUrl}/${id}`;
    // The server should respond with a single hero rather than an array of heroes
    // Returns an Observable<Hero> rather than an observable of hero arrays
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  // Add the handleError() method
  /**
   * Handles Http operation that failed and lets the app continue
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Add the log() method
  /**
   * Log a HeroService message with the MessageService
   * @param message to add in the MessageService
   */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // Add the update() method
  /**
   * Updates the hero on the server
   * @param hero to update
   */
  updateHero (hero: Hero): Observable<any> {
    // The HttpClient.put() method takes three parameters:
    // the URL, the data to update (the modified hero in this case), options
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  // Add the addHero() method
  /**
   * Adds a new hero to the server
   * @param hero to add
   */
  addHero (hero: Hero): Observable<Hero> {
    // The HttpClient.post() method takes three parameters:
    // the URL, the data to add, options
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  // Add a deleteHero() method
  /**
   * Deletes the hero from the server
   * @param hero to delete
   */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    // The HttpClient.delete() method takes two parameters:
    // the URL (URL plus the id of the hero to delete), options
    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  // Add the searchHeroes() method
  /**
   * Gets heroes whose name contains search term
   * @param term used to perform the search
   */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    // The HttpClient.delete() method takes the URL like unique parameter
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
