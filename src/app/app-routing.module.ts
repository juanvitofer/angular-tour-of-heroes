import { NgModule } from '@angular/core';
/* Import Routes in the RouterModule */
import { RouterModule, Routes } from '@angular/router';
/* Import the HeroesComponent so you can reference it in a Route */
import { HeroesComponent } from './heroes/heroes.component';
/* Import the DashboardComponent */
import { DashboardComponent } from './dashboard/dashboard.component';
/* Import HeroDetailComponent */
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Create a routes array
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // <-- Add a route so that the app navigate to the dashboard automatically
  { path: 'dashboard', component: DashboardComponent }, // <-- Add a route that matches a path to the DashboardComponent
  { path: 'detail/:id', component: HeroDetailComponent }, // <-- Add a parameterized route to the AppRoutingModule.routes array
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // <-- Add RouterModule to the @NgModule.imports array and configure it with the routes
  exports: [ RouterModule ] // <-- Exporting RouterModule makes router directives available for use
})
export class AppRoutingModule { }
