import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetail } from '../trip-details/trip-details.component';
import { StarRatingColor, StarRatingComponent } from '../star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'a-driver-detail',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, MatIconModule],
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent {
    @Input() tripDetail:TripDetail;
    starColor:StarRatingColor = StarRatingColor.warn;
}
