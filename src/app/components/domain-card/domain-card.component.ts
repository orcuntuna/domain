import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Domain} from "../../models/domain";
import {DomainStatus} from "../../models/domain-status";
import {DomainService} from "../../services/domain.service";

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrls: ['./domain-card.component.css']
})
export class DomainCardComponent implements OnInit {

  @Input() domain!: Domain;
  @Output() onSelectDomain = new EventEmitter()
  status?: DomainStatus
  statusLoading = false

  constructor(private domainService: DomainService) {
  }

  ngOnInit(): void {
    this.domainService.getDomainStatus(this.domain.domain).subscribe(res => {
      this.status = res.status[0]

      if (this.status.status.includes('marketed')) {
        this.status.status = "marketed"
      } else if (this.status.status.includes('inactive')) {
        this.status.status = "inactive"
      } else if (this.status.status.includes('active')) {
        this.status.status = "active"
      } else {
        this.status.status = "unknown"
      }

      this.statusLoading = false
    })
  }

  onClickDomainCard() {
    if (!this.status) return
    this.onSelectDomain.emit({domain: this.domain, status: this.status})
  }

  get quickPurchaseLink(){
    return `https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=${this.domain.domain}`
  }
}
