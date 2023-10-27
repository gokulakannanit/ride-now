import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  getTripDetail() {
    return {
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
}
