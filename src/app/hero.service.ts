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

}
