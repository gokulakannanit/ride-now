import { Component } from '@angular/core';
import { TripDetail } from 'src/app/components/trip-details/trip-details.component';

@Component({
  templateUrl: './ride-history.component.html',
  styleUrls: ['./ride-history.component.css']
})
export class RideHistoryComponent {
  tripDetail: TripDetail = {
      driverName: 'Chandran L.K.M',
      vechileType: 'auto',
      vechileCompany: 'Bajaj',
      vechileModel: 'LPG 750',
      vechileTimer: 5,
      contactNo: '+917358630994',
      rating: 3,
      vechileNumber: 'TN14 Z 1234',
      paymentMode: 'CASH',
      approxPrice: 120,
      distance: 12,
      duration: 23,
      totalTrip: 124,
      imageURL: '/assets/images/driver/1.jpg',
  }
}
