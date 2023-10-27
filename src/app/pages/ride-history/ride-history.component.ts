import { Component } from '@angular/core';
import { TripDetail } from 'src/app/components/trip-details/trip-details.component';
import { TripService } from 'src/app/service/trip.service';

@Component({
  templateUrl: './ride-history.component.html',
  styleUrls: ['./ride-history.component.css']
})
export class RideHistoryComponent {
  tripDetail: TripDetail;
  constructor(private _tripService: TripService) {
    this.tripDetail = _tripService.getTripDetail();
  }
  
}
