import {Injectable} from '@angular/core';
import {DomainStatus} from "../models/domain-status";
import {DomainService} from "./domain.service";

@Injectable({
  providedIn: 'root'
})
export class FavoritesStoreService {

  constructor(private domainService: DomainService) {
  }

  favoritesIsVisible = false
  favoriteDomains: string[] = []

  syncDomainsFromStorage(): void {
    const favoritesJson = localStorage.getItem('favorites')
    if (!favoritesJson) {
      this.favoriteDomains = []
      return
    }
    this.favoriteDomains = JSON.parse(favoritesJson)
  }

  syncDomainsToStorage(): void {
    const favoritesJson = JSON.stringify(this.favoriteDomains)
    localStorage.setItem('favorites', favoritesJson)
  }

  addDomain(domain: string): void {
    if (this.favoriteDomains.includes(domain)) {
      return alert("This domain is already in your favorites.")
    }
    this.favoriteDomains.push(domain)
    this.syncDomainsToStorage()
  }

  removeDomain(domain: string): void {
    this.favoriteDomains = this.favoriteDomains.filter(_domain => _domain !== domain)
    this.syncDomainsToStorage()
  }

  removeAllDomains(): void {
    this.favoriteDomains = []
    this.syncDomainsToStorage()
  }

  toggleVisibility(){
    this.favoritesIsVisible = !this.favoritesIsVisible
  }
}
