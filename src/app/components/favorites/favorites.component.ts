import { Component, OnInit } from '@angular/core';
import {FavoritesStoreService} from "../../services/favorites-store.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(public favoritesStoreService: FavoritesStoreService) { }

  removeDomainWithConfirm(domain: string){
    const r = confirm("Do you want to delete this domain?")
    if(r){
      this.favoritesStoreService.removeDomain(domain)
    }
  }

  removeAllDomainsWithConfirm(){
    const r = confirm("Do you want to delete all domains?")
    if(r){
      this.favoritesStoreService.removeAllDomains()
    }
  }

  ngOnInit(): void {
  }

}
