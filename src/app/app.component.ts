import {Component, OnInit} from '@angular/core';
import {DomainService} from "./services/domain.service";
import {Domain} from "./models/domain";
import {DomainStatus} from "./models/domain-status";
import {FavoritesStoreService} from "./services/favorites-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  domains: Domain[] = []
  domainsLoading = false
  selectedDomain?: {domain: Domain, status: DomainStatus}

  constructor(private domainService: DomainService, public favoritesStoreService: FavoritesStoreService) {
  }

  changeSelectedDomain({domain, status}: {domain: Domain, status: DomainStatus}) {
    this.selectedDomain = {domain, status}
  }

  getDomains(query: string) {
    this.domains = []
    this.domainsLoading = true
    this.selectedDomain = undefined
    this.domainService.getDomains(query).subscribe(res => {
      this.domains = res.results
      this.domainsLoading = false
    })
  }

  cleanSelectedDomain(){
    this.selectedDomain = undefined
  }

  ngOnInit(): void {
    this.favoritesStoreService.syncDomainsFromStorage()
  }
}
