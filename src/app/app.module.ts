import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {DomainCardComponent} from './components/domain-card/domain-card.component';
import {DomainInfoComponent} from './components/domain-info/domain-info.component';
import {FavoritesComponent} from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DomainCardComponent,
    DomainInfoComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
