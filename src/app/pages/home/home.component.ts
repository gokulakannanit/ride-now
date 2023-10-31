import { Component, OnInit, signal, ViewChild, ViewContainerRef, WritableSignal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

declare var mapApiLoaded:boolean;

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(private _bottomSheet: MatBottomSheet) {}

  @ViewChild('mapRef', { read: ViewContainerRef })
  private vcref: ViewContainerRef;

  @ViewChild('placeRef', { read: ViewContainerRef })
  private placeRef: ViewContainerRef;
  
  showMap:WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    this.showMap.set(mapApiLoaded || false);
    this.showMap() && this.loadMapComponent();
    this.loadPlaceComponent();
  }

  onRideNow(): void {
    import('src/app/components/cab-selector/cab-selector.component').then(
      ({ CabSelectorComponent }) => {
        this._bottomSheet.open(CabSelectorComponent).afterDismissed().subscribe(this.showTripDetails.bind(this));
      }
    )    
  }

  showTripDetails(result: any):void {
    import('src/app/components/trip-details/trip-details.component').then(
      ({ TripDetailsComponent }) => {
        this._bottomSheet.open(TripDetailsComponent);
      }
    )
  }

  loadPlaceComponent() {
    import('src/app/components/place-selection/place-selection.component').then(
      ({ PlaceSelectionComponent }) => {
        this.placeRef.createComponent(PlaceSelectionComponent);
      }
    )
  }
  
  loadMapComponent() {
    import('src/app/components/map/map.component').then(
      ({ MapComponent }) => {
        this.vcref.createComponent(MapComponent);
      }
    )
  }
}
