import { Component, inject } from '@angular/core';
import { SearchResultsComponent } from "../search-results/search-results.component";
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  imports: [SearchResultsComponent],
  templateUrl: './search-bar.component.html',
  styles: `
    .search-container {
      background-color: white;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
      left: 20px;
      padding: 5px;
      position: fixed;
      top: 280px;
      width: 270px;
    }
  `,
})
export class SearchBarComponent {
  private debounceTimer?: NodeJS.Timeout;
  private placesService = inject(PlacesService);

  onQueryChange(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() =>{
      this.placesService.getPlacesByQuery(query);
    }, 350);
  }
}
