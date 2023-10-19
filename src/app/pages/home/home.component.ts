import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CabSelectorComponent } from 'src/app/components/cab-selector/cab-selector.component';
import { TripDetailsComponent } from 'src/app/components/trip-details/trip-details.component';

declare var mapApiLoaded:Boolean;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private _bottomSheet: MatBottomSheet) {}

  showMap: Boolean = false;

  ngOnInit(): void {
    this.showMap = mapApiLoaded;
  }

  onRideNow(): void {
    this._bottomSheet.open(CabSelectorComponent).afterDismissed().subscribe(this.showTripDetails.bind(this)); ;
  }

  showTripDetails(result: any):void {
    this._bottomSheet.open(TripDetailsComponent);
  }
}
