import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Import the FormsModule */
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
/* Import the HttpClientModule */
import { HttpClientModule } from '@angular/common/http';
/* Import the HttpClientInMemoryWebApiModule */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
/* Import the InMemoryDataService */
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Add FormsModule
    AppRoutingModule,
    HttpClientModule, // <-- Add the HttpClientModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
