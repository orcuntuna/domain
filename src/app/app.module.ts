import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DomainCardComponent } from './components/domain-card/domain-card.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DomainInfoComponent } from './components/domain-info/domain-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DomainCardComponent,
    SearchResultsComponent,
    DomainInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
