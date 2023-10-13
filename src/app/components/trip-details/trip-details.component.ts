import { Component, OnInit } from '@angular/core';
import { StarRatingColor } from '../star-rating/star-rating.component';

export interface TripDetail {
  driverName: String,
  vechileType: String,
  vechileCompany: String,
  vechileModel: String,
  vechileTimer: number,
  contactNo: String,
  rating: number,
  vechileNumber: String,
  paymentMode: String,
  approxPrice: number,
  distance: number,
  duration: number,
  totalTrip: number,
  imageURL: String,
}

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.warn;
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

  onRatingChanged(evt: Event): void {

  }

  ngOnInit(): void{
    setTimeout(this.stopWatch.bind(this), 60000)
  }
  stopWatch(): void {
    this.tripDetail.vechileTimer = this.tripDetail.vechileTimer - 1;
    this.tripDetail.vechileTimer > 0 ? setTimeout(this.stopWatch.bind(this), 60000): '';
  }
}
