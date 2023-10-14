import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CabSelectorComponent } from 'src/app/components/cab-selector/cab-selector.component';
import { TripDetailsComponent } from 'src/app/components/trip-details/trip-details.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  onRideNow(): void {
    this._bottomSheet.open(CabSelectorComponent).afterDismissed().subscribe(this.showTripDetails.bind(this)); ;
  }

  showTripDetails(result: any):void {
    console.log(result);
    console.log('Bottom sheet has been dismissed.');
    this._bottomSheet.open(TripDetailsComponent);
  }
}
