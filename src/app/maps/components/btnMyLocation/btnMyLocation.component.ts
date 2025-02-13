import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  imports: [],
  templateUrl: './btnMyLocation.component.html',
  styleUrl: './btnMyLocation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnMyLocationComponent {

  private mapService = inject(MapService);
  private placesService = inject(PlacesService);

  goToMyLocation() {
    if (!this.placesService.userLocation) throw Error('No hay ubicacion de usuario');
    if (!this.mapService.isMapReady) throw Error('No hay mapa disponible');

    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
