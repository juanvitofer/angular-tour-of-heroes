import { NgModule } from '@angular/core';
/* Import Routes in the RouterModule */
import { RouterModule, Routes, Router } from '@angular/router';
/* Import the HeroesComponent so you can reference it in a Route */
import { HeroesComponent } from './heroes/heroes.component';

// Create a routes array
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // <-- Add RouterModule to the @NgModule.imports array and configure it with the routes
  exports: [ RouterModule ] // <-- Exporting RouterModule makes router directives available for use
})
export class AppRoutingModule { }
