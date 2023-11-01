import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TripService } from 'src/app/service/trip.service';
import { DriverDetailComponent } from '../driver-detail/driver-detail.component';

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
  standalone: true,
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
  imports: [CommonModule, MatIconModule, DriverDetailComponent, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripDetailsComponent implements OnInit {
  constructor(private _tripService:TripService) {}

  tripDetail: TripDetail;

  onRatingChanged(evt: Event): void {

  }

  ngOnInit(): void{
    this.tripDetail = this._tripService.getTripDetail();
    setTimeout(this.stopWatch.bind(this), 60000)
  }
  stopWatch(): void {
    this.tripDetail.vechileTimer = this.tripDetail.vechileTimer - 1;
    this.tripDetail.vechileTimer > 0 ? setTimeout(this.stopWatch.bind(this), 60000): '';
  }
}
