import {Component} from '@angular/core';
import {DomainService} from "./services/domain.service";
import {Domain} from "./models/domain";
import {DomainStatus} from "./models/domain-status";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  domains: Domain[] = []
  domainsLoading = false
  selectedDomain?: {domain: Domain, status: DomainStatus}

  constructor(public domainService: DomainService) {
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
}
