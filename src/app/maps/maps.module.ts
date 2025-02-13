import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = environment.mapbox_key;

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { environment } from '../../environments/environment';
import { CounterAloneComponent } from "../alone/components/counter-alone/counter-alone.component";
import { SideMenuComponent } from "../alone/components/side-menu/side-menu.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { AngularLogoComponent } from "./components/angular-logo/angular-logo.component";
import { BtnMyLocationComponent } from "./components/btnMyLocation/btnMyLocation.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent,
    LoadingComponent,
    AngularLogoComponent,
    BtnMyLocationComponent,
    SearchBarComponent
]
})
export class MapsModule { }
