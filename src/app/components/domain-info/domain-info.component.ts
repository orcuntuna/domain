import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Domain} from "../../models/domain";
import {WhoisService} from "../../services/whois.service";
import {WhoisInfo} from "../../models/whois-info";
import {DomainStatus} from "../../models/domain-status";
import {FavoritesStoreService} from "../../services/favorites-store.service";

@Component({
  selector: 'app-domain-info',
  templateUrl: './domain-info.component.html',
  styleUrls: ['./domain-info.component.css']
})
export class DomainInfoComponent implements OnInit, OnChanges {

  @Input() domain!: Domain
  @Input() status!: DomainStatus
  whoisInfo?: WhoisInfo
  whoisInfoLoading = false
  tldIsSupporting = false

  constructor(public whoisService: WhoisService, public favoritesStoreService: FavoritesStoreService) {
  }

  ngOnInit(): void {
    this.loadWhoisInfo()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["domain"] && changes["domain"].currentValue && changes["domain"].previousValue) {
      this.whoisInfo = undefined
      this.whoisInfoLoading = false
      this.tldIsSupporting = false
      this.loadWhoisInfo()
    }
  }

  private loadWhoisInfo() {
    if (this.status.status === "inactive") return
    if (this.whoisService.tldIsSupported(this.domain.zone)) {
      this.tldIsSupporting = true
      this.whoisInfoLoading = true
      this.whoisService.getWhoisInfo(this.domain.domain).subscribe(res => {
        this.whoisInfo = res.domain
        this.whoisInfoLoading = false
      })
    }
  }

  get isDomainInFavorites() {
    return this.favoritesStoreService.favoriteDomains.includes(this.domain.domain)
  }

  get domainCompanies() {
    const domain = this.domain.domain
    return [
      {
        name: "Godaddy",
        domain: "godaddy.com",
        url: `https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=${domain}`,
      },
      {
        name: "Google Domains",
        domain: "domains.google",
        url: `https://domains.google.com/registrar/search?searchTerm=${domain}`,
      },
      {
        name: "Name",
        domain: "name.com",
        url: `https://www.name.com/domain/search/${domain}`,
      },
      {
        name: "Namecheap",
        domain: "namecheap.com",
        url: `https://www.namecheap.com/domains/registration/results/?domain=${domain}`,
      },
      {
        name: "WordPress",
        domain: "wordpress.com",
        url: `https://wordpress.com/start/domain/domain-only?new=${domain}&search=yes`,
      },
      {
        name: "Porkbun",
        domain: "porkbun.com",
        url: `https://porkbun.com/checkout/search?q=${domain}`,
      },

    ]
  }

}
