import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FavoritesStoreService} from "../../services/favorites-store.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input() searchQuery: string = "";
  @Output() onSubmitSearchQuery = new EventEmitter();

  constructor(public favoritesStoreService: FavoritesStoreService) {
  }

  onSubmit(e: FormDataEvent): void {
    e.preventDefault()
    this.onSubmitSearchQuery.emit(this.searchQuery)
  }
}
