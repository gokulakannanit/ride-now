import { Component, OnInit } from '@angular/core';
declare var closeLoader:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mode:String = 'initial';
  ngOnInit(): void {
    closeLoader & closeLoader();
  }

  onRideNow(): void {
    this.mode = 'selection'
  }
}
