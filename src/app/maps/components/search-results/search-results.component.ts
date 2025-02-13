import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services/map.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styles: `
    .pointer {
      cursor: pointer;
    }

    p {
      font-size: 12px;
    }
  `,
})
export class SearchResultsComponent {
  private mapService = inject(MapService);
  private placesService = inject(PlacesService);

  public selectedId: string = '';

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  flyTo(place: Feature) {
    this.selectedId = place.id;

    const [lng, lat] = place.geometry.coordinates;

    this.mapService.flyTo([lng, lat])
  }

  getDirections(place: Feature) {
    if (!this.placesService.userLocation) throw Error('No hay userLocation');

    this.placesService.deletePlaces();

    const start = this.placesService.userLocation;
    const end = place.geometry.coordinates as [number, number];

    this.mapService.getRouteBetweenPoints(start, end);
  }
}
