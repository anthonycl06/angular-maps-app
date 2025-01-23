import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  standalone: false,

  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef;

  @Input()
  public lngLat?: [number, number];

  ngAfterViewInit(): void {
    if (!this.divMap?.nativeElement) throw 'LngLat is required';

    if (!this.lngLat) throw 'LngLat is required';

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 13,
      interactive: false
    });

    new Marker({
      color: '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16))
    })
      .setLngLat(this.lngLat)
      .addTo(map);
  }

}
