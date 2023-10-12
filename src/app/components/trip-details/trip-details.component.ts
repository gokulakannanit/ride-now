import { Component, OnInit } from '@angular/core';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  starCount:number = 5;
  rating:number = 3;
  starColor:StarRatingColor = StarRatingColor.warn;
  timer:number = 5;

  onRatingChanged(evt: Event): void {

  }

  ngOnInit(): void{
    setTimeout(this.stopWatch.bind(this), 60000)
  }
  stopWatch(): void {
    this.timer = this.timer - 1;
    this.timer > 0 ? setTimeout(this.stopWatch.bind(this), 60000): '';
  }
}
