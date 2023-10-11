import { Component } from '@angular/core';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {
  starCount:number = 5;
  rating:number = 3;
  starColor:StarRatingColor = StarRatingColor.warn;

  onRatingChanged(evt: Event): void {

  }
}
